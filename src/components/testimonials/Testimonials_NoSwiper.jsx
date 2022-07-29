import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

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
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Reviews from client</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                {/* ImportantNote: If there is no id in the JsonArray, use the "index" variable in the map() */}
                {dataTestimonials.map(({ avatar, name, review }, index) => {
                    // ImportantNote: deconstructive should be inside the CURLY BRACES {}
                    // ImportantNote: key ID must put in the parent TAG inside of this return
                    return (
                        <article key={index} className="testimonials">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <div className="client__name">{name}</div>
                            <div className="client__reviews">{review}</div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Testimonials;
