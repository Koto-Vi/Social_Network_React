import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Friends.module.scss';

const Friends = (props) => {

    let images = props.friends.map( img => <Friend adress={img.adress} name={img.name} />);

    return (
        <div className={s.friends}>
            <div className={s.friends__title}>
            Friends
            </div>
            <div className={s.friends__row}>
                {images}
            </div>
        </div>
    );
}

export default Friends;