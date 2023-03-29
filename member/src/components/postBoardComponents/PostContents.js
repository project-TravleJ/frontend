import PostDetatilSearch from "./PostDetailSearch";
import PostSortbar from "./PostSortbar";
import Post from "./PostContents.module.css";
import PostList from "./PostList";

function PostContents() {

    return(
        <div className={ Post.contents }>
            <PostDetatilSearch/>
            <div className={ Post.posts }>
                <PostSortbar/>
                <PostList/>
            </div>
        </div>

    );
}

export default PostContents;