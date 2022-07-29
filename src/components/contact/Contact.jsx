import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaViber } from "react-icons/fa";

const Contact = () => {
    //Must be inside ReactFunction
    // const [values, setValues] = useState([]); // this useState() is an array type, []

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     console.log(values);
    // };

    // const onChangeHandler = (event) => {
    //     setValues({ ...values, [event.target.name]: event.target.value });
    // };

    const formRef = useRef(); //reference useRef() has a keyName "current"

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(formRef.current);

        emailjs
            .sendForm(
                "service_qrbz1iq", //SERVICE ID
                "template_ana5p5m", //TEMPLATE ID
                formRef.current,
                "AIJ4hDBnng5xYgJJ1" //PUBLIC KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset(); //RESET the Value of the input and textArea
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contacts__container">
                <div className="contacts__options">
                    <article className="contacts__option">
                        <AiOutlineMail className="contacts__option-icon" />
                        <h4>Email</h4>
                        <h6>olinor1211@gmail.com</h6>
                        <a href="mailto:olinor1211@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contacts__option">
                        <RiMessengerLine className="contacts__option-icon" />
                        <h4>Messenger</h4>
                        <h6>Oneil Gonzales</h6>
                        <a href="https://m.me/100063763183558" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contacts__option">
                        <FaViber className="contacts__option-icon" />
                        <h4>Viber</h4>
                        <h6>+639454539768</h6>
                        <a
                            href="viber://chat?number=%2B639454539768"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* <form action=""> action="" replace with "ref" */}
                <form ref={formRef} onSubmit={sendEmail}>
                    <input
                        name="fullname"
                        // value={values.name}
                        type="text"
                        placeholder="Your Full Name"
                        maxLength={50}
                        // onChange={onChangeHandler}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        // value={values.name}
                        placeholder="Your Email"
                        maxLength={50}
                        // onChange={onChangeHandler}
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        // value={values.name}
                        maxLength={300}
                        placeholder="Your Message"
                        // onChange={onChangeHandler}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        // onClick={submitHandler} //to be detected by FORM TAG "onSubmit" once clicked
                        className="btn btn-primary"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
