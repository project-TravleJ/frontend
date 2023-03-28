import { NavLink } from 'react-router-dom';
import Item from './PostItem.module.css';

function PostItem({ post }) {

    return(
        <NavLink to="/post">
        <div className={ Item.item }>
            <img className={ Item.image } src="../../images/profileImage.png"/>
            <div className={ Item.postcontent }>
                <div className={ Item.postname }>
                    {/* <h3>{ post.name }</h3> */}
                    {/* <h4>{ post.date }</h4> */}
                </div>
                {/* <h4 className={ Item.course }>{ post.course }</h4> */}
                {/* <h4>{ post.writer }</h4> */}
            </div>
        </div>
        </NavLink>
    );
}

export default PostItem;