import style from '../components/mainPageComponents/usecomponents.module.css';
import Footer from '../components/mainPageComponents/Footer';
import MyPageContents from '../components/myPageComponents/MyPageContents';
import WritingList from '../components/myPageComponents/list/WritingList';
import GoodPostList from '../components/myPageComponents/list/GoodPostList';


function MyPage() {

    return(
        <div className={ style.container}>
            <MyPageContents/>
            <WritingList/>
            <GoodPostList/>
            <Footer/>
        </div>
    )
}

export default MyPage;