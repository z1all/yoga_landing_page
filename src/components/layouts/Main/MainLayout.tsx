import React, {FC} from 'react';
import classes from "*.module.css";
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