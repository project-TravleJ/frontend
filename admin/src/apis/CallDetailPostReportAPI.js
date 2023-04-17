

export function callDetailPostReportAPI() {

    const url = "http://localhost:8080/api/v1/reports";

    return async function getDetailPostReport(dispatch, getState) {

        const result = await fetch(
            url+"{reportId}"
        {

                method: "GET",
                headers: {"Accept": "application/json"}
        }
        ).then(data => data.json())
        .then(data => data.result);

        dispatch({type:getDetailPostReport, payload:result});
    }

}