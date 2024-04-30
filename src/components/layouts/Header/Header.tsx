import React from 'react';
import logo from '../../../assets/imgs/logo.svg';
import classes from "./Header.module.scss";
import HeaderNavigation from "../../ui/HeaderNavigation/HeaderNavigation";

const Header = () => {
    return (
        <header>
            <div className={classes.headerContainer}>
                <div>
                    <img src={logo} className={classes.logoImg} alt="Main logo"/>
                    <span className={classes.logoText}>BALANCE</span>
                </div>
                <HeaderNavigation/>
                <div>
                    <span>+7 (924) 444-77-77</span>
                    <button className="toggle-button">&#9776;</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

