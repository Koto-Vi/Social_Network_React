import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://image.flaticon.com/icons/png/512/771/771298.png" alt="Sorry"></img>
            <h1 className={s.title}>Programmers Social Network</h1>
        </header>
    );
}

export default Header;