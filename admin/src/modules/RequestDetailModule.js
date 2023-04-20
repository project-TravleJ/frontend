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


const actions = createActions({
    [GET_REQUEST]: () => {},

});

/* 리듀서 */
const requestDetailReducer = handleActions(
    {
        [GET_REQUEST]: (state, { payload }) => {
            
            return payload;
        }

    },
    initialState
);



export default requestDetailReducer;