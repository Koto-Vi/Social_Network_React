import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts 
                    newPostText={props.posts.newPostText} 
                    addPost={props.addPost} 
                    posts={props.posts.posts}
                    updateNewPostText={props.updateNewPostText}
                    />
            
        </div>
    );
}

export default Profile;