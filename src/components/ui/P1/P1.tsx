import React, {FC} from 'react';
import classes from './P1.module.scss';

interface P1 {
    children: string;
}

const P1 : FC<P1> = ({children}) => {
    return (
        <div className={classes.P1}>
            {children}
        </div>
    );
};

export default P1;