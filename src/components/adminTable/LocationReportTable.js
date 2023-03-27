import Tstyle from "./table.module.css"

function LocationReportTable() {

    const data = [
            {
                reportId: "pl0002",
                reporter:"geotachu923",
                location: {
                    id:"kyoto0022",
                    name:"금각사",
                    loc:{
                        위도:0,
                        경도:0
                    }
                },
                reason: 0,
                description:"은각사와 위치가 바뀜",
                state: 0
            }, 
            {
                reportId: "pl0003",
                reporter:"geotachu923",
                location: {
                    id:"kyoto0023",
                    name:"은각사",
                    loc:{
                        위도:0,
                        경도:0
                    }
                },
                reason: 0,
                description:"금각사와 위치 바뀜",
                state: 0
            }, 
            {
                reportId: "pl0004",
                reporter:"geotachu923",
                location: {
                    id:"kyoto0022",
                    name:"기요미즈데라",
                    loc:{
                        위도:0,
                        경도:0
                    }
                },
                reason: 1,
                description:"XX에 대한 내용이 잘못되어있음",
                state: 1
            }, 
        ];

    return (
        <div className={Tstyle.container}>
            <div className={Tstyle.header}>
                <p>게시글관리</p>
                <hr/>
                <p>
                    <button>메인 등록</button>
                    <button>게시글 삭제</button>
                </p>
            </div>
            <div>
                <table className={Tstyle.table}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>신고ID</th>
                            <th>처리상태</th>
                            <th>신고자</th>
                            <th>정정요청장소</th>
                            <th>신고사유</th>
                            <th>상세이유</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(locaReport => {return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
                                <td> {locaReport.reportId} </td>
                                <td> {(locaReport.state===0)?"미처리":(locaReport.state===1)?"처리완료":"반려"} </td>
                                <td> {locaReport.reporter} </td>
                                <td> {locaReport.location.name} </td>
                                <td> {(locaReport.reason===0)?"위치오류":(locaReport.reason===1)?"정보오류/삭제요청":(locaReport.reason===2)?"추가요청":"기타"} </td>
                                <td> {locaReport.description} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default LocationReportTable;