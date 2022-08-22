const express = require("express"); //Declaration of express
const app = express(); //Initialize
const path = require("path"); //Declaration of path
//Will use the custom-env instead require("dotenv").config();
// require("dotenv").config(); //Declaration: This .config() will read the VARIABLES in the .env
const mysql = require("mysql"); //Declaration of MySQL database

//Variables
/** IMPORTANT: Default PORT for SERVER is 3000,
 * REACT APP will get the PORT if SERVER is not RUNNING
 * so To Make the SERVER and REACT APP run simultaneously, best practice is
 * SET a certain PORT for REACT when on under development ex: "staging": "PORT=3001 react-scripts start"
 * when in production same as SERVER PORT, ex: "production": "react-scripts start"  */
const port = process.env.PORT || 3000;

/**IMPORTANT Enable the CORS for REST API*/
//ENABLE CORS
const cors = require("cors");
app.use(cors());

//Setting the ENVIRONMENT 1st
//CHECK the NODE ENVIRONMENT, then USE() the Express.Static(). Meaning then GO TO "Build folder"
if (process.env.NODE_ENV === "production") {
    //Use the Custom ENV for PRODUCTION
    require("custom-env").env("production");
    console.log("Node Environment: ", process.env.NODE_ENV); //LOG IT and just continue
    console.log("App Environment: ", process.env.APP_ENV);
    console.log("Server BaseUrl: ", process.env.REACT_APP_BASE_URL_DEV_SERVER);
    app.use(express.static("build")); //Meaning then GO TO "Build folder"
    //THEN GET the URL Directory of the index.html ("path.resolve()") from the "Build folder". Then show the FILE there (req.sendFile).
    app.get("*", (req, res) => {
        req.sendFile(path.resolve(__dirname, "build", "index.html")); //SEND FILE
    });
} else {
    require("custom-env").env("development");
    console.log("Node Environment: ", process.env.NODE_ENV); //LOG IT and just continue
    console.log("App Environment: ", process.env.APP_ENV);
    console.log("Server BaseUrl: ", process.env.REACT_APP_BASE_URL_DEV_SERVER);
}

/** Database Start*/
//DB Initialize
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
//DB Connection
conn.connect((error) => {
    if (error) console.log(`DB Connection: ${error}`);
    else {
        console.log(`DB Connection: Connected!!!`);
    }
});
/** Database End*/

//Listen() Function of the express. param are PORT and LambdaFunction
app.listen(port, (err) => {
    if (err) return console.log(err); //RETURN to stop and LOG IT
    console.log("Server running on port: ", port);
});

/** ENDPOINTS Start*/
app.get("/portfolio", (req, res) => {
    // //Start the QUERY
    const query =
        "SELECT id, title, img as image, link FROM portfolio WHERE user_id = 1";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
    // res.send();
});

app.get("/resume", (req, res) => {
    // //Start the QUERY
    const query = "SELECT link FROM download WHERE user_id = 1 AND file_id = 1";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
});

app.get("/experience_title", (req, res) => {
    // //Start the QUERY
    const query = "SELECT id, name as title FROM dev_skills";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
});

app.get("/experience_skills", (req, res) => {
    // //Start the QUERY
    const query =
        "SELECT dev_skills_id as sid, name, gauge FROM portfolio_experience";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
});

app.get("/about", (req, res) => {
    // //Start the QUERY
    const query =
        "SELECT experience, project, description, image FROM portfolio_about";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
});

app.get("/header", (req, res) => {
    // //Start the QUERY
    const query =
        "SELECT h.linkedIn, h.fb, h.ig, h.image, d.link FROM portfolio_header as h LEFT JOIN download as d ON d.user_id = h.user_id WHERE h.user_id = '1' AND d.file_id = '1'";
    //SQL QUERY conn.query( query,function());
    conn.query(query, (err, result, fields) => {
        if (err) console.log(`DB Query Error: ${err}`); //Just LOG ERROR
        else res.send(result); //Send the RESULT
    });
});

//

/** ENDPOINTS End*/
