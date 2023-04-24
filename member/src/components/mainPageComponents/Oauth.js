import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callLoginAPI } from "../../apis/LoginAPI";

function Oauth() {

    const code = new URL(window.location.href).searchParams.get('code');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state.memberReducer)            

    useEffect(
        () => {
            console.log('로그인 시작')
            dispatch(callLoginAPI(code));
            console.log(loginStatus);
            console.log('로그인 끝')
            if(loginStatus) {
                console.log("로그인 성공!")
            } else {
                alert("로그인에 실패하였습니다.")
            }
            navigate("/", {replace: true});
        }
    )

return (
    <></>
)
}

export default Oauth;