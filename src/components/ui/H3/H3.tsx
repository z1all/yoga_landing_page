import React, {FC} from 'react';
import classes from './H3.module.scss'

interface IH3 {
    children?: React.ReactNode;
    className?: string;
}


const H3 : FC<IH3> = ({children, className}) => {
    return (
        <div className={`${classes.H3} ${className}`}>
            {children}
        </div>
    );
};

export default H3;