import { call, put, all, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCompetitorBrandsRequest,
  fetchCompetitorBrandsSuccess,
  fetchCompetitorBrandsFailure,
  fetchCompetitorProductsRequest,
  fetchCompetitorProductsSuccess,
  fetchCompetitorProductsFailure,
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
    const {
      category_name: product_name,
      brand_name,
      selected_competitor_names: company_names_input,
    } = action.payload;
    if (useDummyData) {
      yield delay(2000);
      const data = fetchCompetitorProductsDummy();

      const filteredProducts = data.products.filter((product) => {
        // Assume all dummy products belong to "electronics"
        if (product_name.toLowerCase() !== "electronics") return false;
        // Include all my products without filtering by brand_name
        if (product.isMyCompanyProduct) {
          return true;
        }
        // For competitor products, check if competitorName is in the provided list
        return company_names_input.some(
          (name) => name.toLowerCase() === product.competitorName.toLowerCase()
        );
      });

      // For my products, force competitorName to "TechNova"
      const updatedProducts = filteredProducts.map((product) => {
        if (product.isMyCompanyProduct) {
          return { ...product, competitorName: "TechNova" };
        }
        return product;
      });

      yield put(fetchCompetitorProductsSuccess(updatedProducts));
      return;
    }
    const response = yield call(
      axios.post,
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-products`,
      {
        product_name,
        brand_name,
        company_names_input,
      }
    );
    yield put(fetchCompetitorProductsSuccess(response.data.products));
  } catch (error) {
    yield put(fetchCompetitorProductsFailure(error.message));
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

function* watchFetchCategoryList() {
  yield takeEvery(fetchCategoryListRequest.type, fetchCategoryListSaga);
}

export default function* productsSaga() {
  yield all([
    watchFetchCompetitorBrands(),
    watchFetchCompetitorProducts(),
    watchFetchCategoryList(),
  ]);
}
