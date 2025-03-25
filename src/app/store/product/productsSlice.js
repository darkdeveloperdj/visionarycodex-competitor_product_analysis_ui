import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    categoryName: "",
    brandName: "",
    competitorBrands: [],
    competitorProducts: [],
    competitorProductsDetails: [],
    selectedProducts: [],
    categoryList: [],
  },
  reducers: {
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
    setBrandName: (state, action) => {
      state.brandName = action.payload;
    },

    // Competitor Brands
    fetchCompetitorBrandsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCompetitorBrandsSuccess: (state, action) => {
      state.loading = false;
      state.competitorBrands = action.payload;
    },
    fetchCompetitorBrandsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Competitor Products (Basic List)
    fetchCompetitorProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCompetitorProductsSuccess: (state, action) => {
      state.loading = false;
      state.competitorProducts = action.payload;
    },
    fetchCompetitorProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Competitor Products Details
    fetchCompetitorProductsDetailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCompetitorProductsDetailsSuccess: (state, action) => {
      state.loading = false;
      state.competitorProductsDetails = action.payload;
    },
    fetchCompetitorProductsDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Selected Products Submission
    sendSelectedProductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendSelectedProductsSuccess: (state, action) => {
      state.loading = false;
      state.selectedProducts = action.payload;
    },
    sendSelectedProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Category List fetch
    fetchCategoryListRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoryListSuccess: (state, action) => {
      state.loading = false;
      state.categoryList = action.payload;
    },
    fetchCategoryListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCategoryName,
  setBrandName,
  fetchCompetitorBrandsRequest,
  fetchCompetitorBrandsSuccess,
  fetchCompetitorBrandsFailure,
  fetchCompetitorProductsRequest,
  fetchCompetitorProductsSuccess,
  fetchCompetitorProductsFailure,
  fetchCompetitorProductsDetailsRequest,
  fetchCompetitorProductsDetailsSuccess,
  fetchCompetitorProductsDetailsFailure,
  sendSelectedProductsRequest,
  sendSelectedProductsSuccess,
  sendSelectedProductsFailure,
  fetchCategoryListRequest,
  fetchCategoryListSuccess,
  fetchCategoryListFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
