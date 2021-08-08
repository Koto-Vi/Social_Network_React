import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div className={s.profileinfo}>
            <img src="https://pbs.twimg.com/profile_banners/1350849818957123584/1610910648/1500x500" alt="Ooops"></img>
            <div className={s.profileinfo__description}>Ava + Description</div>
        </div>
    );
}

export default ProfileInfo;