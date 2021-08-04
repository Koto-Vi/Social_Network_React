import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" alt="Ooops"></img>
            <div className={s.description}>Ava + Description</div>
        </div>
    );
}

export default ProfileInfo;