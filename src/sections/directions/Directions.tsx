import React, {useEffect, useState} from 'react';
import classes from './Directions.module.scss'
import {api} from "../../services/api";
import TitleAndHint from "./TitleAndHint/TitleAndHint";
import DescriptionAndSlider from "./DescriptionAndSlider/DescriptionAndSlider";
import {IDirection} from "../../types/types";
import ImageSlider from "./ImageSlider/ImageSlider";

const Directions = () => {
    const [directions, setDirections] = useState<IDirection[]>([]);
    useEffect(() => {
        getDirections(setDirections);
    }, [])

    const directionsCount = directions.length;
    const [directionsIndex, setDirectionsIndex] = useState(0);
    const [transitionSpeed, setTransitionSpeed] = useState(0);

    const moveLeft = () => {
        setDirectionsIndex((directionsIndex - 1 + directionsCount) % directionsCount);
        setTransitionSpeed(0.25);
    }

    const moveRight = () => {
        setDirectionsIndex((directionsIndex + 1) % directionsCount);
        setTransitionSpeed(0.6);
    }

    if (directionsCount === 0) return (<div className={classes.loadingContainer}></div>);
    return (
        <div className={classes.directionsContainer}>
            <div className={classes.titleAndHintContainer}>
                <TitleAndHint/>
            </div>
            <div className={classes.directionsListContainer}>

            </div>
            <div className={classes.imageContainer}>
                <ImageSlider src={directions[directionsIndex].imageUrl}/>
            </div>
            <div className={classes.descriptionAndSliderContainer}>
                <DescriptionAndSlider
                    moveLeft={moveLeft}
                    moveRight={moveRight}
                    progress={((directionsIndex + 1) / directionsCount) * 100}
                    transitionSpeed={transitionSpeed}
                    direction={directions[directionsIndex]}
                />
            </div>
        </div>
    );
};

async function getDirections(setDirections: React.Dispatch<IDirection[]>) {
    try {
        const directions = await api.getDirectionsAsync();
        setDirections(directions.data);
    } catch (ex) {
        console.log(ex);
    }
}

export default Directions;