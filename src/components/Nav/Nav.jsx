import React from 'react';
import s from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a className={s.item} href="/profile">Profile</a>
            <a className={s.item} href="/dialogs">Messages</a>
            <a className={s.item}>News</a>
            <a className={s.item}>Music</a>
            <a className={s.item}>Settings</a>
        </nav>
    );
}

export default Nav;