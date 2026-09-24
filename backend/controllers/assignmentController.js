const mongoose = require("mongoose");

const Assignment = require("../models/Assignment");

const getAssignments = async (req, res) => {
    try {

        const assignments =
            await Assignment.find({
                userId: req.user.id
            });

        res.json(assignments);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

const createAssignment = async (req, res) => {

    try {

        const {
            title,
            subject,
            description,
            dueDate
        } = req.body;

        const assignment =
            await Assignment.create({
                title,
                subject,
                description,
                dueDate,
                userId: req.user.id
            });

        res.status(201).json(assignment);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

const markSubmitted = async (req, res) => {

    try {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(404).json({
                message: "Assignment not found"
            });
        }

        const assignment =
            await Assignment.findOne({
                _id: req.params.id,
                userId: req.user.id
            });

        if (!assignment) {
            return res.status(404).json({
                message: "Assignment not found"
            });
        }

        assignment.status = "Submitted";

        await assignment.save();

        res.json(assignment);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAssignments,
    createAssignment,
    markSubmitted
};