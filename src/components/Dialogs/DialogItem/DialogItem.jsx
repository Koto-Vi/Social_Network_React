import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.scss';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={s.item} >
            <img src="https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png" alt="No Image" />
            <NavLink className={s.link} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;