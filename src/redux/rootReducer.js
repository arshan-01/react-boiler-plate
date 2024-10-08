// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './feature/auth/auth.slice';
import loaderSlice from './feature/loader/loader.slice';
import modalSlice from './feature/modal/modal.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  loading : loaderSlice,
  modal: modalSlice,
})

export default rootReducer;
