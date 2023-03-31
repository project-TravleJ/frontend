import {configureStore} from '@reduxjs/toolkit';
import member from './modules/MemberModule';
import modal from './modules/ModalModule';
import post from './modules/PostModule';
import report from './modules/PostReportModule';
import locaRepo from './modules/LocationReportModule';
import markers from './modules/MarkersModule';

const store = configureStore({
    reducer: {
        member: member,
        modal: modal,
        post: post,
        report: report,
        locaRepo: locaRepo,
        markers: markers
    },
    
    
});

export default store;
