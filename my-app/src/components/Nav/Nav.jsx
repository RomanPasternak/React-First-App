import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';


const Nav = () =>{
    return(
        <nav className={s.nav}>
            <ul>
                <li ><NavLink exact to='/profile' activeClassName = {s.activeLink}>Profile</NavLink></li>
                <li ><NavLink exact to='/dialog' activeClassName = {s.activeLink}>Messages</NavLink></li>
                <li ><NavLink exact to='/news' activeClassName = {s.activeLink}>News</NavLink></li>
                <li ><NavLink exact to='/music' activeClassName = {s.activeLink}>Music</NavLink></li>
                <li ><NavLink exact to='/group' activeClassName = {s.activeLink}>Group</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;