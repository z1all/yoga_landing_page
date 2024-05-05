import React, {FC} from 'react';
import classes from './P2.module.scss';

interface IP2 {
    children: string;
}

const P2 : FC<IP2> = ({children}) => {
    return (
        <div className={classes.P2}>
            {children}
        </div>
    );
};

export default P2;