import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import postReducer from './modules/PostModule';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        post: postReducer
    },
});