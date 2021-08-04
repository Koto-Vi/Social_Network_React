import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
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
            <Post message="Hi, how are you?" likeCount="15" />
            <Post message="It's my first post" likeCount="20"/>
        </div>
    );
}

export default MyPosts;