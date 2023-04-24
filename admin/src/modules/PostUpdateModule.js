import { createActions, handleActions} from 'redux-actions';

const initialState =[{
    reportId: "",
    reportWriter: "",
    reportToMember: "",
    reportDate: "",
    reportReason: "",
    reportDetails: "",
    reportManagement: "",
    reportPostId: ""
},
];

export const PUT_REPORT = 'report/PUT_REPORT';

const actions = createActions({
    [PUT_REPORT]: () => {}
});

const updateReportReducer = handleActions(
    {
        [PUT_REPORT]: (state, { payload}) => {

            return payload;
        }
    },
    initialState
);

export default updateReportReducer;