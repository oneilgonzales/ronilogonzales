import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = (props) => {
    const data = props.experienceTitle;
    const data2 = props.experienceSkills;

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                {data.map(({ id, title }) => {
                    return (
                        <div className="experience__mobile-dev" key={id}>
                            <h3>{title}</h3>
                            <div className="experience__content">
                                {data2.map(({ sid, name, gauge },index) => {
                                    {
                                        // DIFFERENT VALUE for EACH TITLE
                                        if (sid == id) {
                                            return (
                                                <article
                                                    key={index}
                                                    className="experience__details"
                                                >
                                                    <BsPatchCheckFill className="experience__icon" />
                                                    <div>
                                                        <h4>{name}</h4>
                                                        <small>{gauge}</small>
                                                    </div>
                                                </article>
                                            );
                                        }
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
