import React, {FC} from 'react';
import classes from './NumbersStatusBas.module.scss';
import ManifestationEffect from "../../../../components/animations/ManifestationEffect/ManifestationEffect";

interface INumbersStatusBas {
    maxNumber: number;
    currentNumber: number;
    transitionSpeed: number;
}

const NumbersStatusBas: FC<INumbersStatusBas> = ({currentNumber, maxNumber, transitionSpeed}) => {
    return (
        <ManifestationEffect className={classes.numbersContainer} transitionSpeed={transitionSpeed}>
            <span className={classes.currentNumber}>{currentNumber}</span>
            <span className={classes.maxNumber}>/{maxNumber}</span>
        </ManifestationEffect>
    );
};

export default NumbersStatusBas;