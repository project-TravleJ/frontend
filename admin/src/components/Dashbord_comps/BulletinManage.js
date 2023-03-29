import dashStyle3 from './dash.module.css';

function BulletinManage (){

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
                    <tr>
                    <td>닉네임1</td>
                    <td>가입일1</td>
                    <td>작성일</td>
                    </tr>
                    <tr>
                    <td>닉네임2</td>
                    <td>가입일2</td>
                    <td>작성일</td>
                    </tr>
                    <tr>
                    <td>닉네임3</td>
                    <td>가입일3</td>
                    <td>작성일</td>
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