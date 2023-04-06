import bestpost from './BestPostItem.module.css';

function BestPostItem({ post }) {

    return (
        <div className={ bestpost.item }>
            <img src={ post.postImage } width="200px" height="300px"/>
            <h4 className={ bestpost.name }>{ post.postName }</h4>
        </div>
    );
}

export default BestPostItem;