import React, {FC, ReactNode, useEffect, useState} from 'react';
import classes from './ManifestationEffect.module.scss'
import {usePrevious} from "../../../hooks/usePrevious";
import { Property } from 'csstype';

interface IManifestationEffect {
    children?: ReactNode;
    className?: string;
    positionAnimation?: boolean;
    transitionSpeed: number;
}

interface IState {
    children: ReactNode;
    opacity: number;
    positions: Property.Position;
}

function constructState(children: ReactNode, opacity: number, positions: Property.Position) : IState {
    return {
        children: children,
        opacity: opacity,
        positions: positions,
    };
}

const ManifestationEffect : FC<IManifestationEffect> = ({children, className, positionAnimation = false, transitionSpeed}) => {
    const [prevChildren, currChildren] = usePrevious(children);

    const [step, setStep] = useState(0);
    useEffect(() => {
        setStep((step + 1) % 2)
    }, [currChildren]);

    const elements = step === 0 ?
        [constructState(currChildren, 1, "unset"), constructState(prevChildren, 0, "absolute")]
        :
        [constructState(prevChildren, 0, "absolute"), constructState(currChildren, 1, "unset")];

    return (
        <span className={`${classes.container} ${className}`}>
            {elements.map((element, index) => (
                <div className={classes.stateWrapper}
                     style={{
                         opacity: element.opacity,
                         zIndex: element.opacity,
                         position: positionAnimation ? element.positions : "absolute",
                         transition: `opacity ${transitionSpeed}s ease-in-out`
                     }}
                     key={index}
                >
                    {element.children}
                </div>
            ))}
        </span>
    );
};

export default ManifestationEffect;