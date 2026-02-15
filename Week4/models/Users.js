const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    city: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, "City can only have alphabets and spaces"]
    },
    url: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, "URL must start with http or https"]
    },
    zipcode: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, "Zip code must be in format 12345-6789"]
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be in format 1-123-456-7890"]
    }
})

module.exports = mongoose.model("User", userSchema)