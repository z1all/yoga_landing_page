import React, {FC} from 'react';
import classes from './ImageSlider.module.scss'

interface IImageSlider {
    src?: string
}

const ImageSlider : FC<IImageSlider> = ({src}) => {
    return (
        <img src={src} alt="Slider" className={classes.image}/>
    );
};

export default ImageSlider;