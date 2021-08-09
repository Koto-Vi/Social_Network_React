import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);

    return (
        <div className={s.postsBlock}>
            My Posts
            <div className={s.postsBlock__row}>
                <div className={s.postsBlock__text}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className={s.postsBlock__btn}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;