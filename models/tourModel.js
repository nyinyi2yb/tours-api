const { Schema, default: mongoose } = require("mongoose");

const tourSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Tour name must not be empty!"]
    },
    price: Number,
    rating: Number
});

const tourModel = mongoose.model("Tour", tourSchema);

module.exports = tourModel;