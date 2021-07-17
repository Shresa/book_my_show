import React from "react";

// components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";
import Navbar from "../components/Navbar/navbar.component";


const DefaultLayout = (props) => {
    return (
    <>
        <Navbar />
        <HeroCarousel />
        {props.children}
    </>
    );
};

export default DefaultLayout;