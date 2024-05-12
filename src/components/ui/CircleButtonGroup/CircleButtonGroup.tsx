import React, {FC} from 'react';
import classes from "./CircleButtonGroup.module.scss";
import CircleButton, {CircleButtonType} from "../CircleButton/CircleButton";

interface ICircleButtonGroup {
    moveLeft?: () => void;
    moveRight?: () => void;
    className?: string;
}

const CircleButtonGroup : FC<ICircleButtonGroup> = ({moveRight, moveLeft, className}) => {
    return (
        <div className={`${classes.buttonsContainer} ${className}`}>
            <CircleButton type={CircleButtonType.LeftArrow} className={classes.leftButton}  onClick={moveLeft}/>
            <CircleButton type={CircleButtonType.RightArrow}  onClick={moveRight}/>
        </div>
    );
};

export default CircleButtonGroup;