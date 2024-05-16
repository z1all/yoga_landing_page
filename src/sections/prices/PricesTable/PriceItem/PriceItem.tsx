import React, {FC} from 'react';
import classes from './PriceItem.module.scss';
import {IPrices} from "../../../../types/types";
import PriceLine from "./PriceLine/PriceLine";

interface IPriceItem {
    prices: IPrices
}

const PriceItem : FC<IPriceItem> = ({prices}) => {

    //if (prices.benefit === null) return (<></>);

    return (
        <div className={classes.container}>
            <PriceLine isTopLine={true} price={prices.tariff}/>
            <hr className={classes.line}/>
            <PriceLine isTopLine={false} price={prices.benefit!}/>
        </div>
    );
};

export default PriceItem;