import React, {FC} from 'react';
import classes from "./MenuNavigationButton.module.scss";

interface IMenuNavigationButton {
    href: string;
    children: string;
    onClick: () => void;
}

const MenuNavigationButton : FC<IMenuNavigationButton> = ({href, children, onClick}) => {
    return (
        <li className={classes.li}>
            <a href={href} className={`${classes.a} ${classes.link}`} onClick={onClick}>
                {children}
            </a>
        </li>
    );
};

export default MenuNavigationButton;