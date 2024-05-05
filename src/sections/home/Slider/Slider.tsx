import React from 'react';
import classes from './Slider.module.scss'
import womanStretching from '../../../assets/imgs/home/woman-stretching-inside.png'
import womanStandingOneLeg from '../../../assets/imgs/home/smiley-woman-standing-one-leg.png'
import womanHoldingFoot from '../../../assets/imgs/home/woman-holding-foot.png'

const Slider = () => {
    const images = [
        {
            src: womanStretching,
            alt: "Woman stretching inside",
            key: 1,
        },
        {
            src: womanStandingOneLeg,
            alt: "Smiley woman standing one leg",
            key: 2,
        },
        {
            src: womanHoldingFoot,
            alt: "Woman holding foot",
            key: 3,
        }
    ];

    const index = 0;

    return (
        <div className={classes.sliderContainer}>
            <div className={classes.imageContainer}>
                <img src={images[index].src} alt={images[index].alt} className={classes.image}/>
            </div>
            <div className={classes.navigationContainer}>
                Slider Navigation
            </div>
        </div>
    );
};

export default Slider;