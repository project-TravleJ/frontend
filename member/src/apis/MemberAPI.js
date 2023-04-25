export const getMembers = async () => {

    /* 백엔드로 토큰 보내기 */
    const token = window.localStorage.getItem('jwtToken');

    const requestURL = 'http://localhost:8080/api/v1/members'

    const result  = await fetch(requestURL, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Accept": '*/*',
            "Auth": token
        }
    })
    .then(res => res.json());

    console.log('[MemberAPICalls] getMembers RESULT : ', result);
}