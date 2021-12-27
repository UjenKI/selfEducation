import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <h2>Navigation</h2>
            <ul className={style.menu}>
                <li className={style.menu__item}>
                    <NavLink to="/homePage">Profile</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to="/chatPage">Messages</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li className={style.menu__item}>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;