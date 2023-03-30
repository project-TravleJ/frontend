import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import modalReducer from './ModalModule';

const rootReducer = combineReducers({
    /* 해당 폴더에 새로 생성한 하위 리덕스를 여기에 추가 */
    memberReducer, modalReducer
});

export default rootReducer;