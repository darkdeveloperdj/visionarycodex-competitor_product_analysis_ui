import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import ContactSlice from "../store/contact/contactSlice";
import contactSaga from "../store/contact/contactSaga";

const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    contact: ContactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk, add saga middleware
});

// Run the Saga middleware
sagaMiddleware.run(contactSaga);

export default store;
