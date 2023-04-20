import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [{
    requestId: "",
    title:"",
    date: "",
    writer: "",
    context:"",
    requestManagement:""
    },
];

/* 액션 */
export const GET_REQUESTS    = 'request/GET_REQUESTS';
export const PUT_REQUEST     = 'request/PUT_REQUEST';
export const DELETE_REQUEST  = 'request/DELETE_REQUEST';
export const GET_SEARCH      = 'request/GET_SEARCH';

const actions = createActions({
    [GET_REQUESTS]: () => {},
    [PUT_REQUEST]: () => {},
    [DELETE_REQUEST]: () => {},
    [GET_SEARCH]: () => {}
});

/* 리듀서 */
const requestReducer = handleActions(
    {

        [GET_REQUESTS]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_REQUEST]: (state, { payload }) => {
            
            return payload;
        },

        [DELETE_REQUEST]: (state, { payload }) => {
            
            return payload;
        },
        [GET_SEARCH]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);



export default requestReducer;