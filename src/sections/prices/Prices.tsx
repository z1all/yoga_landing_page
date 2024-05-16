import React, {useEffect, useState} from 'react';
import classes from './Prices.module.scss'
import TitleAndHint from "./TitleAndHint/TitleAndHint";
import PricesTable from "./PricesTable/PricesTable";
import {IPrices} from "../../types/types";
import {api} from "../../services/api";

const Prices = () => {
    const [prices, setPrices] = useState<IPrices[]>([]);
    useEffect(() => {
        getPrices(setPrices);
    }, [])

    if (prices.length === 0) return (<div className={classes.loadingContainer}></div>);

    return (
        <div className={classes.pricesContainer}>
            <TitleAndHint className={classes.titleAndHint}/>
            <PricesTable className={classes.prices} prices={prices}/>
        </div>
    );
};

async function getPrices(setPrices: React.Dispatch<IPrices[]>) {
    try {
        const prices = await api.getPricesAsync();
        setPrices(prices.data);
        console.log(prices.data)
    } catch (ex) {
        console.log(ex);
    }
}

export default Prices;