import React from "react";
// import CV from "../../assets/cv.pdf";

//download={CV} can be used if file is inside this project folder
{
    /* <a href="" download={CV} className="btn">
    Download CV
</a> */
}
const CTA = (props) => {
    const cv = props.resume;
    return (
        <div className="cta">
            <a href={cv} className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};
//
export default CTA;
