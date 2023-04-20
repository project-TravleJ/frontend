import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_SEARCH      = 'request/GET_SEARCH';

const actions = createActions({
    [GET_SEARCH]: () => {}
});

/* 리듀서 */
const RequestSearchReducer = handleActions(
    {
        [GET_SEARCH]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);



export default RequestSearchReducer;