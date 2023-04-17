import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_REPORT     = 'report/GET_REPORT';
export const POST_REPORT    = 'report/POST_REPORT';

const actions = createActions({
    [GET_REPORT]: () => {},
    [POST_REPORT]: () => {}
});

const reportReducer = handleActions(
    {
        [GET_REPORT]: (state, {payload}) => {

            return payload;
        }
    },
    {
        [POST_REPORT]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default reportReducer;