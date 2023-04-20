
import { 
 
  GET_REQUESTS
  , PUT_REQUEST
  , DELETE_REQUEST
  , GET_SEARCH
} from '../modules/RequestModule';
import { 
    GET_REQUEST
} from '../modules/RequestDetailModule';

export const callRequestDetailAPI = (requestId) => {
    const requestURL = 'http://localhost:8080/api/v1/requests/' + requestId;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        console.log(result);
        console.log('[RequestAPICalls] callRequestDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[RequestAPICalls] callRequestDetailAPI SUCCESS');

            dispatch({ type: GET_REQUEST,  payload: result });
        }

        
    };
}

export const callRequestUpdateAPI = (requestId, {form}) => {
    console.log('[RequestAPICalls] callRequestUpdateAPI Call');

    const requestURL = 'http://localhost:8080/api/v1/requests/' + requestId;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
            // requestId : form.REQUEST_ID,
            // title: form.TITLE,
            // context: form.CONTEXT,
            // date: form.DATE,
            // writer: form.WRITER,
            requestManagement: form.requestManagement
            }),
        })
        .then(response => response.json())
        .then(response => response.result);

        console.log('[RequestAPICalls] callRequestUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_REQUEST,  payload: result });
        
    };    
}

export const callRequestsAPI = () => { 
    const requestURL = `http://localhost:8080/api/v1/requests/`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json())
        .then(res => res.result);

        console.log('[RequestAPICalls] callRequestAPI RESULT : ', result);
            dispatch({ type: GET_REQUESTS,  payload: result});
        }

        
    };


    export const callRequestDeleteAPI = (request) => { 
        
        for(const requestId in request) {
        const requestURL = `http://localhost:8080/api/v1/requests/${request[requestId]}`;
    
        return async (dispatch, getState) => {    
            const result = await fetch(requestURL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            } 
        ).then(res=>res.json())
    };
    }
    }

    export const callRequestSearchAPI = ({form}) => {
        console.log('[RequestAPICalls] callRequestSearchAPI Call');
    
        const requestURL = `http://localhost:8080/api/v1/requests/search`
    
        return async (dispatch, getState) => {
    
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: JSON.stringify({
                title: form.title,
                writer: form.writer,
                requestManagement: form.requestManagement
                }),
            })
            .then(response => response.json())
            .then(res => res.result);
    
            console.log('[RequestAPICalls] callRequestSearchAPI RESULT : ', result);
    
            dispatch({ type: GET_SEARCH,  payload: result });
            
        };    
    }


    