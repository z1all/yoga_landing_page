import React, {useState} from 'react';
import classes from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

import logo from '../../../assets/imgs/logo.svg';
import call from '../../../assets/imgs/call.svg';
import menu from '../../../assets/imgs/menu.svg';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <header>
            <div className={classes.headerContainer}>
                <div>
                    <img src={logo} className={classes.logoImg} alt="logo"/>
                    <span className={classes.logoText}>BALANCE</span>
                </div>
                <HeaderNavigation isActive={isActive} setIsActive={setIsActive}/>
                <div>
                    <img src={call} className={classes.callImg} alt="phone"/>
                    <span className={classes.callText}>+7 (924) 444-77-77</span>
                    <img src={menu} className={classes.btnCollapse} onClick={() => setIsActive(!isActive)} alt="menu"/>
                </div>
            </div>
        </header>
    );
};

export default Header;

