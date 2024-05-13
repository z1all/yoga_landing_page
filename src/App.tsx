import React from 'react';
import MainLayout from "./components/layouts/Main/MainLayout";
import Home from "./sections/home/Home";
import Directions from "./sections/directions/Directions";

function App() {
    return (
        <MainLayout>
            <Home/>
            <Directions/>
        </MainLayout>
    );
}

export default App;
