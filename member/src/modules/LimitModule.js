import { createActions, handleActions } from "redux-actions";

const initialState = 0;

export const PUT_LIMIT = 'limit/PUT_LIMIT';

export const limitActions = createActions({
    [PUT_LIMIT]: (amount = 7) => ({ putLimit: amount})
});

const limitReducer = handleActions(
    {
        [PUT_LIMIT]: (state, {payload: {putLimit}}) => (state)
    },
    initialState
);

export default limitReducer;