import React, {FC, ReactNode} from 'react';
import classes from './H2.module.scss'

interface IH2 {
    children?: React.ReactNode;
    className?: string;
}

const H2 : FC<IH2> = ({children, className}) => {
    return (
        <div className={`${classes.H2} ${className}`}>
            {children}
        </div>
    );
};

export default H2;