const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    var out = `<h2>Welcome to Courses Section.</h2>`;
    out += `<a href="/courses">Courses Index Page.</a><br>`;
    out += `<a href="/courses/android_tutorial">Android Tutorial.</a><br>`;
    out += `<a href="/courses/expressjs_tutorial">ExpressJS Tutorial.</a><br>`;
    out += `<a href="/courses/mongodb_tutorial">MongoDB Tutorial.</a><br>`;
    res.send(out);
});

router.get('/android_tutorial', function(req, res) {
    var out = `<h2>Welcome to Android Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page.</a><br>`;
    out += `<a href="/courses/android_tutorial">Android Tutorial.</a><br>`;
    out += `<a href="/courses/expressjs_tutorial">ExpressJS Tutorial.</a><br>`;
    out += `<a href="/courses/mongodb_tutorial">MongoDB Tutorial.</a><br>`;
    res.send(out);
});

router.get('/expressjs_tutorial', function(req, res) {
    var out = `<h2>Welcome to ExpressJS Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page.</a><br>`;
    out += `<a href="/courses/android_tutorial">Android Tutorial.</a><br>`;
    out += `<a href="/courses/expressjs_tutorial">ExpressJS Tutorial.</a><br>`;
    out += `<a href="/courses/mongodb_tutorial">MongoDB Tutorial.</a><br>`;
    res.send(out);
});

router.get('/mongodb_tutorial', function(req, res) {
    var out = `<h2>Welcome to MongoDB Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page.</a><br>`;
    out += `<a href="/courses/android_tutorial">Android Tutorial.</a><br>`;
    out += `<a href="/courses/expressjs_tutorial">ExpressJS Tutorial.</a><br>`;
    out += `<a href="/courses/mongodb_tutorial">MongoDB Tutorial.</a><br>`;
    res.send(out);
});

module.exports = router;