import {configureStore} from '@reduxjs/toolkit';
import member from './modules/MemberModule';
import modal from './modules/ModalModule';
import post from './modules/PostModule';
import report from './modules/PostReportModule';
import locaRepo from './modules/LocationReportModule';

import markers from './modules/MarkersModule';
import dsPostRepo from './modules/detailSearch/PostRepoDSModule';

const store = configureStore({
    reducer: {
        member: member,
        modal: modal,
        post: post,
        report: report,
        markers: markers,
        locaRepo: locaRepo,
        dsPostRepo: dsPostRepo
    },
    
    
});

export default store;
