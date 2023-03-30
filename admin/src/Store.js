import {configureStore} from '@reduxjs/toolkit';
import member from './modules/MemberModule';
import modal from './modules/ModalModule';


const store = configureStore({
    reducer: {
        member: member,
        modal: modal,
    },
    
    
});

export default store;
