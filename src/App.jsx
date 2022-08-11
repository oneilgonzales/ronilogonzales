import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Axios from "axios";

//TOP_LEVEL: OUTSIDE COMPONENT FUNCTION
//NOTE: React Hooks must be called in a React function component. ex: useState

//Checker LOG
// const baseUrl = window.location.href;
const baseUrlServer = process.env.REACT_APP_BASE_URL_DEV_SERVER;
// console.log(`BASE_URL_PAGE: ${baseUrl}`);
//process.env Not working inside REACT APP.
//Resolve: need to prefix REACT_APP_ to the variable name inside .env for the REACT usage
// console.log(`BASE_URL_SERVER: ${baseUrlServer}`);

const App = () => {
    /** UseState must called first before useEffect */
    const [portfolioData, setPortfolio] = useState([]); //array
    const [resumeData, setResume] = useState(""); //String
    const [experienceTitleData, setExperienceTitle] = useState([]); //array
    const [experienceSkillsData, setExperienceSkills] = useState([]); //array


    useEffect(() => {
        // getPortfolio();
        // getResume();
        // getExperienceTitle();
        // getExperienceSkills();
    }, []); //NoNeed DependencyHere so that useEffect will not be CALLED repeatedly

    //Axios GET and POST
    function getPortfolio() {
        Axios.get(`${baseUrlServer}/portfolio`)
            .then((res) => {
                if (res.data.length > 0) {
                    setPortfolio(res.data); //getting the whole json element value
                    return;
                }
            })
            .catch((err) => console.log(err));
    }

    function getResume() {
        Axios.get(`${baseUrlServer}/resume`)
            .then((res) => {
                if (res.data.length > 0) {
                    // console.log("LINK: " + res.data[0]["link"]);
                    setResume(res.data[0]["link"]); //Getting specific element value
                    return;
                }
            })
            .catch((err) => console.log(err));
    }

    function getExperienceTitle() {
        Axios.get(`${baseUrlServer}/experience_title`)
            .then((res) => {
                if (res.data.length > 0) {
                    setExperienceTitle(res.data); //Getting specific element value
                    return;
                }
            })
            .catch((err) => console.log(err));
    }

    function getExperienceSkills() {
        Axios.get(`${baseUrlServer}/experience_skills`)
            .then((res) => {
                if (res.data.length > 0) {
                    setExperienceSkills(res.data); //Getting specific element value
                    return;
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Header resume={resumeData} />
            <Nav />
            <About />
            <Experience experienceTitle={experienceTitleData}  experienceSkills={experienceSkillsData}/>
            {/* <Services /> */}
            <Portfolio portfolio={portfolioData} />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default App;
