import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

import { MovieContext } from "../context/movie.context";

export const Movielayout = (props) => {
    const { id } = useParams();

    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    );
};

export default Movielayout;