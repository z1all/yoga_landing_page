import React from 'react';
import classes from './Title.module.scss';
import H1 from "../../../components/ui/H1/H1";

const Title = () => {
    return (
        <div className={classes.TitleContainer}>
            <H1>Студия йоги и пилатеса</H1>
        </div>
    );
};

export default Title;