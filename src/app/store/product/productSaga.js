import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
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

// Watcher saga
function* watchFetchProducts() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
}

// Root saga
export default function* productsSaga() {
  yield all([watchFetchProducts()]);
}
