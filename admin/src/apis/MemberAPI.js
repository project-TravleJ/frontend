import { GET_MEMBERS } from '../modules/MemberModule';
import member from '../data/member-data.json';


// export function callGetMemberAPI() {

//     return member;
    // return async function getMembers(dispatch, getState) {
        
    //     const result = member;
    //     console.log("result: ", result);

    //         return result;
    // }


export const callGetMemberAPI = () => {
    const requestURL = 'http://localhost:8080/api/v1/members';

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json())
        .then(res => res.result);

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: GET_MEMBERS,  payload: result });
        
    };
}
    
