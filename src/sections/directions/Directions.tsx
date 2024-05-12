import React, {useEffect} from 'react';
import classes from './Directions.module.scss'
import {api} from "../../services/api";

const Directions = () => {

    // useEffect(() => {
    //     f();
    // }, [])

    return (
        <div className={classes.directionsContainer}>
            <div className={classes.titleAndHintContainer}>

            </div>
            <div className={classes.directionsListContainer}>

            </div>
            <div className={classes.imageContainer}>

            </div>
            <div className={classes.descriptionAndSliderContainer}>

            </div>
        </div>
    );
};

// async function  f() {
//     try {
//         const directions = await api.getDirectionsAsync();
//         console.log(directions);
//         console.log(directions.data);
//     }
//     catch (ex) {
//         console.log(ex);
//     }
// }

export default Directions;