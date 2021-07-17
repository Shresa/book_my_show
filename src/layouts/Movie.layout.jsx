import React from "react";

export const Movielayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
};

export default Movielayout;