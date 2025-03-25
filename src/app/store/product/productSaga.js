import { call, put, all, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCompetitorBrandsRequest,
  fetchCompetitorBrandsSuccess,
  fetchCompetitorBrandsFailure,
  fetchCompetitorProductsRequest,
  fetchCompetitorProductsSuccess,
  fetchCompetitorProductsFailure,
  fetchCompetitorProductsDetailsRequest,
  fetchCompetitorProductsDetailsSuccess,
  fetchCompetitorProductsDetailsFailure,
  fetchCategoryListRequest,
  fetchCategoryListSuccess,
  fetchCategoryListFailure,
} from "./productsSlice";
import {
  fetchDummyCategory,
  fetchCompetitorsDummy,
  fetchCompetitorProductsDummy,
  fetchSelectedCompetitorProductsDetailsDummy,
} from "../../utils/dummyData";

const useDummyData = process.env.NEXT_PUBLIC_USE_DUMMY_DATA === "true";

// Fetch Competitor Brands
function* fetchCompetitorBrandsSaga(action) {
  try {
    const { category_name, brand_name } = action.payload;
    if (useDummyData) {
      yield delay(2000);
      const data = fetchCompetitorsDummy();
      yield put(fetchCompetitorBrandsSuccess(data.competitors));
      return;
    }
    const response = yield call(
      axios.post,
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-competitors`,
      { category_name, brand_name }
    );
    yield put(fetchCompetitorBrandsSuccess(response.data.competitors));
  } catch (error) {
    yield put(fetchCompetitorBrandsFailure(error.message));
  }
}

// Fetch Competitor Products
function* fetchCompetitorProductsSaga(action) {
  try {
    const { category_name, brand_name, selected_competitor_names } =
      action.payload;
    if (useDummyData) {
      yield delay(2000);
      const data = fetchCompetitorProductsDummy();
      yield put(fetchCompetitorProductsSuccess(data.products));
      return;
    }
    const response = yield call(
      axios.post,
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-products`,
      {
        category_name,
        brand_name,
        selected_competitor_names,
      }
    );
    yield put(fetchCompetitorProductsSuccess(response.data.products));
  } catch (error) {
    yield put(fetchCompetitorProductsFailure(error.message));
  }
}

// Fetch Competitor Products Details
function* fetchCompetitorProductsDetailsSaga(action) {
  try {
    const { selected_product_model_names, category_name } = action.payload;
    if (useDummyData) {
      yield delay(2000);
      const data = fetchSelectedCompetitorProductsDetailsDummy();
      yield put(fetchCompetitorProductsDetailsSuccess(data.details));
      return;
    }
    const response = yield call(
      axios.post,
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-products-details`,
      { selected_product_model_names, category_name }
    );
    yield put(fetchCompetitorProductsDetailsSuccess(response.data.details));
  } catch (error) {
    yield put(fetchCompetitorProductsDetailsFailure(error.message));
  }
}

// Fetch Category List
function* fetchCategoryListSaga() {
  try {
    if (useDummyData) {
      yield delay(2000);
      const data = fetchDummyCategory();
      yield put(fetchCategoryListSuccess(data.categories));
      return;
    }
    const response = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-categories`
    );
    yield put(fetchCategoryListSuccess(response.data.categories));
  } catch (error) {
    yield put(fetchCategoryListFailure(error.message));
  }
}

// Watchers
function* watchFetchCompetitorBrands() {
  yield takeEvery(fetchCompetitorBrandsRequest.type, fetchCompetitorBrandsSaga);
}

function* watchFetchCompetitorProducts() {
  yield takeEvery(
    fetchCompetitorProductsRequest.type,
    fetchCompetitorProductsSaga
  );
}

function* watchFetchCompetitorProductsDetails() {
  yield takeEvery(
    fetchCompetitorProductsDetailsRequest.type,
    fetchCompetitorProductsDetailsSaga
  );
}

function* watchFetchCategoryList() {
  yield takeEvery(fetchCategoryListRequest.type, fetchCategoryListSaga);
}

export default function* productsSaga() {
  yield all([
    watchFetchCompetitorBrands(),
    watchFetchCompetitorProducts(),
    watchFetchCompetitorProductsDetails(),
    watchFetchCategoryList(),
  ]);
}
