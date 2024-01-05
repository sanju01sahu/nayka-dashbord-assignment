import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./actions/authAction"
import productReducer from './actions/productAction';


const store = configureStore({
    reducer: {
      auth: authReducer,
      product: productReducer,
    },
  });

export default store;