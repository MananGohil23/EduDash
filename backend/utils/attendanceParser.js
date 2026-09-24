const MONTHS = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec";

const DATE_PATTERN = new RegExp(`(${MONTHS})\\s+\\d{1,2},\\s+\\d{4}`);

// Course-code tokens that get glued onto course names in the attendance sheet,
// e.g. "PhysicsT- D2", "Health and WellnessP- D2-A", "LabU- D2-2".
const COURSE_CODE_PATTERN = /[TPU][- ]?\s?D\d(?:-\d)?(?:-?A)?/g;

const cleanSubject = (value) =>
  value
    .replace(COURSE_CODE_PATTERN, "")
    .replace(/\s+/g, " ")
    .trim();

const parseAttendanceText = (text) => {
  const attendanceMap = {};

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  const record = (subject, status) => {
    if (!subject) return;

    if (!attendanceMap[subject]) {
      attendanceMap[subject] = { present: 0, absent: 0, total: 0 };
    }

    attendanceMap[subject].total++;

    if (status === "P") {
      attendanceMap[subject].present++;
    } else {
      attendanceMap[subject].absent++;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const dateMatch = line.match(DATE_PATTERN);

    if (!dateMatch) continue;

    // The subject is normally before the date on the same line, but many PDFs
    // extract the course name on its own line directly above the date.
    let rawSubject = line.split(dateMatch[0])[0];

    if (!rawSubject.trim()) {
      for (let k = i - 1; k >= 0 && k >= i - 3; k--) {
        const previous = lines[k];

        if (/^\d+$/.test(previous)) continue; // serial number
        if (DATE_PATTERN.test(previous)) continue;

        rawSubject = previous;
        break;
      }
    }

    const subject = cleanSubject(rawSubject);

    if (!subject) continue;

    // Attendance status ("P"/"A") sits on one of the following lines.
    let status = null;

    for (let j = i + 1; j <= i + 4 && j < lines.length; j++) {
      if (lines[j] === "P" || lines[j] === "A") {
        status = lines[j];
        break;
      }
    }

    if (!status) continue;

    record(subject, status);
  }

  Object.keys(attendanceMap).forEach((subject) => {
    const data = attendanceMap[subject];

    data.percentage = Number(
      ((data.present / data.total) * 100).toFixed(2)
    );
  });

  return attendanceMap;
};

module.exports = parseAttendanceText;
