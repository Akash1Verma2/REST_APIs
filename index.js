const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apnacollege",
        content: "I love coding"
    },
    {
        username: "AkashVerma",
        content: "hard work is impoert to achieve success"
    },
    {
        username: "MohitVerma",
        content: "I got selected for my 1st intership"
    },

]

app.get("/", (req, res) => {
    res.send("serving working well!");
})

app.listen(port, () => {
    console.log("Listening to port : 8080");
})