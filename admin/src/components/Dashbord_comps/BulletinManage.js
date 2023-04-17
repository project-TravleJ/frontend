import dashStyle3 from './dash.module.css';
// import { useState } from 'react';
import { useEffect } from 'react';
// import bulIssue from '../../data/bulletin-info.json';
import { useDispatch, useSelector } from 'react-redux';
import { CallBulIssueAPI } from '../../apis/BulletinIssueAPI';
import { getBulIssues } from '../../modules/BulletinIssueModule';

function BulletinManage () {
    
    const dispatch = useDispatch();

    const bulIssues = useSelector(store => store.bulIssue);

    useEffect(
        () => {
            dispatch(getBulIssues(CallBulIssueAPI()));
        }
    );

    return (
    <>
        <h3>회원관리</h3>
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
                {bulIssues.map(Issue => {return(
                <tr>
                    <td>{ Issue.nick }</td>
                    <td>{ Issue.case }</td>
                    <td>{ Issue.date }</td>
                </tr>
                )})}               
            </tbody>
            </table>
        </div>
    </>
    )
}

export default BulletinManage;