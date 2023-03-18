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
    fetch("https://api.pwnedpasswords.com/range/"+hash.substring(0,5)).then( response => {
        return response.json().then;
    })

    fetch("https://api.pwnedpasswords.com/range/"+hash.substring(0,5)).then(function (response) {
	return response.json();
}).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});
    
    response.status(200).send("ok");
})

app.listen(PORT,HOST, () => {
    console.log("Server running");
})

