import React, {FC} from 'react';
import classes from "./CircleButton.module.scss";

import right from "../../../assets/imgs/ui/right.svg"
import rightHover from "../../../assets/imgs/ui/right_hover.svg"
import left from "../../../assets/imgs/ui/left.svg"
import leftHover from "../../../assets/imgs/ui/left_hover.svg"

export enum CircleButtonType {
    LeftArrow = 0,
    RightArrow = 1,
}

interface ICircleButton {
    type: CircleButtonType;
    className?: string;
    onClick?: () => void;
}

const CircleButton : FC<ICircleButton> = ({type, className, onClick}) => {
    return (
        <button className={`${classes.button} ${className}`} onClick={onClick}>
            {type === CircleButtonType.RightArrow ?
                <>
                    <img src={right} className={classes.normalImg} alt="Right button"/>
                    <img src={rightHover} className={classes.hoverImg} alt="Right hover button"/>
                </>
                :
                <>
                    <img src={left} className={classes.normalImg} alt="Left button" />
                    <img src={leftHover} className={classes.hoverImg} alt="Left hover button"/>
                </>}
        </button>
    );
};

export default CircleButton;