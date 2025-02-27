import { createSlice } from "@reduxjs/toolkit";

import {
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_SUCCEEDED,
  STATUS_FAILED,
  ERROR_MESSAGE_DEFAULT,
} from "../../admin/constants/status";

// Initial state
const initialState = {
  status: STATUS_IDLE,
  message: null,
  error: null,
  data: [], // To store the list of messages
  currentPage: 1, // Start at page 1 (instead of 0)
  lastPage: 1, // Set lastPage to 1 initially
  totalCount: 0, // Initialize totalCount as 0
  perPage: 10, // Set default perPage
  next_page_url: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetState: () => initialState,
    resetState2: (state) => {
      state.status = STATUS_IDLE;
      state.error = null;
      state.message = null;
    },
    sendMessageRequest: (state) => {
      state.status = STATUS_PENDING;
      state.message = null;
      state.error = null;
    },
    sendMessageSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
      state.error = null;
    },
    sendMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.message = null;
      state.error = action.payload.error || ERROR_MESSAGE_DEFAULT;
    },

    fetchMessagesRequest: (state) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.data = action.payload.data.messages.data;
      state.totalCount = action.payload.data.messages.total;
      state.currentPage = action.payload.data.messages.current_page;
      state.lastPage = action.payload.data.messages.last_page;
      state.perPage = action.payload.data.messages.per_page;
      state.next_page_url = action.payload.data.messages.next_page_url;
    },
    fetchMessagesFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },

    deleteMessageRequest: (state, action) => {
      console.log("deleteMessageRequest action:", action);
      state.status = STATUS_PENDING;
      state.error = null;
    },
    deleteMessageSuccess: (state, action) => {
      console.log("deleteMessageSuccess payload:", action.payload);
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
      // Remove the deleted message from the state
      const index = state.data.findIndex((msg) => msg.id === action.payload.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },

    deleteMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },

    updateMessageRequest: (state) => {
      state.status = STATUS_PENDING;
      state.error = null;
    },

    updateMessageSuccess: (state, action) => {
      state.status = STATUS_SUCCEEDED;
      state.message = action.payload.message;
      // Find the message in the data array and update it
      const { id, name, email, message } = action.payload.FormData;
      state.data = state.data.map((msg) =>
        msg.id === id ? { ...msg, name, email, message } : msg
      );
    },

    updateMessageFailure: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload || ERROR_MESSAGE_DEFAULT;
    },
  },
});

export const {
  resetState,
  resetState2,
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
} = contactSlice.actions;

export default contactSlice.reducer;
