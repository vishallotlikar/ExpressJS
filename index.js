const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send("Hello from express.")
})

app.listen(8000);