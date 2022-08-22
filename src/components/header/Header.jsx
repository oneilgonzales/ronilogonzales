import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

//BEM CSS ClassNaming bestPractice: header__container
const Header = (props) => {
    const data = props.header;

    console.log(data["image"]);

    return (
        <header className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Ronilo Gonzales</h1>
            <h5 className="text-light">Android Mobile App Developer</h5>
            <CTA resume={data["link"]} />
            <HeaderSocials socials={data} />
            <div className="me">
                {/* <img src={ME} alt="me" /> */}
                <img src={data["image"]} alt="me" />
            </div>
            <a href="#contact" className="scroll__down">
                Scroll Down
            </a>
        </header>
    );
};

export default Header;
