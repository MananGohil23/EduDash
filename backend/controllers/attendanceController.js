const fs = require("fs");
const pdf = require("pdf-parse");

const parseAttendanceText = require("../utils/attendanceParser");

const parseAttendance = async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }

    console.log("1- File received");

    const buffer = fs.readFileSync(req.file.path);

    console.log("2- File read into buffer");

    const data = await pdf(buffer);

    console.log("3- PDF parsed, text extracted");

    const attendanceData = parseAttendanceText(data.text);

    console.log("4- Attendance data parsed");

    res.json(attendanceData);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message
    });

  } finally {

    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.log(err);
      });
    }
  }
};

module.exports = {
  parseAttendance
};