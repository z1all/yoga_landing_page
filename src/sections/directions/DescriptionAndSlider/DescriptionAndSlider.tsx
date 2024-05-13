import React, {FC} from 'react';
import classes from './DescriptionAndSlider.module.scss';
import H3 from "../../../components/ui/H3/H3";
import {IDirection} from "../../../types/types";
import timer from '../../../assets/imgs/directions/timer.svg'
import calendar from '../../../assets/imgs/directions/calendar.svg'
import TextWithImg from "./TextWithImg/TextWithImg";
import StatusBar from "../../../components/ui/StatusBar/StatusBar";
import CircleButtonGroup from "../../../components/ui/CircleButtonGroup/CircleButtonGroup";
import {ToRuRange} from "../../../helpers/toRu";
import ManifestationEffect from "../../../components/animations/ManifestationEffect/ManifestationEffect";

interface IDescriptionAndSlider {
    moveLeft: () => void;
    moveRight: () => void;
    progress: { percent: number };
    transitionSpeed: number;
    direction: IDirection;
}

const DescriptionAndSlider: FC<IDescriptionAndSlider>
    = ({direction, progress, transitionSpeed, moveLeft, moveRight}) => {

    return (
        <ManifestationEffect positionAnimation={true} transitionSpeed={transitionSpeed}>
            <div className={classes.container}>
                <div className={classes.directionInfo}>
                    <H3 className={classes.title}>{direction.name}</H3>
                    <div className={classes.textWithImgContainer}>
                        <TextWithImg img={calendar} alt="Сalendar" className={classes.weekDays}>
                            Проходит по: {ToRuRange(direction.weekdays)}
                        </TextWithImg>
                        <TextWithImg img={timer} alt="Timer" className={classes.duration}>
                            Длительность по: {direction.durationMinutes} мин
                        </TextWithImg>
                    </div>
                    <p className={classes.description}>
                        {direction.description}
                    </p>
                </div>
                <div className={classes.navigationContainer}>
                    <CircleButtonGroup moveLeft={moveLeft} moveRight={moveRight}
                                       className={classes.buttonStatusBarContainer}/>
                    <div className={classes.statusBarContainer}>
                        <StatusBar progress={progress} transitionSpeed={transitionSpeed}/>
                    </div>
                </div>
            </div>
        </ManifestationEffect>
    );
};

export default DescriptionAndSlider;