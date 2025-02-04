// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from './feature/auth/auth.slice';
import loaderSlice from './features/loading/loading.slice';
import modalSlice from './features/modal/modal.slice';

const rootReducer = combineReducers({
  // auth: authReducer,
  loading : loaderSlice,
  modal: modalSlice,
})

export default rootReducer;
