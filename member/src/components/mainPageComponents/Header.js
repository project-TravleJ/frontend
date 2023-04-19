import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import headstyle from './usecomponents.module.css';
import { SEARCH_POSTS } from '../../modules/PostModule';
// import posts from '../data/post-detail.json';


function Header() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const posts = useSelector(store => store.post);


    const handleSearch = async () => {
        await navigate("/postBoard");
        const results = searchPost(searchTerm);
        const action = { type: SEARCH_POSTS, payload: { results } };
        await dispatch(action);
    };

    const searchPost = (searchTerm) => {
        return posts.filter(post => post.postTitle && post.postTitle.match(searchTerm));
    };

    return (
        <div className={headstyle.headstyle}>
            <a href='/'><img src="../../image/travelJLogo.png" /></a>
            <div>
                <input type="search" placeholder="Search" name="postName" className={headstyle.searchBox} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className={headstyle.button} onClick={handleSearch}>검색</button>
            </div>
            <div className={headstyle.write}>
                <a href="/post" className={headstyle.linktext}>
                    글쓰기
                </a>
            </div>
        </div>
    );
}

export default Header;