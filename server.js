var express = require('express');
const bodyParser = require("body-parser");

// Create an express server and a GraphQL endpoint
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const render = (req, res) => {
    //console.log("req",req)
    console.log("req.params.number",req.params.number)
    let content=""
    for(i=0;i<=req.params.number;i++){
        content=content+'<h1>number is '+i+'</h1>'
    }
    res.send({"list":content});
};

const data = (req, res) => {
    //console.log("req",req)
    console.log("req.params.number",req.params.number)
    res.send({"data":["a","b"]});
}; 

app.get('/html/:number', render);
app.get('/data', data);

app.listen(4000, () => console.log(' Server Now Running On localhost:4000'));