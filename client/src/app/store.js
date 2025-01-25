import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../components/storeSlice.js'

export const store = configureStore({
   reducer: {
      store: storeReducer
   },
});