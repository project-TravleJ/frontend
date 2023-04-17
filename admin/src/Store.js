import {configureStore} from '@reduxjs/toolkit';
import modal from './modules/ModalModule';
import post from './modules/PostModule';
import report from './modules/PostReportModule';
import locaRepo from './modules/LocationReportModule';
import markers from './modules/MarkersModule';
import dsPostRepo from './modules/detailSearch/PostRepoDSModule';
import selectAttraction from './modules/MapsSelectedMarker';
import memberReducer from './modules/MemberModule';
import bulIssue from './modules/BulletinIssueModule';
import requestReducer from './modules/RequestModule';
import requestItems from './modules/ItemsMoudule';

const store = configureStore({
    reducer: {
        member: memberReducer,
        modal: modal,
        post: post,
        report: report,
        markers: markers,
        locaRepo: locaRepo,
        dsPostRepo: dsPostRepo,
        selectAttraction: selectAttraction,
        bulIssue: bulIssue,
        request: requestReducer,
        items: requestItems
    },

    
});

export default store;
