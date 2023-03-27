import PostDetatilSearch from "./PostDetailSearch";
import PostItem from "./PostItem";
import PostSortbar from "./PostSortbar";
import Post from "./PostContents.module.css";

function PostContents() {

    return(
        <div className={ Post.contents }>
            <PostDetatilSearch/>
            <div className={ Post.posts }>
                <PostSortbar/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>
        </div>

    );
}

export default PostContents;