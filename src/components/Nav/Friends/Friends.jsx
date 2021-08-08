import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.scss';

const Friends = () => {
    return (
        <div className={s.friends}>
            <div className={s.friends__title}>
            Friends
            </div>
            <div className={s.friends__row}>
            <img className={s.friends__img} src="https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png" alt="" />
            <img className={s.friends__img} src="https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png" alt="" />
            <img className={s.friends__img} src="https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png" alt="" />
            </div>
        </div>
    );
}

export default Friends;