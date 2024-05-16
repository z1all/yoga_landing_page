import React, {FC} from 'react';
import classes from './PricesTable.module.scss'
import {IPrices} from "../../../types/types";
import PriceItem from "./PriceItem/PriceItem";

interface IPricesTable {
    className?: string;
    prices: IPrices[];
}

const PricesTable : FC<IPricesTable> = ({className, prices}) => {
    return (
        <div className={`${classes.container} ${className}`}>
            <PriceItem prices={prices[1]}/>
        </div>
    );
};

export default PricesTable;