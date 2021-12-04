import React from 'react';
import style from './header.module.css';
import logo from '../../img/logo_jkl.png'

const Header = () => {
    return (
        <header>
            <div className={style.header__wrapper}>
                <div className={style.logo__wrapper}>
                    <img src={logo} alt="logo"/>
                </div>
                <h1>#jkl social-network</h1>
            </div>
        </header>
    )
}

export default Header;