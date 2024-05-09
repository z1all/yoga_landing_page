import React, {FC, useEffect, useState} from 'react';
import classes from './NumbersStatusBas.module.scss';
import {usePrevious} from "../../../../hooks/usePrevious";

interface INumbersStatusBas {
    maxNumber: number;
    currentNumber: number;
}

const NumbersStatusBas: FC<INumbersStatusBas> = ({currentNumber, maxNumber}) => {
    const [prevNumber, curNumber] = usePrevious(currentNumber)
    const [step, setStep] = useState(0);
    useEffect(() => {
        setStep((step + 1) % 2)
    }, [currentNumber]);

    const a = step === 0 ?
        [{number: curNumber, opacity: 1}, {number: prevNumber, opacity: 0}]
        :
        [{number: prevNumber, opacity: 0}, {number: curNumber, opacity: 1}];

    return (
        <span className={classes.numbersContainer}>
            {a.map((num, index) => (
                <span className={classes.textWrapper} style={{opacity: num.opacity, zIndex: num.opacity}}>
                    <span className={classes.currentNumber}>{num.number}</span>
                    <span className={classes.maxNumber}>/{maxNumber}</span>
                </span>
            ))}
        </span>
    );
};

export default NumbersStatusBas;