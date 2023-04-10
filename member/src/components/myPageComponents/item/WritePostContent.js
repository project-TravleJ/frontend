import { NavLink } from 'react-router-dom';
import Item from './PostItem.module.css';
import LinkText from '../../mainPageComponents/usecomponents.module.css';

function WritePostContent({ post }) {
    
    return(
        <>
            <NavLink to="/postBoard" className={LinkText.linktext}>
                <div className={ Item.item }>
                    <h3 className={ Item.text }>{ post.postDate }</h3>
                    <h3 className={ Item.postname }>{ post.postName }</h3>
                    <h3 className={ Item.postgoodcount }>{ post.likeCount }</h3>
                </div>
            </NavLink>
        </>
    );
}

export default WritePostContent;