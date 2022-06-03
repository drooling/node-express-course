const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("<center><h1>hey sexy</h1><center>")
})

mockData = [
    {name: "Mark"},
    {name: "Jill"}
]

app.get("/users", function (req, res) {
    res.json({
        success: true,
        message: "Successfully fetched users, nice !",
        users: mockData
    })
})

app.get("/users/:id", function (req, res) {
    res.json({
        success: true,
        message: "fetched user",
        user: req.params.id
    })
})

app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUser = "billythekid";
    const mockPassword = "superSecret!";

    if (username == mockUser && password == mockPassword) {
        res.json({
            success: true,
            message: "Login data matched",
            token: "encrypted token"
        })
    } else {
        res.json({
            success: false,
            message: "invalid credentials"
        })
    }
})

app.listen(80, function () {
    console.log("Server running ( http://localhost:80/ )");
})