import React from 'react';
import classes from './TitleAndHint.module.scss'
import H2 from "../../../components/ui/H2/H2";
import H4 from "../../../components/ui/H4/H4";

const TitleAndHint = () => {
    return (
        <div className={classes.container}>
            <H2 className={classes.title}>Все направления <br/> в одном абонементе</H2>
            <H4 className={classes.hint}>Не определились с направлением? Мы подскажем!</H4>
        </div>
    );
};

export default TitleAndHint;