import React from 'react';
import classes from './Home.module.scss';
import Title from "./Title/Title";
import Description from './Description/Description';
import ListInfo from "./ListInfo/ListInfo";
import Slider from "./Slider/Slider";
import SignUpButton from "./SignUpButton/SignUpButton";

const Home = () => {
    return (
        <div className={classes.homeContainer}>
            <div className={classes.Title}>
                <Title/>
            </div>
            <div className={classes.Description}>
                <Description/>
            </div>
            <div className={classes.ListInfo}>
                <ListInfo/>
            </div>
            <div className={classes.Slider}>
                <Slider/>
            </div>
            {/*<SignUpButton/>*/}
        </div>
    );
};

export default Home;