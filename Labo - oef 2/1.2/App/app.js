const express = require('express');
const HOST = "localhost";
const PORT = "5000";
const path = require('path');
const app = express();


app.use(express.static(__dirname));


app.get("/",(request,response) => {
    response.status(200).sendFile(path.join(__dirname,"/index.html"));
})

app.get("/newWindow.html",(request,response) => {
    response.status(200).sendFile(path.join(__dirname,"/newWindowPage.html"));
})


app.listen(PORT,HOST,() => {
    console.log("Server started");
})