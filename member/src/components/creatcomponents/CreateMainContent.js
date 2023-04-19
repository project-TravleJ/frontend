import style from './createcomponents.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import Map from '../googlemap/Map';
import { POST_POST_START } from '../../modules/PostModule';
import {getPostStart} from "../../modules/CreatePostModule";

function CreateMainContent() {

    const dispatch = useDispatch();
    const newPost = useSelector(store => store.createPost);

    // const datehandler = (postDate) => {
    //     dispatch({ type: POST_POST_START, paylode: postDate })
    // };
    
    return(
        <div className={style.postmainContent}>
            <div className={style.postmainContent1}>
                <div className={style.postcalender}>
                <input
                    type="date"
                    className={style.datestyle}
                    onChange={(e) => {dispatch(getPostStart(e.target.value))} }
                    value = {newPost.postStart}
                />
                </div>
                <div className={style.postmap}>
                    <Map/>
                </div>
            </div>
            <div className={style.postmainContent4}>
                <div className={style.postmainContent2}>
                #코스 리스트   
                <button onClick={() => 
                    dispatch(openModal())}>
                        추가</button>
                </div>
                <div className={style.postmainContent3}>
                    <input type="text" className={style.comentBox} value={newPost.courseList} readOnly={true}/>
                </div>
            </div>
        </div>
    );
}
export default CreateMainContent;