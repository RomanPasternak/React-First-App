import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <div className = {s.logo}>
                <img alt='' src='https://bookinstein.com.ua/image/cache/catalog/publishers/english%20student-200x300.png'></img>
            </div>
        </header>
    );
}

export default Header;