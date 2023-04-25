import {createActions, handleActions} from "redux-actions";

const initState = [
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

export const getdetailreport = 'report/GET_REPORTS';

const actions = createActions({
    [getdetailreport]: () => {},
});

const detailReportReducer = handleActions(
    {
        [getdetailreport]: (state, { payload }) => {
            return payload;
        }
    },
    initState
);

export default detailReportReducer;