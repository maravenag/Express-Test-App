var express = require('express');

//body parser is a middleware used to get POST info
//POST info must be send into body in form-urlencoded

var bodyParser = require('body-parser')
var https = require('https');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var data = [
    { name: "Matias", age: "25" },
    { name: "Nicolás", age: "15" },
    { name: "Daniel", age: "27" },
    { name: "Cristobal", age: "18" },
    { name: "Felipe", age: "14" },
    { name: "Tomás", age: "30" },
]

app.get('/users', function (req, res) {
    res.send(JSON.stringify(data));
});

app.get('/users/:username', function (req, res) {
    //params pass with :paramname
    var username = req.params.username;
    user = filterUser(data, username);
    res.send(JSON.stringify(user));
})

app.post('/users/new/user/', function (req, res) {
    data.push({ name: req.body.name, age: req.body.age });
    res.send("ok");
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

var filterUser = function (data, name) {
    var result = data.filter(function (d) {
        return d.name == name;
    })
    return result;
}