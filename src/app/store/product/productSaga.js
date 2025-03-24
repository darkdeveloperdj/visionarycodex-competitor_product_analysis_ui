import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  sendSelectedProductsRequest,
  sendSelectedProductsSuccess,
  sendSelectedProductsFailure,
  fetchMyCompanyProductsRequest,
  fetchMyCompanyProductsSuccess,
  fetchMyCompanyProductsFailure,
} from "./productsSlice";

// Saga to fetch products with parameters
function* fetchProductsSaga(action) {
  try {
    const { category, companyNamesInput } = action.payload;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/fetch/?product_name=${category}&company_names_input=${companyNamesInput}`;
    const response = yield call(axios.get, apiUrl);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(
      fetchProductsFailure(
        error.response?.data?.message || "Failed to fetch products"
      )
    );
  }
}

// New saga to send selected products via POST call
function* sendSelectedProductsSaga(action) {
  try {
    const { selectedProducts } = action.payload;

    console.log("selectedProducts 2", selectedProducts);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/update`;
    const response = yield call(axios.post, apiUrl, selectedProducts);
    yield put(sendSelectedProductsSuccess(response.data));
  } catch (error) {
    yield put(
      sendSelectedProductsFailure(
        error.response?.data?.message || "Failed to send selected products"
      )
    );
  }
}

// Saga to fetch products with parameters
function* fetchMyCompanyProductsSaga(action) {
  try {
    const { category, companyNamesInput } = action.payload;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/fetch/?product_name=${category}&company_names_input=${companyNamesInput}`;
    const response = yield call(axios.get, apiUrl);
    yield put(fetchMyCompanyProductsSuccess(response.data));
  } catch (error) {
    yield put(
      fetchMyCompanyProductsFailure(
        error.response?.data?.message || "Failed to fetch products"
      )
    );
  }
}

// Watcher sagas
function* watchFetchProducts() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
}

function* watchSendSelectedProducts() {
  yield takeEvery(sendSelectedProductsRequest.type, sendSelectedProductsSaga);
}

function* watchMyCompanyFetchProducts() {
  yield takeEvery(
    fetchMyCompanyProductsRequest.type,
    fetchMyCompanyProductsSaga
  );
}

// Root saga
export default function* productsSaga() {
  yield all([
    watchFetchProducts(),
    watchSendSelectedProducts(),
    watchMyCompanyFetchProducts(),
  ]);
}
