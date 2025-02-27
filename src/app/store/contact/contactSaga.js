import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  deleteMessageFailure,
  updateMessageRequest,
  updateMessageSuccess,
  updateMessageFailure,
} from "./contactSlice";

function* sendMessageSaga(action) {
  console.log("data dj", action.payload);

  try {
    const response = yield call(
      axios.post,
      "http://127.0.0.1:8000/api/create/contact",
      action.payload
    );
    yield put(sendMessageSuccess(response.data));
  } catch (error) {
    yield put(
      sendMessageFailure(
        error.response?.data?.message || "Failed to send message"
      )
    );
  }
}

// Saga to handle fetching all messages
function* fetchMessagesSaga(action) {
  try {
    const response = yield call(
      axios.post,
      "http://127.0.0.1:8000/api/list/contact",
      action.payload
    );
    yield put(fetchMessagesSuccess(response.data));
  } catch (error) {
    yield put(
      fetchMessagesFailure(
        error.response?.data?.message || "Failed to fetch messages"
      )
    );
  }
}

function* deleteMessagesSaga(action) {
  console.log("action.payload ", action.payload);
  try {
    const response = yield call(
      axios.post,
      `http://127.0.0.1:8000/api/delete/contact/${action.payload}`
    );
    yield put(deleteMessageSuccess({ id: action.payload, ...response.data }));
  } catch (error) {
    yield put(
      deleteMessageFailure(
        error.response?.data?.message || "Failed to delete message"
      )
    );
  }
}

// update
function* updateMessagesSaga(action) {
  try {
    const response = yield call(
      axios.post,
      `http://127.0.0.1:8000/api/update/contact`,
      action.payload
    );
    yield put(
      updateMessageSuccess({ FormData: action.payload, ...response.data })
    );
  } catch (error) {
    yield put(
      updateMessageFailure(
        error.response?.data?.message || "Failed to update message"
      )
    );
  }
}
// Watcher Saga for the send message request
function* watchSendMessage() {
  yield takeEvery(sendMessageRequest.type, sendMessageSaga);
}

// Watcher Saga for the fetch message request
function* watchFetchMessage() {
  yield takeEvery(fetchMessagesRequest.type, fetchMessagesSaga);
}
function* watchDeleteMessages() {
  yield takeEvery(deleteMessageRequest.type, deleteMessagesSaga);
}

function* watchUpdateMessages() {
  yield takeEvery(updateMessageRequest.type, updateMessagesSaga);
}
export default function* contactSaga() {
  yield all([
    watchSendMessage(),
    watchFetchMessage(),
    watchDeleteMessages(),
    watchUpdateMessages(),
  ]);
}
