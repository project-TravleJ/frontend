
import member from '../data/member-data.json';


export function getMemberList() {
    // const url = "";
    
    // return async function getMembers(dispatch, getState){
    //     const result = member;
    //     console.log('member : ', member);
    //     console.log('result : ', result);
    
    //     // dispatch({type: GET_MEMBERS, payload: result});
    // };
    return member;
}
    
// export function SetMembers() {
//     const dispatch = useDispatch();
        
//     const result = () => {
//         dispatch({
//             type : GET_MEMBERS,
//             payload: { memberList: member }
//         })
//     }

//     returnresult();
// }