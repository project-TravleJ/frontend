import {
    GET_REPORT,
    POST_REPORT
} from '../modules/PostReport';

export const callPostReportAPI = ({form}) => {
    const requestURL = `http://localhost:8080/api/v1/reports/reportPost`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
                
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                reportId: form.reportId,
                reportWriter: form.reportWriter,
                reportToMember: form.reportToMember,
                reportDate: form.reportDate,
                reportReason: form.reportReason,
                reportDetails: form.reportDetails,
                reportManagement: form.reportManagement,
                reportPostId: form.reportPostId
            })
        })
        .then(response => response.json());

        dispatch({ type: POST_REPORT, payload: result});

    };
}