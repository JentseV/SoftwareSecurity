const fetch = require('node-fetch');
const PORT = 3000;
const HOST = "localhost";
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const crypto = require('crypto');

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded());

app.get('', (request,response) => {
    response.status(200).sendFile(path.join(__dirname,"/index.html"));
})


app.post("/api" , async (request,response) => {
    console.log(request.body);
    let name = request.body.name;
    let password = request.body.password;
    let hash = crypto.createHash('sha1').update(password).digest('hex');
    let checkPwned = await fetch("https://api.pwnedpasswords.com/range/"+hash.substring(0,5));
    response.status(200).send(checkPwned);
})

app.listen(PORT,HOST, () => {
    console.log("Server running");
})

