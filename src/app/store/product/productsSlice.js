import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedProducts: [],
    allProducts: [],
    productName: "", // new: stores product_name (category)
    companyNamesInput: "", // new: stores company_names_input
    loading: false,
    error: null,
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
} = productsSlice.actions;

export default productsSlice.reducer;
