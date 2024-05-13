import React, {FC} from 'react';
import classes from './DirectionButton.module.scss'

interface IDirectionButton {
    children: string;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}

const DirectionButton : FC<IDirectionButton> = ({children, isActive, onClick, className}) => {
    return (
        <button className={`${classes.directionButton} ${className} ${isActive ? classes.directionButtonActive : ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default DirectionButton;