import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUserFriends } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

const About = (props) => {
    const data = props.about;

    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me_img">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__card_icon" />
                            <h5>Experience</h5>
                            <small>{data["experience"]}</small>
                        </article>
                        <article className="about__card">
                            <VscNewFolder className="about__card_icon" />
                            <h5>Projects</h5>
                            <small>{data["project"]}</small>
                        </article>
                    </div>
                    <p>{data["description"]}</p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

{
    /* <article className="about__card">
<FaUserFriends className="about__card_icon" />
<h5>Clients</h5>
<small>20+ Worldwide</small>
</article> */
}
