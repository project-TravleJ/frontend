import Item from './PostItem.module.css';
import { useDispatch } from 'react-redux';
import { openModal3 } from '../../features/modal/modalSlice3';

function PostItem({ post }) {
    const dispatch = useDispatch();

    return(
    <div onClick={() => {
    dispatch(openModal3());
        }}>
        <div className={ Item.item }>
            <img className={ Item.image } src="../../images/profileImage.png"/>
            <div className={ Item.postcontent }>
                <div className={ Item.postname }>
                    <h3 className={ Item.name }>{ post.postName }</h3>
                    <h4>{ post.postDate }</h4>
                </div>
                <h4 className={ Item.course }>{ post.course }</h4>
                <h4>{ post.writer }</h4>
            </div>
        </div>
    </div>
    );
}

export default PostItem;