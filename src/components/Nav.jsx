import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a className={s.item}>Profile</a>
            <a className={s.item}>Messages</a>
            <a className={s.item}>News</a>
            <a className={s.item}>Music</a>
            <a className={s.item}>Settings</a>
        </nav>
    );
}

export default Nav;