import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import headstyle from './usecomponents.module.css';
import { SEARCH_POSTS } from '../../modules/PostModule';
import posts from '../data/post-detail.json';

function Header() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const results = searchPost(searchTerm);
        dispatch({ type: SEARCH_POSTS, payload: results });
    };

    const searchPost = (searchTerm) => {
        return posts.filter(post => post.title.includes(searchTerm));
    };

    return (
        <div className={headstyle.headstyle}>
            {/* {window.location.replace("/")} */}
            <NavLink to="/"><img src="../../image/travelJLogo.png" /></NavLink>
            <div>
                <input type="search" placeholder="Search" name="postName" className={headstyle.searchBox} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className={headstyle.button} onClick={handleSearch}>검색</button>
            </div>
            <div className={headstyle.write}>
                <NavLink to="/post">
                    글쓰기
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
