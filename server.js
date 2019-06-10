var express = require('express');
const bodyParser = require("body-parser");

// Create an express server and a GraphQL endpoint
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const render = (req, res) => {
    //console.log("req",req)
    console.log("req.params.number",req.params.number)
    res.send('<h1>number is '+req.params.number+'</h1>');
};

app.get('/html/:number', render);

app.listen(4000, () => console.log(' Server Now Running On localhost:4000'));