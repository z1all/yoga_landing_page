import React, {FC} from 'react';
import classes from './H4.module.scss'

interface IH4 {
    children?: string;
    className?: string;
}

const H4 : FC<IH4>= ({children, className}) => {
    return (
        <div className={`${classes.H4} ${className}`}>
            {children}
        </div>
    );
};

export default H4;