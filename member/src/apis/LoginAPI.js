import { IS_LOGIN } from "../modules/LoginModule";

export const callLoginAPI = (code) => {
    const requestURL = 'http://localhost:8080/api/v1/login/kakaoCode';

    console.log(code);

    return async (dispatch, getState) => {

        let data = { code: code }

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": '*/*'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.httpStatus === 200) {
            window.localStorage.setItem('jwtToken',
            JSON.stringify(result.results.token));
            dispatch({ type: IS_LOGIN })
        } else if(result.httpStatus === 401) {
            console.log("만료됨...");
        }
        
    };
}
