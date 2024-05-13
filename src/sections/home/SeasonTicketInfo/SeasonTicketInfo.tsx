import React from 'react';
import classes from './SeasonTicketInfo.module.scss';
import women from '../../../assets/imgs/home/full-shot-woman-meditating.jpg'
import ListInfoItem from "./ListInfoItem/ListInfoItem";

const SeasonTicketInfo = () => {
    const Infos = [
        {
            number: 6,
            text: "направлений \n в одном абонементе",
        },
        {
            number: 4,
            text: "тренера с большим практическим  опытом",
        },
        {
            number: 2,
            text: "просторных зала для занятий",
        }
    ];

    return (
        <div className={classes.seasonTicketInfoContainer}>
            <img src={women} className={classes.imagWomen} alt="Woman meditating"/>
            <div className={classes.listContainer}>
                {Infos.map(Info => <ListInfoItem info={Info} key={Info.number}/>)}
            </div>
        </div>
    );
};

export default SeasonTicketInfo;