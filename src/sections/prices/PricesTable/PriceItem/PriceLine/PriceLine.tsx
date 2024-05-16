import React, {FC} from 'react';
import classes from './PriceLine.module.scss'
import {IPrice} from "../../../../../types/types";

interface IPriceLine {
    isTopLine: boolean;
    price: IPrice;
    className?: string;
}

const PriceLine : FC<IPriceLine> = ({isTopLine, price, className}) => {
    return (
        <div className={`${classes.container} ${className} ${isTopLine ? classes.topTextColor : classes.bottomTextColor}`}>
            <div className={classes.countLessensContainer}>
                <div className={classes.countLessens}>{price.countLessens}</div>
                <div className={classes.countLessensText}>{isTopLine ? "занятий в месяц" : "занятий"}</div>
            </div>
            <div className={classes.price}>{price.price}₽</div>
        </div>
    );
};

export default PriceLine;