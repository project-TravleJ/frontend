import { createActions, handleActions } from "redux-actions";

const initialState = true;

export const IS_LOGIN = 'login/IS_LOGIN';

const actions = createActions({
    [IS_LOGIN]: () => {}
});

const loginReducer = handleActions({
        [IS_LOGIN]: () => {
            return !initialState;
        }},
        initialState
);

export default loginReducer;