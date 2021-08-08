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
        <div className={s.message}>{props.item}</div>
    );
}

const Dialogs = (props) => {
    
    let dialogElements = props.data.dialogsData.map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } /> );
    let messagesElements = props.data.messages.map( message => <Message item={message.item} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;