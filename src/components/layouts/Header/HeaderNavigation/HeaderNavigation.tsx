import React, {FC, useEffect, useRef} from 'react';
import classes from './HeaderNavigation.module.scss'
import MenuNavigationButton from "./MenuNavigationButton/MenuNavigationButton";

interface IHeaderNavigation {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderNavigation : FC<IHeaderNavigation> = ({isActive, setIsActive}) => {
    const styles = `${isActive ? classes.menuActive : classes.menuNotActive}`;

    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeHandler();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, []);

    const closeHandler = () => {
        setIsActive(false);
    }

    return (
        <nav className={`${classes.nav} ${styles}`} ref={navRef}>
            <ul className={`${classes.ul} `}>
                <MenuNavigationButton href="#programs" onClick={closeHandler}>Программы</MenuNavigationButton>
                <MenuNavigationButton href="#prices" onClick={closeHandler}>Прайс</MenuNavigationButton>
                <MenuNavigationButton href="#schedule" onClick={closeHandler}>Расписание</MenuNavigationButton>
                <MenuNavigationButton href="#reviews" onClick={closeHandler}>Отзывы</MenuNavigationButton>
                <MenuNavigationButton href="#contacts" onClick={closeHandler}>Контакты</MenuNavigationButton>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;