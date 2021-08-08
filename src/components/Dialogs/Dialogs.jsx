import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.data.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.data.messages.map(message => <Message item={message.item} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.messages__column}>
                    {messagesElements}
                </div>
                <div className={s.messages__area}>
                    <textarea ref={newMessage} className={s.messages__text}></textarea>
                    <button onClick={addMessage} className={s.messages__btn}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;