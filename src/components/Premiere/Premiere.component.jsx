import React from "react";
import Slider from "react-slick";

// components
import Poster from '../Poster/poster.component';

export const Premiere = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        SlidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const PremiereImages = [
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "zack",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "zack",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "zack",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "zack",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "zack",
            subtitle: "english",
        },
    ];
    
    return (
        <Slider {...settings}>
           {PremiereImages.map((image) => (
               <Poster {...image} />
           ))} 
        </Slider>
    );
};

export default Premiere;