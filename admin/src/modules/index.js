import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import modalReducer from './ModalModule';
import postReportReducer from './PostReportModule';
import postReducer from './PostModule';
import locaRepoReducer from './LocationReportModule';
import markersReducer from './MarkersModule';
import dsPostRepoReducer from './detailSearch/PostRepoDSModule';
import selectAttraction from './MapsSelectedMarker';
import memberDetailReducer from './detailSearch/MemberDetailModule';

const rootReducer = combineReducers({
    /* 해당 폴더에 새로 생성한 하위 리덕스를 여기에 추가 */
    memberReducer, modalReducer, markersReducer,
    postReducer, postReportReducer, locaRepoReducer,
    dsPostRepoReducer, selectAttraction,
    memberDetailReducer
});

export default rootReducer;