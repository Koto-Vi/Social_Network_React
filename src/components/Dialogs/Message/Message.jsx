import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={s.messages__item}>
            {props.item}
        </div>
    );
}

export default Message;