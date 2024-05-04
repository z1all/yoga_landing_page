import React, {FC} from 'react';
import classes from "./MainLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface IMainLayout {

}

const MainLayout : FC<IMainLayout> = () => {
    return (
        <>
            <Header/>

            <Footer/>
        </>
    );
};

export default MainLayout;

/*

<div className={classes.mainContainer}>
    <div className={classes.content}>

    </div>
</div>

 */