import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Artem' id='1' />
                <DialogItem name='Butuz' id='2' />
                <DialogItem name='Sanchez' id='3' />
                <DialogItem name='Seriy' id='4' />
                <DialogItem name='Egor' id='5' />
                <DialogItem name='Andrey' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your it-kamasutra?' />
                <Message message='Yo' />
            </div>
        </div>

    );
}

export default Dialogs;