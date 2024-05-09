import React, {FC} from 'react';
import classes from './H1.module.scss';

interface H1 {
    children: string
}

const H1 : FC<H1> = ({children}) => {
    return (
        <div className={classes.H1}>
            {children}
        </div>
    );
};

export default H1;