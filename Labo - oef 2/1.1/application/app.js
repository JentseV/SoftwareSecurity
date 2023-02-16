// simple web application running on localhost:5001

const express = require("express");
const path = require('path');
const app = express();
const HOST  = "localhost";
const PORT = "5001";

app.use(express.static(__dirname));

app.get("", (request,response) => {
    response.status(200).sendFile(path.join(__dirname,'/index.html'));
})



app.listen(PORT,HOST,()=> {
    console.log("Running web app");
})
