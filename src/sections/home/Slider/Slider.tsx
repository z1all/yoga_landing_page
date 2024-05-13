import React, {useState} from 'react';
import classes from './Slider.module.scss'
import womanStretching from '../../../assets/imgs/home/woman-stretching-inside.png'
import womanStandingOneLeg from '../../../assets/imgs/home/smiley-woman-standing-one-leg.png'
import womanHoldingFoot from '../../../assets/imgs/home/woman-holding-foot.png'
import StatusBar from "../../../components/ui/StatusBar/StatusBar";
import NumbersStatusBas from "./NumbersStatusBas/NumbersStatusBas";
import CircleButton, {CircleButtonType} from "../../../components/ui/CircleButton/CircleButton";
import CircleButtonGroup from "../../../components/ui/CircleButtonGroup/CircleButtonGroup";

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

    const imgCount = images.length;
    const [imgIndex, setImgIndex] = useState(0);
    const [transitionSpeed, setTransitionSpeed] = useState(0);

    const moveLeft = () => {
        setImgIndex((imgIndex - 1 + imgCount) % imgCount);
        setTransitionSpeed(0.25);
    }

    const moveRight = () => {
        setImgIndex((imgIndex + 1) % imgCount);
        setTransitionSpeed(0.6);
    }

    return (
        <div className={classes.sliderContainer}>
            <div className={classes.imageContainer}>
                {images.map((image, index) =>
                    <img src={image.src} alt={image.alt} key={image.key}
                         className={`${classes.image} ${index !== imgIndex ? classes.imageHidden : '' }`}
                         style={{transition: `opacity ${transitionSpeed}s ease-in-out`}}
                    />
                )}
            </div>
            <div className={classes.navigationContainer}>
                <div className={classes.numbersStatusBarContainer}>
                    <NumbersStatusBas currentNumber={imgIndex + 1} maxNumber={imgCount} transitionSpeed={transitionSpeed}/>
                </div>
                <div className={classes.statusBarContainer}>
                    <StatusBar progress={{percent: ((imgIndex + 1) / imgCount) * 100}} transitionSpeed={transitionSpeed}/>
                </div>
                <CircleButtonGroup moveLeft={moveLeft} moveRight={moveRight} className={classes.buttonStatusBarContainer}/>
            </div>
        </div>
    );
};

export default Slider;