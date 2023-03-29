import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import modalReducer1 from './features/modal/modalSlice1';
import modalReducer2 from './features/modal/modalSlice2';
import modalReducer3 from './features/modal/modalSlice3';

import postReducer from './modules/PostModule';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        modal1: modalReducer1,
        modal2: modalReducer2,
        modal3: modalReducer3,
        
        post: postReducer
    },
});