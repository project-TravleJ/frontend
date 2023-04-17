// import report from "../data/post-report-data.json"
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