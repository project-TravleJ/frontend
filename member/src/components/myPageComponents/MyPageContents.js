import MyPageImage from "./MyPageImage";
import MyPageInfo from "./MyPageInfo";
import Contents from "./MyPageContents.module.css";

function MyPageContents() {

    return(
        <>
            <div className={ Contents.contents }>
                <MyPageImage/>
                <MyPageInfo/>
            </div>
        </>
    );

}

export default MyPageContents;