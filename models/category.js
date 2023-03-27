const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    {timestamps: true}          // It is used to collect the time when user book the product 
);

module.exports= mongoose.model("Category", categorySchema)