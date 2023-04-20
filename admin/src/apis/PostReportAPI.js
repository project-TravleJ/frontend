// import report from "../data/post-report-data.json"
import { detailreports } from '../modules/DetailPostReportModule';
import { updateReports } from "../modules/PostUpdateModule";
import { getReports } from "../modules/PostReportModule";



export function callPostReportAPI() {

    const url = "http://localhost:8080/api/v1/reports";

    return async function getPostReport(dispatch, getState) {


        const result = await fetch(
            url+"/list",
        {
                method: "GET",
                headers: {"Accept": "application/json"}
            }
            ).then(data => data.json())
            .then(data => data.result);

            dispatch({type:getReports, payload:result});
        }
}


// export function callDetailPostReportAPI(form) {

//     const url = "http://localhost:8080/api/v1/reports";

//     return async function getDetailreport(dispatch, getState) {

//         const result = await fetch(
//             url+"{reportWriter}",
//         {
//                 method: "GET",
//                 headers: {"Accept": "application/json"},
//                 body: JSON.stringify({
//                     reportWriter: form.reportWriter
//                 })
//         }
//         ).then(data => data.json())
//         .then(data => data.result);

//         dispatch({type:getdetailreport, payload:result});
//     }

// }


export const deleteReportAPI = (report) => {

    console.log(report);
    
    for(const reportId in report) {
        
        const reportURL = `http://localhost:8080/api/v1/reports/${report}`;
    
    return async (dispatch, getState) => {
        const result = await fetch(reportURL,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            }
        ).then(res => res.json())
    };
}
}

export const callUpdatePostReportAPI = ({form}) =>{

    const url = "http://localhost:8080/api/v1/reports";

    return async (dispatch, getState) => {

        const result = await fetch(
            url+"{reportId}",
            {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "*/*",
                    // "Authorization" : "Bearer "+ window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                reportManagement: form.reportManagement
            })
            }
        ).then(response => response.json())
        .then(res => res.result);
        console.log(result);

        dispatch({type:updateReports, payload:result});
    };
}

export const callDetailPostReportAPI = ({form}) => {

    const url = "http://localhost:8080/api/v1/reports/searchReport";

    return async function getDetailreport(dispatch, getState) {

        const result = await fetch(
            url,
        {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
        },
                body: JSON.stringify({
                    reportWriter: form.reportWriter,
                    reportToMember: form.reportToMember,
                    reportDate: form.reportDate
                })
        }
        ).then(data => data.json())
        .then(data => data.result);

        dispatch({type:getReports, payload:result});
    }

}

