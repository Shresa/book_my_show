import React from "react";
import Slider from "react-slick";

// components
import Poster from '../Poster/poster.component';

// Configs
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremiereImages from "../../config/TempPosters.config";

export const Premiere = () => {
    return (
        <>
            <div className="flex flex-col items-start">
                <h3 className="text-white text-xl font-bold">Premiers</h3>
                <p className="text-white text-xm">Brand new release every friday</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {PremiereImages.map((image) => (
                    <Poster {...image} isDark />
                ))} 
            </Slider>
        </>
    );
};

export default Premiere;