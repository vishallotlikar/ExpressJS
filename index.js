const express = require("express");
const app = express();

app.use('/static', express.static('./views/file')); // import express static files
// app.use(express.static('./views/file')); // import express static files

const courses = require('./router/courses');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/pug', function (req, res) {
    res.render("example", {
        name: "Vishal Lotlikar",
        url: "https://www.google.com",
        skills: ["NodeJS", "Angular", "Ruby"]
    });
})

app.get('/pug-page', function (req, res) {
    var person = {
        name: "Vishal Lotlikar",
        city: "Panjim",
    }
    res.render("page", {
        data: person
    });
})

function logInfo(req, res, next) {
    console.log("Hello Vishal");
    next(); // request response cycle will never end if next(); is not added.
};

function addData(req, res, next) {
    var person = {
        name: "Vishal Lotlikar",
        city: "Panjim"
    };

    req.person = person;
    next(); // request response cycle will never end if next(); is not added.
};

app.use(logInfo);
app.use(addData);

app.use('/user/:id([0-3]{1})', function (req, res, next) {
    var name = ['Sandeep', 'Amit', 'Deepak', 'Aman'];
    req.name = name[req.params.id];
    next(); // request response cycle will never end if next(); is not added.
})

app.get('/user/:id([0-3]{1})', function (req, res) {
    res.send('Name: ' + req.name);
})

app.get('/person', function (req, res) {
    res.send("Name: " + req.person.name + ", City: " + req.person.city)
})

app.use('/courses', courses)

app.get('/', function (req, res) {
    res.send("Hello from express.")
})

app.get('/profile/:id', function (req, res) {
    res.send("Profile ID: " + req.params.id);
})

app.get('/:course_name/courses/:id', function (req, res) {
    res.send("Course Name: " + req.params.course_name + ", ID: " + req.params.id);
})

app.get('/message/:phone_number([0-9]{10})', function (req, res) {
    res.send("Message to " + req.params.phone_number);
})

app.get('/static_file', function(req, res){
    res.render('static_file');
})

app.get('*', function (req, res) {
    res.send("Page Not Found.");
})

app.listen(8000);   