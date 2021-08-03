import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item + ' ' + s.active}>
                    Artem
                </div>
                <div className={s.item}>
                    Butuz
                </div>
                <div className={s.item}>
                    Sanchez
                </div>
                <div className={s.item}>
                    Seriy
                </div>
                <div className={s.item}>
                    Egor
                </div>
                <div className={s.item}>
                    Andrey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra&</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    
    );
}

export default Dialogs;