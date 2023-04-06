import React from 'react';
import { useSelector } from 'react-redux';
import MyPage from './MyPageImage.module.css';

function MyPageImage() {
    const { imageUrl } = useSelector((state) => state.image);

    return (
        <div className={MyPage.imageContent}>
            <h3 className={MyPage.text}># 마이페이지</h3>
            <img
                className={MyPage.image}
                src={imageUrl ? imageUrl : '../../images/profileImage.png'}
                width="250px"
                height="250px"
                key={imageUrl} // 이미지가 변경될 때마다 컴포넌트를 다시 렌더링하도록 key 속성 추가
            />
        </div>
    );
}

export default MyPageImage;