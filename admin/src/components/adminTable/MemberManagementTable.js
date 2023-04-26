import Tstyle from "./table.module.css";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callGetMemberAPI, callGetMemberByMemberCodeAPI } from "../../apis/MemberAPI";
import { getMembers } from "../../modules/MemberModule";
import MemberControlModal from "../adminControlModal/MemberControlModal";
import { all_reset, member_close, member_open } from "../../modules/ModalModule";


function MemberManagementTable() {

    /* redux 활용, table 데이터 가져오기 */
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [modifyMode, setModifyMode] = useState(false);

    const members = useSelector(store => store.member);
    console.log("reducer result ", members);


    /* modal을 위한 state redux */
    const modalState = useSelector(store => store.modal.member);
    console.log(modalState);
    // restriction : 제재, 제약
    // const [rankUpOpen, setRankUpOpen] = useState(false);

    // const dialog = document.getElementById("MemberControlModal");

    // const handleOpenRestriction = () => {
    //     console.log("modal True", modalState);
    //     dispatch(member_open());
    // }

    // MemberControlModal에 선언되어 거기에만 사용됨
    // const handleCloseRestriction = () => {
    //     dispatch(member_close());
    //     console.log("modal false", modalState)
    // }

    // const memberhandler = () => {

    // }


    useEffect(
        () => {
            // console.log("dispatch : " + callGetMemberAPI())
            dispatch(callGetMemberAPI());
        },
        []
    );


    const onClickModifyModeHandler = () => {    // 수정모드
        setModifyMode(true);
        dispatch(member_open());
        // setForm({
        //     memberCode: members.memberCode,
        //     memberNickname: members.memberNickname,
        //     grade: members.grade,
        //     status: members.status,
        //     joinDate: members.joinDate,
        //     lastAccessDate: members.lastAccessDate
        // });
    }


        return (
            <>
                <dialog id="MemberControlModal" open={modalState} className={Tstyle.modalLocation}>
                    <MemberControlModal/>
                </dialog>
                <div className={Tstyle.container}>
                    <div className={Tstyle.header}>
                        <p>회원관리</p>
                        <hr />
                        <p>
                            <button onClick={onClickModifyModeHandler}>등급/상태 관리</button>
                        </p>
                    </div>
                    <div>
                        <table className={Tstyle.table}>
                            <thead>
                                <tr>
                                    <th>선택</th>
                                    <th>회원번호</th>
                                    <th>이메일</th>
                                    <th>닉네임</th>
                                    <th>등급</th>
                                    <th>계정상태</th>
                                    <th>가입일</th>
                                    <th>최근 로그인</th>
                                </tr>
                            </thead>
                            {/* <hr className={Tstyle.tableHr}/> */}
                            <tbody>
                                {members.map((member) => {
                                    return (
                                        <tr>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    value={member.memberCode}
                                                    onClick={() => dispatch(callGetMemberByMemberCodeAPI(member.memberCode))}
                                                />
                                            </td>
                                            <td> {member.memberCode} </td>
                                            <td> {member.email} </td>
                                            <td> {member.memberNickname} </td>
                                            <td> {member.grade} </td>
                                            <td> {member.status} </td>
                                            <td> {member.joinDate} </td>
                                            <td> {member.lastAccessDate} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );

    }

export default MemberManagementTable;