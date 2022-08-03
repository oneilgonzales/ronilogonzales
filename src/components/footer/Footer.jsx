import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                ONEIL GONZALES
            </a>

            <ul className="permalink">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/oneil.gonzales.1">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/olinor1211/">
                    <BsInstagram />
                </a>
                <a href="https://twitter.com/olinor1211">
                    <FaTwitter />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
