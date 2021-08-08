import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Friends.module.scss';

const Friends = () => {
    
    let imgData = [
        {adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Artem"},
        {adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Butuz"},
        {adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Sanchez"}
];

    let images = imgData.map( img => <Friend adress={img.adress} name={img.name} />);

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