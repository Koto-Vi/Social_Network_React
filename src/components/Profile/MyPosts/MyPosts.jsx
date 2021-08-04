import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCount: 15},
        { id: 2, message: "It's my first post", likeCount: 20}
    ];

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
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
        </div>
    );
}

export default MyPosts;