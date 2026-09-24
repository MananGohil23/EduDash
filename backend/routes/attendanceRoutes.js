const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const protect = require("../middleware/authMiddleware");

const {
  parseAttendance
} = require("../controllers/attendanceController");

router.post(
  "/upload",
  protect,
  (req, res, next) => {
    upload.single("attendanceFile")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      next();
    });
  },
  parseAttendance
);

module.exports = router;