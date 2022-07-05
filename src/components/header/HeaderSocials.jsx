import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="https://facebook.com/" target={"_blank"}>
        <BsFacebook />
      </a>
      <a href="https://instagram.com/" target={"_blank"}>
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
