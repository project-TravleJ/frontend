import {
    POST_REQUEST
} from '../modules/RequestModule';

export const callRequestWriteAPI = ({ form }) => {
    console.log('[RequestAPICalls] callRequestWriteAPI Call');

    const requestURL = `http://localhost:8080/api/v1/requests/request`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                requestId : form.REQUEST_ID,
                title: form.TITLE,
                context: form.CONTEXT,
                date: form.DATE,
                writer: form.WRITER,
                requestManagement: form.REQEUST_MANAGEMENT,
            }),
        }).then((response) => response.json());

        console.log('[RequestAPICalls] callRequestWriteAPI RESULT : ', result);

        dispatch({ type: POST_REQUEST, payload: result });
    };
};