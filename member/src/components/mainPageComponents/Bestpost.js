import { NavLink } from 'react-router-dom';
import bestpost from './usecomponents.module.css';
function Bestpost() {

    return(
        <NavLink to="/postBoard">
        <div className={bestpost.bestpoststyle}>
            게시글
        </div>  
        </NavLink>
    );
}

export default Bestpost;