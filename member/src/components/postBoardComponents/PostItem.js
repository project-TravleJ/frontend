import Item from './PostItem.module.css';
import { useDispatch } from 'react-redux';
import { openModal3 } from '../../features/modal/modalSlice3';
import {getSelectPost} from "../../apis/PostAPI";

function PostItem({ post }) {
    const dispatch = useDispatch();
    const showDate = new Date(post.postDate);
    const date = ( showDate.getFullYear() + '-' 
    + ((showDate.getMonth() + 1)<10? "0"+(showDate.getMonth() + 1):(showDate.getMonth() + 1)) + '-' 
    + (showDate.getDate()<10? "0"+showDate.getDate():showDate.getDate()));
    return(
    <div onClick={() => {
    dispatch(openModal3());
        }}>
        <div className={ Item.item } onClick={() => {dispatch(getSelectPost(post.postId))}}>
            <img className={ Item.image } src="../../images/profileImage.png"/>
            <div className={ Item.postcontent }>
                <div className={ Item.postname }>
                    <h3 className={ Item.name }>{ post.postTitle }</h3>
                    <h4>{ date }</h4>
                </div>
                <h4 className={ Item.course }>{ post.course }</h4>
                <h4>{ post.writer }</h4>
            </div>
        </div>
    </div>
    );
}

export default PostItem;