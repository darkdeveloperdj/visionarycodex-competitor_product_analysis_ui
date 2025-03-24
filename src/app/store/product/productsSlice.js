import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedProducts: [],
    allProducts: [],
    productName: "", // stores product_name (category)
    companyNamesInput: "", // stores company_names_input
    loading: false,
    error: null,
    matrixData: [],
    myCompanyAllProducts: [],
  },
  reducers: {
    setSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setCompanyNamesInput: (state, action) => {
      state.companyNamesInput = action.payload;
    },
    fetchProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // New reducers for sending selected products
    sendSelectedProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendSelectedProductsSuccess: (state, action) => {
      state.loading = false;
      state.matrixData = action.payload;
    },
    sendSelectedProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchMyCompanyProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMyCompanyProductsSuccess: (state, action) => {
      state.loading = false;
      state.myCompanyAllProducts = action.payload;
    },
    fetchMyCompanyProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setSelectedProducts,
  setAllProducts,
  setProductName,
  setCompanyNamesInput,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  sendSelectedProductsRequest,
  sendSelectedProductsSuccess,
  sendSelectedProductsFailure,

  fetchMyCompanyProductsRequest,
  fetchMyCompanyProductsSuccess,
  fetchMyCompanyProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
