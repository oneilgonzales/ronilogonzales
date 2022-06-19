const express = require("express"); //Import express
const app = express(); //Initialize
const path = require("path"); //Import path

const port = process.env.PORT || 3000;

//Listen() Function of the express. param are PORT and LambdaFunction
app.listen(port, (err) => {
  if (err) return console.log(err); //RETURN to stop and LOG IT
  console.log("Server running on port: ", port); //LOG IT and just continue
});

//CHECK the NODE ENVIRONMENT, then USE() the Express.Static(). Meaning then GO TO "Build folder"
if (process.env.NODE_ENV === "production") {
  console.log("Node Environment1: ", process.env.NODE_ENV); //LOG IT and just continue
  app.use(express.static("build")); //Meaning then GO TO "Build folder"
  //THEN GET the URL Directory of the index.html ("path.resolve()") from the "Build folder". Then show the FILE there (req.sendFile).
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
console.log("Node Environment2: ", process.env.NODE_ENV); //LOG IT and just continue


