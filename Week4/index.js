const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");

const app = express();
const SERVER_PORT = 3001;
const DB_CONNECTION_STRING = "mongodb+srv://Avano:61W3HTIMDn7qB2HO@comp3133.wgdi2li.mongodb.net/lab4?appName=comp3133"

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/users", usersRoutes);

mongoose.connect(DB_CONNECTION_STRING)
    .then(() => {
        console.log("MongoDB Connected!");
        app.listen(SERVER_PORT, () => {
            console.log(`Server running at http://localhost:${SERVER_PORT}/`);
        });
    })
    .catch(err => console.log(err));
