import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi, how are you?" likeCount="15" />
            <Post message="It's my first post" likeCount="20"/>
        </div>
    );
}

export default MyPosts;