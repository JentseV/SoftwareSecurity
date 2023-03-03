// simple api server that listens on localhost:5000 and replies with "Hello from api!"

const { json } = require('express');
const express = require('express');
const server = express();
const HOST = "localhost";
const PORT = "5000";

const reply = "Hello from api!";





server.get("",(request,response) => {
    response.status(200).json(reply);
})

server.listen(PORT,HOST,() => {
    console.log("Server started listening...");
})  