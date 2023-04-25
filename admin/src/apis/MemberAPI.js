import { GET_MEMBERS} from '../modules/MemberModule';
import member from '../data/member-data.json';
import { getMember } from '../modules/detailSearch/SelectMemberModule';
import { GET_MEMBER, PUT_MEMBER  } from '../modules/detailSearch/MemberDetailModule';


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
    
export const selectMemberAPI = (member) => {

    return async (dispatch, getState) => {

        const result = member;

        // console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        // if(result.status === 200){
        //     window.localStorage.setItem('accessToken', result.data.accessToken);            
        // }
        dispatch({ type: getMember,  payload: result });
    }
} 

export const callPutMemberAPI = (memberCode, {form}) => {
    console.log('[ProduceAPICalls] callProductUpdateAPI Call');

    const requestURL = 'http://localhost:8080/api/v1/members/';

    return async (dispatch, getState) => {

        const result = await fetch((requestURL + memberCode), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                grade: form.grade,
                status: form.status
            })
        })
        .then(response => response.json())
        .then(res => res.result);

        console.log('[ProduceAPICalls] callProductUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_MEMBER,  payload: result });
        
    };    
}

export const callGetMemberByMemberCodeAPI = (memberCode) => {
    const requestURL = 'http://localhost:8080/api/v1/members/';

    return async (dispatch, getState) => {


        const result = await fetch((requestURL + memberCode), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json())
        .then(res => {console.log(res.result); return res.result});

        // console.log('[ProduceAPICalls] callProductDetailAPI RESULT : ', result);
        // if(result.status === 200){
        //     console.log('[ProduceAPICalls] callProductDetailAPI SUCCESS');
            dispatch({ type: GET_MEMBER,  payload: result });
        }
        
        
    };

    export const callGetMemberByMultipleAPI = ({form}) => {
        const requestURL = 'http://localhost:8080/api/v1/members/searchMulti';
        console.log(form);
        return async (dispatch, getState) => {
    
    
            const result = await fetch((requestURL), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: JSON.stringify({
                    memberNickname: form.memberNickname,
                    status: form.status,
                    grade: form.grade,
                    joinDate: form.joinDate,
                    lastAccessDate: form.lastAccessDate
                })
            })
            .then(response => response.json())
            .then(res =>  res.result);
    
            // console.log('[ProduceAPICalls] callProductDetailAPI RESULT : ', result);
            // if(result.status === 200){
            //     console.log('[ProduceAPICalls] callProductDetailAPI SUCCESS');
                dispatch({ type: GET_MEMBERS,  payload: result });
            }
            
            
        };