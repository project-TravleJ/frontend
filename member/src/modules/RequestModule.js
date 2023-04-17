import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_REQUEST    = 'request/POST_REQUEST';

const actions = createActions({

    [POST_REQUEST]: () => {},
});

/* 리듀서 */
const requestReducer = handleActions(
    {
        [POST_REQUEST]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default requestReducer;