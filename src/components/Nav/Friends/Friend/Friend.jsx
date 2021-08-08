import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Friends.module.scss';

const Friend = (props) => {


    return (
        <div>
            <img className={s.friends__img} src={props.adress} alt="No img" />
            <div className={s.friends__name}>{props.name}</div>
        </div>
    );
}

export default Friend;