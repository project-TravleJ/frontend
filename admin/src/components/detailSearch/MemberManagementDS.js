import { useState } from 'react';
import DSstyle from './detailSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { callGetMemberByMultipleAPI } from '../../apis/MemberAPI';

function MemberManagementDS() {

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        memberNickname: '',
        status: '',
        grade: '',
        joinDate: '',
        lastAccessDate: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    const onClickDetailSearchHandler = () => {
        dispatch(callGetMemberByMultipleAPI({form: form}));
    }

    const resetHandler = () => {
        window.location.reload();
    }

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox}>
                <div className={DSstyle.box}>
                    <p>
                        <label>닉네임 : </label>
                        <input
                            type="text"
                            name="memberNickname"
                            onChange={onChangeHandler}
                        />
                    </p>
                    <p>
                        <label>가입일 : </label>
                        <input
                            type="date"
                            name="joinDate"
                            onChange={onChangeHandler}
                        />
                    </p>
                    <p>
                        <label>최종 접속일 : </label>
                        <input
                            type="date"
                            name="lastAccessDate"
                            onChange={onChangeHandler}
                        />
                    </p>
                </div>
                <div className={DSstyle.box}>
                    <p className={DSstyle.rank}>
                        <label>등급 : </label>
                        <div>
                            <input type="checkbox"
                            name="grade"
                            value="뉴비"
                            onClick={onChangeHandler}
                            />
                            <label> 뉴비</label>
                        </div>
                        <div>
                            <input type="checkbox"
                            name="grade"
                            value="마스터"
                            onClick={onChangeHandler}
                            />
                            <label> 마스터</label>
                        </div>
                    </p>
                    <p className={DSstyle.user}>
                        <label>회원 상태 : </label>
                        <div>
                            <input type="checkbox"
                            name="status"
                            value="정상"
                            onClick={onChangeHandler}
                            />
                            <label> 정상</label>
                        </div>
                        <div>
                            <input type="checkbox"
                            name="status"
                            value="정지"
                            onClick={onChangeHandler}
                            />
                            <label> 정지</label>
                        </div>
                        <div>
                            <input type="checkbox"
                            name="status"
                            value="영구 정지"
                            onClick={onChangeHandler}
                            />
                            <label> 영구 정지</label>
                        </div>
                    </p>
                </div>
            </div>
            <div className={DSstyle.btnBox}>
                <button onClick={resetHandler}>초기화</button>
                <button onClick={onClickDetailSearchHandler}>검색</button>
            </div>
        </div>
    );
}

export default MemberManagementDS;