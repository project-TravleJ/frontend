import { combineReducers } from 'redux';
import postReducer from './PostModule';
// import limitReducer from './LimitModule';
import memberReducer from './MemberModule';
import reportReducer from './PostReport';
import requestReducer from './RequestModule';
import loginReducer from './LoginModule';

const rootReducer = combineReducers({
    /* 해당 폴더에 새로 생성한 하위 리덕스를 여기에 추가 */
    postReducer,
    // limitReducer,
    memberReducer,
    reportReducer,
    requestReducer,
    loginReducer
});

export default rootReducer;