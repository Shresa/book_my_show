import React from "react";

// components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

export const Movielayout = (props) => {
    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    );
};

export default Movielayout;