import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Google from '../mainPageComponents/Modal.module.css';
// import GOOGLE_CLIENT_ID from '../../.env';

function GoogleButton() {

    useEffect(() => {
        async function start() {
            await gapi.client.init({
                clientId: "30823325928-s78h21h30dql6640ufj13jt5lhmov706.apps.googleusercontent.com",
                scope: 'email',
            });

        }

        gapi.load('client:auth2', start);
    }, []);


    const onSuccess = response => {
        const accessToken = gapi.auth.getToken().access_token;
        console.log('SUCCESS', response, accessToken);
        alert('로그인 되었습니다.');
        //로그인 모달창 닫기 기능 추가 예정
    };
    const onFailure = response => {
        console.log('FAILED', response);
    };
    const onLogoutSuccess = () => {
        console.log('SUCCESS LOG OUT');
        alert('로그아웃 되었습니다.')
    };

    return (
        <div>
            <GoogleLogin
                className={Google.button}
                clientId="30823325928-s78h21h30dql6640ufj13jt5lhmov706.apps.googleusercontent.com"
                buttonText="구글아이디로 로그인하기"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
            {/* <GoogleLogout
                clientId="30823325928-s78h21h30dql6640ufj13jt5lhmov706.apps.googleusercontent.com"
                onLogoutSuccess={onLogoutSuccess}
            /> */}
        </div>
    );
}

export default GoogleButton;