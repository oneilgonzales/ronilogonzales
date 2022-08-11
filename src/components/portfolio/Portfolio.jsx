import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// const data = [
//     {
//         id: "1",
//         image: IMG1,
//         title: "Title 1",
//         link: "https://www.google.com",
//     },
//     {
//         id: "2",
//         image: IMG2,
//         title: "Title 2",
//         link: "https://www.yahoo.com",
//     },
//     {
//         id: "3",
//         image: IMG3,
//         title: "Title 3",
//         link: "https://www.facebook.com",
//     },
//     {
//         id: "4",
//         image: IMG4,
//         title: "Title 4",
//         link: "https://www.google.com",
//     },
//     {
//         id: "5",
//         image: IMG5,
//         title: "Title 5",
//         link: "https://www.google.com",
//     },
//     {
//         id: "6",
//         image: IMG6,
//         title: "Title 6",
//         link: "https://www.google.com",
//     },
// ];

const Portfolio = (props) => {
    const data = props.portfolio
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, link }) => {
                    return (
                        // ImportantNote: deconstructive should be inside the CURLY BRACES {}
                        // ImportantNote: key ID must put in the parent TAG inside of this return
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={link}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
