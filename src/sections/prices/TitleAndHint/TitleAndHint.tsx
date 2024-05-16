import React, {FC} from 'react';
import classes from './TitleAndHint.module.scss'
import H2 from "../../../components/ui/H2/H2";
import P2 from "../../../components/ui/P2/P2";

interface ITitleAndHint {
    className?: string;
}

const TitleAndHint : FC<ITitleAndHint> = ({className}) => {
    return (
        <div className={`${classes.container} ${className}`}>
            <H2 className={classes.title}>Стоимость наших тренировок</H2>
            <div className={classes.hintContainer}>
                <P2 className={classes.firstHint}>После покупки абонемента его необходимо <span className={classes.firstHintHighlighting}>активировать в течении трех месяцев</span> с момента приобретения (дата активации - первое занятие).</P2>
                <P2 className={classes.secondHint}>Первая тренировка для новых клиентов <span className={classes.secondHintHighlighting}>бесплатная!</span></P2>
            </div>
        </div>
    );
};

export default TitleAndHint;