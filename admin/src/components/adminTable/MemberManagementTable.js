import Tstyle from "./table.module.css";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { callGetMemberAPI } from "../../apis/MemberAPI";
import { getMembers } from "../../modules/MemberModule";
import MemberControlModal from "../adminControlModal/MemberControlModal";
import { all_reset, member_close, member_open } from "../../modules/ModalModule";
import { pagingComponent } from "../paging/Pagination";

function MemberManagementTable() {

    /* redux 활용, table 데이터 가져오기 */
    const dispatch = useDispatch();

    const result = useSelector(store => store.member);
    console.log("reducer result ", result);

    const members = result;
    console.log("members : ", members);

    /* modal을 위한 state redux */
    const modalState = useSelector(store => store.modal.member);
    console.log(modalState);
    // restriction : 제재, 제약
    // const [rankUpOpen, setRankUpOpen] = useState(false);
    
    // const dialog = document.getElementById("MemberControlModal");

    const handleOpenRestriction = () => {
        console.log("modal True", modalState);
        dispatch(member_open());
    }

    // MemberControlModal에 선언되어 거기에만 사용됨
    // const handleCloseRestriction = () => {
    //     dispatch(member_close());
    //     console.log("modal false", modalState)
    // }

    useEffect(
        () => {
            // console.log(getMembers(callGetMemberAPI()));
            dispatch(callGetMemberAPI());
            
        },
        []
    );


    return (
        <>
            <dialog id="MemberControlModal" open={modalState} className={Tstyle.modalLocation}>
                <MemberControlModal/>
            </dialog>
            <div className={Tstyle.container}>
                <div className={Tstyle.header}>
                    <p>회원관리</p>
                    <hr/>
                    <p>
                        <button>등급 변경</button>
                        <button onClick={handleOpenRestriction}>회원 제재</button>
                    </p>
                </div>
                <div>
                    <table className={Tstyle.table}>
                        <thead>
                            <tr>
                                <th>선택</th>
                                <th>회원번호</th>
                                <th>닉네임</th>
                                <th>등급</th>
                                <th>계정상태</th>
                                <th>가입일</th>
                                <th>최근 로그인</th>
                            </tr>
                        </thead>
                        {/* <hr className={Tstyle.tableHr}/> */}
                        <tbody>
                            {members.map((member) => {return(
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td> {member.memberCode} </td>
                                    <td> {member.memberNickname} </td>
                                    <td> {member.grade} </td>
                                    <td> {(member.status===0)?"정상":(member.status===1)?"정지":"탈퇴"} </td>
                                    <td> {member.joinDate} </td>
                                    <td> {member.lastAccessDate} </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    {pagingComponent(members)}
                </div>
            </div>
        </>
    );

}

export default MemberManagementTable;