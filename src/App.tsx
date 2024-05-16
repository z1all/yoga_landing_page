import React from 'react';
import MainLayout from "./components/layouts/Main/MainLayout";
import Home from "./sections/home/Home";
import Directions from "./sections/directions/Directions";
import Prices from "./sections/prices/Prices";

function App() {
    return (
        <MainLayout>
            <Home/>
            <Directions/>
            <Prices/>
            <Prices/>
            <Prices/>
            <Prices/>
        </MainLayout>
    );
}

export default App;
