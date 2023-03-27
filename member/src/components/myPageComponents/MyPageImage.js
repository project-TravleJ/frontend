import MyPage from './MyPageImage.module.css';

function MyPageImage() {

    return(
        <>
            <div className={ MyPage.imageContent }>
                <h3 className={ MyPage.text }># 마이페이지</h3>
                <img  className={ MyPage.image }
                    src="../../images/profileImage.png"
                    width="250px" height="250px"
                />
            </div>
        </>
    );

}

export default MyPageImage;