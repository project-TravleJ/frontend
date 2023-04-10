import Detail from './PostDetailSearch.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_POSTS } from '../../modules/PostModule';
import posts from '../data/post-detail.json';

function PostDetatilSearch() {
    const dispatch = useDispatch();
    const [searchTravel, setSearchTravel] = useState('');
    const [searchCourse, setSearchCourse] = useState('');
    const [searchSeason, setSearchSeason] = useState('');
    const [searchGrade, setSearchGrade] = useState('');

    const handleSearch = () => {
        const results = searchPost(searchTravel, searchCourse, searchSeason, searchGrade);
        const action = { type: SEARCH_POSTS, payload: { results } };
        dispatch(action);


    };

    const searchPost = (searchTravel, searchCourse, searchSeason, searchGrade) => {
        return posts.filter(post => post.period == (searchTravel) &&
                                    post.course.match(searchCourse) &&
                                    post.season.match(searchSeason) &&
                                    post.grade.match(searchGrade));

    };

    return(
        <div className={ Detail.bar }>
            <h3>게시글 상세 조회</h3>
            <hr/>
            <div className={ Detail.content1 }>
                <label>· 여행기간</label>
                &nbsp;&nbsp;&nbsp;
                <input className={ Detail.input1 } type="text" name="number" value={searchTravel} onChange={(e) => setSearchTravel(e.target.value)}></input>
                <label>일</label>
                <br/>
                <label>· 계절</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select onChange={(e) => setSearchSeason(e.target.value)}>
                    <option key="all" value="" >전체</option>
                    <option key="spring" value="spring" >봄</option>
                    <option key="summer" value="summer" >여름</option>
                    <option key="autumn" value="autumn" >가을</option>
                    <option key="winter" value="winter">겨울</option>
                </select>
                </div>
                <br/>
                <div className={ Detail.content2 }>
                    {/* <label>· 예상 지출 금액</label><br/>
                    <input className={ Detail.input2 } type="text" name="cost"></input>
                    <label>원</label> */}
                    
                    <label>· 작성자 등급</label><br/>
                    <select className={ Detail.selectbox } onChange={(e) => setSearchGrade(e.target.value)}>
                        <option key="all" value="">전체</option>
                        <option key="normal" value="normal">일반</option>
                        <option key="high" value="high">더높음</option>
                        <option key="higher" value="higher">더더높음</option>
                    </select>
                    <br/><br/>
                    <label>· 필수 여행지</label><br/>
                    <input className={ Detail.input3 } type="text" name="travel" value={searchCourse} onChange={(e) => setSearchCourse(e.target.value)}></input>
                    <br/><br/><br/>
                    <button className={ Detail.button } onClick={handleSearch}>검색</button>
                </div>
        </div>
    );
}

export default PostDetatilSearch;