import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Google from '../mainPageComponents/Modal.module.css';

function GoogleButton() {

    useEffect(() => {
        async function start() {
            await gapi.client.init({
                clientId: "30823325928-s78h21h30dql6640ufj13jt5lhmov706.apps.googleusercontent.com",
                scope: 'email',
                access_type: 'offline',
                approval_prompt: 'force',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = response => {
        const authInstance = gapi.auth2.getAuthInstance();
        const currentUser = authInstance.currentUser.get();
        const accessToken = currentUser.getAuthResponse().access_token;
        let refreshToken = currentUser.getAuthResponse(true).refresh_token;
        if (!refreshToken) {
            // 리프레시 토큰이 없을 경우 새로운 액세스 토큰 가져오기 위해 리프레시 토큰 요청
            currentUser.reloadAuthResponse().then(res => {
                refreshToken = res.refresh_token;
                console.log('SUCCESS', response, accessToken, refreshToken);
                alert('로그인 되었습니다.');
            });
        } else {
            console.log('SUCCESS', response, accessToken, refreshToken);
            alert('로그인 되었습니다.');
        }
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
