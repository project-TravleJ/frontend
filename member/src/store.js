import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import modalReducer1 from './features/modal/modalSlice1';
import modalReducer2 from './features/modal/modalSlice2';
import modalReducer3 from './features/modal/modalSlice3';
import modalReducer4 from './features/modal/modalSlice4';
import modalReducer5 from './features/modal/modalSlice5';
import modalReducer6 from './features/modal/modalSlice6';
import modalReducer7 from './features/modal/modalSlice7';
import modalReducer8 from './features/modal/modalSlice8';
import modalReducer9 from './features/modal/modalSlice9';
import modalReducer10 from './features/modal/modalSlice10';
import modalReducer11 from './features/modal/modalSlice11';
import modalReducer12 from './features/modal/modalSlice12';
import modalReducer13 from './features/modal/modalSlice13';
import modalReducer14 from './features/modal/modalSlice14';
import imageReducer from './features/modal/imageSlice';

import postReducer from './modules/PostModule';
import limitReducer from './modules/LimitModule';
import markers from './modules/MarkersModule';
import selectAttraction from './modules/MapsSelectedMarker';
import createPost from './modules/CreatePostModule';
import creaetCourseModule from "./modules/CreaetCourseModule";
import rootReducer from './modules';
import selectedPost from './modules/SelectedPostModule'
import reportReducer from './modules/PostReport';
import requestReducer from "./modules/RequestModule";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        modal1: modalReducer1,
        modal2: modalReducer2,
        modal3: modalReducer3,
        modal4: modalReducer4,
        modal5: modalReducer5,
        modal6: modalReducer6,
        modal7: modalReducer7,
        modal8: modalReducer8,
        modal9: modalReducer9,
        modal10: modalReducer10,
        modal11: modalReducer11,
        modal12: modalReducer12,
        modal13: modalReducer13,
        modal14: modalReducer14,
        image: imageReducer,

        post: postReducer,
        limit: limitReducer,
        markers: markers,
        selectAttraction: selectAttraction,
        createPost:createPost,
        createCourse: creaetCourseModule,
        // rootReducer,
        reportReducer: reportReducer,
        requestReducer: requestReducer,

        selectedPost: selectedPost,
    },
});

export default store;