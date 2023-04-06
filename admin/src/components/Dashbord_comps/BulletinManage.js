import dashStyle3 from './dash.module.css';
// import { useDispatch, useSelector } from "react-redux";
//  import { useState } from 'react';
// import { useEffect } from 'react';
import bulletininfo from '../../data/bulletin-info.json';
// import { callReportAPI } from '../../apis/BulletinInfoAPI';
// import { getReports } from '../../modules/PostReportModule';

function BulletinManage () {

    // const dispatch = useDispatch();
    // const result = useSelector(store => store.report);
    // const reports = result;

    // useEffect(
    //     () => {
    //         dispatch(getReports(callReportAPI()));
    //     }
    // );

     return (
    <>
        <h3>회원관리></h3>
        <div className={ dashStyle3.bullet1 }>
            <h3>게시글 관리</h3>
            <table className={ dashStyle3.table1 }>
                <thead>
                    <tr> 
                    <th>닉네임</th>
                    <th>제목</th>
                    <th>작성일</th>
                    </tr>
                </thead>
            <tbody>
                {bulletininfo.bulletin.map((report) => {return(
                <tr>
                    <td>{ report.nick }</td>
                    <td>{ report.issue }</td>
                    <td>{ report.date }</td>
                </tr>
                )})};

                {/* <tr>
                    <td>{ bulletininfo.bulletin[1].nick }</td>
                    <td>{ bulletininfo.bulletin[1].issue }</td>
                    <td>{ bulletininfo.bulletin[1].date }</td>
                </tr>
                <tr>
                    <td>{ bulletininfo.bulletin[2].nick }</td>
                    <td>{ bulletininfo.bulletin[2].issue }</td>
                    <td>{ bulletininfo.bulletin[2].date }</td>
                </tr>
                <tr>
                    <td>{ bulletininfo.bulletin[3].nick }</td>
                    <td>{ bulletininfo.bulletin[3].issue }</td>
                    <td>{ bulletininfo.bulletin[3].date }</td>
                </tr> */}

            </tbody>
            </table>
        </div>
    </>
    )

}

export default BulletinManage;