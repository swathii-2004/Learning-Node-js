const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/name", (req, res) => {
    res.send("my name is sonu")
})

app.get("/age", (req, res) => {
    res.send("my age is 21")
})
app.listen(3000, () => {
    console.log("server is running on port 3000");
})
//this the comment for kitty

