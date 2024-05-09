import React, {FC, ReactNode} from 'react';
import classes from "./MainLayout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


interface IMainLayout {
    children: ReactNode
}

const MainLayout : FC<IMainLayout> = ({children}) => {
    return (
        <>
            <Header/>
            <div className={classes.gap}>
                {children}
            </div>
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