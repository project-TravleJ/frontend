import Content from './PostItem.module.css';

function PostContent() {
    
    return(
        <>
            <div className={ Content.post }>
            <h3 className={ Content.text }></h3>
            <h3 className={ Content.text }></h3>
            <h3 className={ Content.text }></h3>
            </div>
        </>
    );
}

export default PostContent;