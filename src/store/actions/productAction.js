import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    error: null,
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.error = null;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, setError, setLoading, clearProducts } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export const selectError = (state) => state.product.error;
export const selectLoading = (state) => state.product.loading;

export default productSlice.reducer;
