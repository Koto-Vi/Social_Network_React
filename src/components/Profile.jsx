import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" alt="Ooops"></img>
            <div>Ava + Description</div>
            <div>My Posts</div>
            <div>New Posts</div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    );
}

export default Profile;