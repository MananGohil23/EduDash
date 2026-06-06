const express = require("express");

const router = express.Router();

const {
    getAssignments,
    createAssignment,
    markSubmitted
} = require("../controllers/assignmentController");

const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAssignments);

router.post("/", protect, createAssignment);

router.put(
    "/:id",
    protect,
    markSubmitted
);

module.exports = router;