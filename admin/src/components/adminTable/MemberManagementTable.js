import Tstyle from "./table.module.css";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { callMemberList } from "../../modules/MemberModule";



function MemberManagementTable() {

    const dispatch = useDispatch();

    const {members} = useSelector(state => state.memberReducer);

    const setMembers = () => {
        dispatch(callMemberList());
    };

    useEffect(
        () => {
            setMembers();
            console.log("이펙트")
        },
        [members]
    );

    return (
        <div className={Tstyle.container}>
            <div className={Tstyle.header}>
                <p>회원관리</p>
                <hr/>
                <p>
                    <button>등급 변경</button>
                    <button>회원 제재</button>
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
                                <td> {member.memberId} </td>
                                <td> {member.name} </td>
                                <td> {member.rank} </td>
                                <td> {(member.state===0)?"정상":(member.state===1)?"정지":"탈퇴"} </td>
                                <td> {member.invDate} </td>
                                <td> {member.recentLogin} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default MemberManagementTable;