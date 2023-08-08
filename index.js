const express = require("express");
const userRouter = require("./routes/usersRoute");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcom to nodejs tour CRUD project",
    });
});

const _dbUrl = process.env.DATABASE;

mongoose.connect(_dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to db!");
});

app.use("/api/v1/tours", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});