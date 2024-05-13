import React, {FC} from 'react';
import classes from './ImageSlider.module.scss'
import ManifestationEffect from "../../../components/animations/ManifestationEffect/ManifestationEffect";

interface IImageSlider {
    src?: string
    key?: number;
    transitionSpeed: number;
}

const ImageSlider : FC<IImageSlider> = ({src, key, transitionSpeed}) => {
    return (
        <ManifestationEffect className={classes.imageContainer} transitionSpeed={transitionSpeed}>
            <img src={src} alt="Slider" className={classes.image} key={key}/>
        </ManifestationEffect>
    );
};

export default ImageSlider;