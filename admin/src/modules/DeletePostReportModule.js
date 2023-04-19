import {createActions, handleActions } from 'redux-actions';

const initialState = [
    {
        reportId: "",
        reportWriter:"",
        reportToMember:"",
        reportDate: "",
        reportReason: "",
        reportDetails: "",
        reportManagement: "",
        reportPostId: ""
    },
];

export const DELETE_REPORT = 'report/DELETE_REPORT';

const actions = createActions({
    [DELETE_REPORT]: () => {}
});

const reportReducer = handleActions(
    {
        [DELETE_REPORT]:(state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default reportReducer;