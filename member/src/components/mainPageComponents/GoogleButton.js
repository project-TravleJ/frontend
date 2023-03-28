// import { useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// function GoogleButton(props) {

//     const clientId =
//         "30823325928-s78h21h30dql6640ufj13jt5lhmov706.apps.googleusercontent.com";

//     async function onSuccess(res) {
//         const profile = res.getBasicProfile();
//         const userdata = {
//             email: profile.getEmail(),
//             image: profile.getImageUrl(),
//             name: profile.getName(),
//         };
//         // 로그인 성공 후 실행하기 원하는 코드 작성.

//     }

//     const onFailure = (res) => {
//         alert("구글 로그인에 실패하였습니다");
//         console.log("err", res);
//     };

//     return (
//         <GoogleLogin
//             className="google-button"
//             clientId={clientId}
//             buttonText="Login with Google" // 버튼에 뜨는 텍스트
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//             cookiePolicy={"single_host_origin"}
//         />
//     );
// }

// export default GoogleButton;