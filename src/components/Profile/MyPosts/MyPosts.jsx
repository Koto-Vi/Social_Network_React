import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likeCount: 15},
        { id: 2, message: "It's my first post", likeCount: 20}
    ];

    let postsElements = posts.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

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