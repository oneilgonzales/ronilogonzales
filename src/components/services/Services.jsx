import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
const Services = () => {
    return (
        <section id="services">
            <h5>What Services I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Android App Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                    </ul>
                </article>
                {/* END OF Android Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                    </ul>
                </article>
                {/* END OF Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Chatbot Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                        <li>
                            <FiCheck className="service__list-icon" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
