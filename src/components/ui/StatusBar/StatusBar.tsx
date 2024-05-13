import React, {FC} from 'react';
import classes from './StatusBar.module.scss'

interface IStatusBar {
    progress: { percent: number };
    transitionSpeed: number;
}

const StatusBar : FC<IStatusBar> = ({progress, transitionSpeed}) => {
    return (
        <div className={classes.statusBarContainer}>
            <div className={classes.line}/>
            <div className={`${classes.lineAccented}`}
                 style={{width: `${progress.percent}%`, transition: `all ${transitionSpeed}s`}}/>
        </div>
    );
};

export default StatusBar;