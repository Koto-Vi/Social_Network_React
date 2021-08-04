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

    let dialogsData = [
        { id: 1, name: "Artem" },
        { id: 2, name: "Butuz" },
        { id: 3, name: "Sanchez" },
        { id: 4, name: "Seriy" },
        { id: 5, name: "Egor" },
        { id: 6, name: "Andrey" }
    ];

    let messages = [
        { id: 1, item: 'Hi' },
        { id: 2, item: 'How is your it-kamasutra?' },
        { id: 3, item: 'Yo' },
    ];

    let dialogElements = dialogsData.map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } /> );
    let messagesElements = messages.map( message => <Message item={message.item} /> );

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