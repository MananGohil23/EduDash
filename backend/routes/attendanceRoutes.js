const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  parseAttendance
} = require("../controllers/attendanceController");

router.post(
  "/upload",
  upload.single("attendanceFile"),
  parseAttendance
);

module.exports = router;