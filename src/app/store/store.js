import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import ContactSlice from "../store/contact/contactSlice";
import contactSaga from "../store/contact/contactSaga";

import productsSlice from "../store/product/productsSlice";
import productsSaga from "../store/product/productSaga";

const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    contact: ContactSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk, add saga middleware
});

// Run the Saga middleware
sagaMiddleware.run(contactSaga);
sagaMiddleware.run(productsSaga); // Add this line to run the product saga

export default store;
