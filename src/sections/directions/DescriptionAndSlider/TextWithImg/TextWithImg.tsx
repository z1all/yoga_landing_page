import React, {FC, ReactNode} from 'react';
import classes from "./TextWithImg.module.scss";

interface ITextWithImg {
    img: string;
    alt: string;
    children: ReactNode;
    className?: string;
}

const TextWithImg : FC<ITextWithImg> = ({img, alt, className, children}) => {
    return (
        <div className={`${className}`}>
            <img src={img} alt={alt} className={classes.img}></img>
            <div className={classes.text}>{children}</div>
        </div>
    );
}

export default TextWithImg;