const express = require("express");
const userRouter = express.Router();

const userController = require("../controller/userController.js");

userRouter.route("/")
    .get(userController.getAllTours)
    .post(userController.createNewTour);

userRouter.route("/:id")
    .get(userController.getOneTour)
    .post(userController.updateOneTour)
    .delete(userController.deleteOneTour);

module.exports = userRouter;