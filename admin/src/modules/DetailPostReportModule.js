import {createActions, handleActions} from "redux-actions";

const initState = [
    {
        reportId: 0,
        reportWriter:"",
        reportToMember:"",
        reportDate: "",
        reportReason: "",
        reportDetails: "",
        reportManagement: "",
        reportPostId: 0
    }
];

export const detailreports = 'report/GET_REPORTS';

const actions = createActions({
    [detailreports]: () => {}
});

const detailReportReducer = handleActions(
    {
        [detailreports]: (state, { payload }) => {
            return payload;
        }
    },
    initState
);

export default detailReportReducer;