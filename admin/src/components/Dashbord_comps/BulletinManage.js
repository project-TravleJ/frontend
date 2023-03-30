import dashStyle3 from './dash.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

function BulletinManage (){

    // const [ members, setMembers ] = useState([]);
    const [ member1, setMember1 ] = useState([]);
    

    // useEffect(
    //     () => {
    //         fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => res.json())
    //         .then(data =>setMembers(data))
    //         //console.log(members[0].name);
    //     },
    //     []
    // );

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(data =>setMember1(data))
            //console.log(members[0].name);
        },
        []
    );

    

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
                    <tr>
                    <td>{ member1.username }</td>
                    <td>{ member1.website }</td>
                    <td>{ member1.email }</td>
                    </tr>
                    <tr>
                    <td>{ member1.username }</td>
                    <td>{ member1.website }</td>
                    <td>{ member1.email }</td>
                    </tr>
                    <tr>
                    <td>{ member1.username }</td>
                    <td>{ member1.website }</td>
                    <td>{ member1.email }</td>
                    </tr>
                    <tr>
                    <td>`{}`</td>
                    <td>`{}`</td>
                    <td>`{}`</td>
                    </tr>
            </tbody>
            </table>
        </div>
    </>
    )
}

export default BulletinManage;