import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper"; //import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

const dataTestimonials = [
    {
        avatar: AVATAR1,
        name: "Sheryl Gonzales",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis",
    },
    {
        avatar: AVATAR2,
        name: "Oneil Gonzales",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis ",
    },
    {
        avatar: AVATAR3,
        name: "David Nesh Gonzales",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis",
    },
    {
        avatar: AVATAR4,
        name: "Haniel Josh Gonzales",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]} //{[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                //To make the pagination button looks outside the swiper tag, have a paddingBottom of its class, the "testimonials__container"
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log("slide change")}
            >
                {/* ImportantNote: If there is no id in the JsonArray, use the "index" variable in the map() */}
                {dataTestimonials.map(({ avatar, name, review }, index) => {
                    // ImportantNote: deconstructive should be inside the CURLY BRACES {}
                    // ImportantNote: key ID must put in the parent TAG inside of this return
                    return (
                        <SwiperSlide key={index} className="testimonials">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <div className="client__name">{name}</div>
                            <div className="client__reviews">{review}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
