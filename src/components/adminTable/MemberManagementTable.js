import Tstyle from "./table.module.css"

function MemberManagementTable() {

    const data = [
            {
                memberId: "m0001",
                name : "user01",
                rank : "뉴비",
                state : 0,
                invDate : "20220303",
                recentLogin : "20230310"
            }, 
            {
                memberId: "m0002",
                name : "user02",
                rank : "프로",
                state : 0,
                invDate : "20220404",
                recentLogin : "20230312"
            },
            {
                memberId: "m0003",
                name : "user03",
                rank : "해커",
                state : 0,
                invDate : "20220202",
                recentLogin : "20230120"
            }
        ];

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
                    <hr className={Tstyle.tableHr}/>
                    <tbody>
                        {data.map(member => {return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
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