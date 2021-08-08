import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} posts={props.posts} />
            
        </div>
    );
}

export default Profile;