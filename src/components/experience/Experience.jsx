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
                        <div className="experience__mobile-dev">
                            <h3 key={id}>{title}</h3>
                            <div className="experience__content">
                                {data2.map(({ sid, name, gauge }) => {
                                    {
                                        // DIFFERENT VALUE for EACH TITLE
                                        if (sid == id) {
                                            return (
                                                <article
                                                    key={sid}
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
