import PostDetatilSearch from "./PostDetailSearch";
import PostSortbar from "./PostSortbar";
import Post from "./PostContents.module.css";
// import PostList from "./PostList";
import PostPagingList from "./PostPagingList";

function PostContents() {

    return(
        <div className={ Post.contents }>
            <PostDetatilSearch/>
            <div className={ Post.posts }>
                <PostSortbar/>
                <PostPagingList/>
            </div>
        </div>

    );
}

export default PostContents;