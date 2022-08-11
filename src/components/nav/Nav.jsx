import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi"; //BiBook,
// import { GiSkills } from "react-icons/gi";
// import { FcMindMap } from "react-icons/fc";
import { RiMindMap } from "react-icons/ri";
// import { RiServiceLine } from "react-icons/ri";
// import { GrProjects } from "react-icons/gr";

//

import { useState } from "react";

const Nav = () => {
    const [activeNow, setActiveNow] = useState("#");
    return (
        <nav>
            <a
                href="#"
                onClick={() => {
                    setActiveNow("#");
                }}
                className={activeNow === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => {
                    setActiveNow("#about");
                }}
                className={activeNow === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => {
                    setActiveNow("#experience");
                }}
                className={activeNow === "#experience" ? "active" : ""}
            >
                <RiMindMap />
            </a>
            <a
                href="#portfolio"
                onClick={() => {
                    setActiveNow("#portfolio");
                }}
                className={activeNow === "#portfolio" ? "active" : ""}
            >
                <AiOutlineProject />
            </a>
            <a
                href="#contact"
                onClick={() => {
                    setActiveNow("#contact");
                }}
                className={activeNow === "#contact" ? "active" : ""}
            >
                <BiMessageDetail />
            </a>
        </nav>
    );
};

export default Nav;
