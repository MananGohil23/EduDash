const parseAttendanceText = (text) => {

    const attendanceMap = {};

    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== "");

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i];

        const dateMatch = line.match(
            /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}/
        );

        if (!dateMatch) continue;

        let subject = line.split(dateMatch[0])[0];

        subject = subject
            .replace(/T- D2/g, "")
            .replace(/P- D2-2/g, "")
            .replace(/P D2-A/g, "")
            .replace(/T D2-A/g, "")
            .replace(/T D2/g, "")
            .replace(/U- D2-2/g, "")
            .replace(/U D2-2/g, "")
            .trim();

        let status = null;

        for (let j = i + 1; j <= i + 4 && j < lines.length; j++) {

            if (
                lines[j] === "P" ||
                lines[j] === "A"
            ) {

                status = lines[j];
                break;
            }
        }

        if (!status) continue;

        if (!attendanceMap[subject]) {

            attendanceMap[subject] = {

                present: 0,
                absent: 0,
                total: 0
            };
        }

        attendanceMap[subject].total++;

        if (status === "P") {
            attendanceMap[subject].present++;
        }

        if (status === "A") {
            attendanceMap[subject].absent++;
        }
    }

    Object.keys(attendanceMap).forEach(subject => {

        const data = attendanceMap[subject];

        data.percentage = Number(
            (
                data.present /
                data.total *
                100
            ).toFixed(2)
        );
    });

    return attendanceMap;
};

module.exports = parseAttendanceText;