import React, {FC, ReactNode} from 'react';
import classes from './P2.module.scss';

interface IP2 {
    children: ReactNode;
    className?: string;
}

const P2 : FC<IP2> = ({children, className}) => {
    return (
        <div className={`${classes.P2} ${className}`}>
            {children}
        </div>
    );
};

export default P2;