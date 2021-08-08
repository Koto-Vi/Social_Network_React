import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    

    let postsElements = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div className={s.postsBlock__btn}>
                <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;