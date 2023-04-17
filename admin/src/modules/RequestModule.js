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
export const GET_REQUEST     = 'request/GET_REQUEST';
export const GET_REQUESTS    = 'request/GET_REQUESTS';
export const PUT_REQUEST     = 'request/PUT_REQUEST';

const actions = createActions({
    [GET_REQUEST]: () => {},
    [GET_REQUESTS]: () => {},
    [PUT_REQUEST]: () => {}
});

/* 리듀서 */
const requestReducer = handleActions(
    {
        [GET_REQUEST]: (state, { payload }) => {
            
            return payload;
        },
        [GET_REQUESTS]: (state, { payload }) => {
            
            return payload;
        },
        [PUT_REQUEST]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);



export default requestReducer;