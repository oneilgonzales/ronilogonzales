import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = (props) => {
    const data = props.socials;
    return (
        <div className="header__socials">
            <a href={data["linkedIn"]} target={"_blank"}>
                <BsLinkedin />
            </a>
            <a href={data["fb"]} target={"_blank"}>
                <BsFacebook />
            </a>
            <a href={data["ig"]} target={"_blank"}>
                <FaInstagramSquare />
            </a>
        </div>
    );
};

export default HeaderSocials;
