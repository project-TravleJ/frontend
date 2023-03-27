import { NavLink } from 'react-router-dom';
import Content from './PostItem.module.css';

function PostContent() {
    
    return(
        <>
            <NavLink to="/postBoard">
                <div className={ Content.post }>
                <h3 className={ Content.text }></h3>
                <h3 className={ Content.text }></h3>
                <h3 className={ Content.text }></h3>
                </div>
            </NavLink>
        </>
    );
}

export default PostContent;