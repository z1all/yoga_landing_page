import React from 'react';
import classes from './Home.module.scss';
import Title from "./Title/Title";
import Description from './Description/Description';
import SeasonTicketInfo from "./SeasonTicketInfo/SeasonTicketInfo";
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
                <SeasonTicketInfo/>
            </div>
            <div className={classes.Slider}>
                <Slider/>
            </div>
            <div className={classes.buttonContainer}>
                <SignUpButton className={classes.button}/>
            </div>
        </div>
    );
};

export default Home;