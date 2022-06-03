const express = require('express');
const app = express();

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

app.listen(80, function () {
    console.log("Server running");
})