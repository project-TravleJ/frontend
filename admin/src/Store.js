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
import SelectMember from './modules/detailSearch/SelectMemberModule';
import memberDetailReducer from './modules/detailSearch/MemberDetailModule';
import detailReportReducer from './modules/DetailPostReportModule';
import reportReducer from './modules';
import requestReducer from './modules/RequestModule';
import itemsReducer from './modules/requestItems';
import requestDetailReducer from './modules/RequestDetailModule';
import attraction from "./modules/LocationModule";
import updateReportReducer from './modules/PostUpdateModule';
import locationReducer from './modules/LocationDeleteModule';
import updateLocationReducer from './modules/LocationUpdateModule';


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
        selectMember: SelectMember,
        memberDetail: memberDetailReducer,
        detailReportReducer,
        reportReducer,
        request: requestReducer,
        items: itemsReducer,
        requestDetail: requestDetailReducer,
        attraction: attraction,
        updateReportReducer,
        locationReducer,
        updateLocationReducer

    },
    
});

export default store;
