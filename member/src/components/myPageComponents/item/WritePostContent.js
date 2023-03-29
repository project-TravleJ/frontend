import { NavLink } from 'react-router-dom';
import Item from './PostItem.module.css';

function WritePostContent({ post }) {
    
    return(
        <>
            <NavLink to="/postBoard">
                <div className={ Item.item }>
                    <h3 className={ Item.text }>{ post.date }</h3>
                    <h3 className={ Item.postname }>{ post.name }</h3>
                    <h3 className={ Item.postgoodcount }>{ post.likeCount }</h3>
                </div>
            </NavLink>
        </>
    );
}

export default WritePostContent;