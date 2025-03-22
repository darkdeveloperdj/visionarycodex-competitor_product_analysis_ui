import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

// Conditionally require storage only on the client-side
let storage;
if (typeof window !== "undefined") {
  storage = require("redux-persist/lib/storage").default;
} else {
  // Create a noop storage for server-side rendering
  storage = {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
  };
}

import ContactSlice from "../store/contact/contactSlice";
import contactSaga from "../store/contact/contactSaga";

import productsSlice from "../store/product/productsSlice";
import productsSaga from "../store/product/productSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Define your persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contact", "products"], // Only these slices will be persisted
};

// Combine your reducers
const rootReducer = combineReducers({
  contact: ContactSlice,
  products: productsSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer and saga middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      // Disable serializable check for redux-persist actions
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Run the Saga middleware
sagaMiddleware.run(contactSaga);
sagaMiddleware.run(productsSaga);

// Create the persistor for the store
export const persistor = persistStore(store);

export default store;
