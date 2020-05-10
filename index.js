const express = require("express");
const app = express();

const courses = require('./router/courses');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/pug', function(req, res) {
    res.render("example", {
        name: "Vishal Lotlikar",
        url: "https://www.google.com",
        skills: ["NodeJS", "Angular", "Ruby"]
    });
})

function logInfo(req, res, next){
    console.log("Hello Vishal");
    next();
};

function addData(req, res, next){
    var person = {
        name: "Vishal Lotlikar",
        city: "Panjim"
    };

    req.person = person;
    next();
};

app.use(logInfo);
app.use(addData);

app.use('/user/:id([0-3]{1})', function (req, res, next){
    var name = ['Sandeep', 'Amit', 'Deepak', 'Aman'];
    req.name = name[req.params.id];
    next();
})

app.get('/user/:id([0-3]{1})', function (req, res) {
    res.send('Name: ' + req.name);
})

app.get('/person', function(req, res) {
    res.send("Name: " + req.person.name + ", City: " + req.person.city)
})

app.use('/courses', courses)

app.get('/', function(req, res) {
    res.send("Hello from express.")
})

app.get('/profile/:id', function(req, res) {
    res.send("Profile ID: " + req.params.id);
})

app.get('/:course_name/courses/:id', function(req, res) {
    res.send("Course Name: " + req.params.course_name + ", ID: " + req.params.id);
})

app.get('/message/:phone_number([0-9]{10})', function(req, res) {
    res.send("Message to " + req.params.phone_number);
})

app.get('*', function(req, res) {
    res.send("Page Not Found.");
})

app.listen(8000);   