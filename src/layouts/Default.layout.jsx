import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";
import Navbar from "../components/Navbar/navbar.component";


const DefaultLayout = (props) => {
    return (
    <>
        <Navbar />
        {props.children}
    </>
    );
};

export default DefaultLayout;