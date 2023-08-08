const Tour = require("../models/tourModel.js");

exports.getAllTours = async(req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            requestat: req.requestTime,
            result: tours.length,
            data: {
                tours
            }
        });

    } catch (e) {
        res.status(404).json({
            status: "Fail",
            message: e
        });
    }
}

exports.createNewTour = async(req, res) => {

    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: "success",
            data: newTour
        });
    } catch (e) {
        res.status(401).json({
            status: "fail",
            message: e
        });
    }

}

exports.getOneTour = async(req, res) => {

    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: tour
        });
    } catch (e) {
        res.status(401).json({
            status: "fail",
            message: e
        });
    }

}

exports.updateOneTour = async(req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            data: tour
        });
    } catch (e) {
        res.status(404).json({
            status: "fail",
            data: e
        });
    }
}

exports.deleteOneTour = async(req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",
            data: null,
        });
    } catch (e) {
        res.status(404).json({
            status: "fail",
            data: e
        });
    }
}