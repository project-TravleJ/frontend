import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import modalReducer1 from './features/modal/modalSlice1';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        modal1: modalReducer1,
    },
});