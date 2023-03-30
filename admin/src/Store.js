import {configureStore} from '@reduxjs/toolkit';
import member from './modules/MemberModule';
import modal from './modules/ModalModule';
import post from './modules/PostModule';
import report from './modules/PostReportModule';


const store = configureStore({
    reducer: {
        member: member,
        modal: modal,
        post: post,
        report: report,
    },
    
    
});

export default store;
