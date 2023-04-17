// import report from "../data/post-report-data.json"
import { getReports } from "../modules/PostReportModule";


export async function CallPostReportAPI() {

    const url = "http://localhost:8080/api/v1/reports";

    return async function getPostReport(dispatch, getState) {
      
        const result = await fetch
    (url, 
        {method: "GET",
        headers: {
            "Accept": "application/json"}}).then(data => data.json()
            ).then(data => {console.log(data); return data.result;});

            dispatch({type:getReports, payload:result});
        }
}