import { createSlice } from "@reduxjs/toolkit";

/* 상태
* 0 : 미처리
* 1 : 처리완료
* 2 : 반려
*/
const initState = {
    reporter : "",
    reportee : "",
    reportDate : "",
    reportStatus: [false, false, false]
};

const dsPostRepo = createSlice({
    name : "dsPostRepo",
    initialState: initState,
    reducers : {
        dsPostRepo_reset: (state) => {
            state = initState;
        },
        dsPostRepo_setReporter: (state, action) => {
            state.reporter = action.payload;
        },
        dsPostRepo_setReportee: (state, action) => {
            state.reportee = action.payload;
        },
        dsPostRepo_setReportDate: (state, action) => {
            state.reportDate = action.payload;
        },
        dsPostRepo_Status_0 : (state, action) => {
            state.reportStatus[0] = action.payload;
        },
        dsPostRepo_Status_1 : (state, action) => {
            state.reportStatus[1] = action.payload;
        },
        dsPostRepo_Status_2 : (state, action) => {
            state.reportStatus[2] = action.payload;
        },
        dsPostRepo_all : (state, action) => {
            state = action.payload;
        }
    },
});

export const {
        dsPostRepo_reset, dsPostRepo_setReporter, dsPostRepo_setReportee, dsPostRepo_setReportDate,
        dsPostRepo_Status_0, dsPostRepo_Status_1, dsPostRepo_Status_2, dsPostRepo_all
    } = dsPostRepo.actions;

export default dsPostRepo.reducer;