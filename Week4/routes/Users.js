const express = require("express")
const UsersModel = require("../models/users")
const routes = express.Router()

routes.post("/create", async (req, res) => {
    try {
        const newUser = new UsersModel(req.body);
        const savedUser = await newUser.save();

        return res.status(201).json({
            status: true,
            message: "User created successfully",
            user: savedUser
        });

    } catch (err) {

        if (err.name === "ValidationError") {
            return res.status(400).json({
                status: false,
                message: "Validation Error",
                errors: err.errors
            });
        }

        return res.status(500).json({
            status: false,
            message: "Server Error",
            error: err.message
        });
    }
});

module.exports = routes