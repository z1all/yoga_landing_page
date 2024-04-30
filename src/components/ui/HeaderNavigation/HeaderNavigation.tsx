import React from 'react';
import classes from './HeaderNavigation.module.scss'
//import './HeaderNavigation.module.scss';

const HeaderNavigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#">ПРОГРАММЫ</a></li>
                <li><a href="#">ПРАЙС</a></li>
                <li><a href="#">РАСПИСАНИЕ</a></li>
                <li><a href="#">ОТЗЫВЫ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;