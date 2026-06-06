require("dotenv").config();
const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv')

const attendanceRoutes = require("./routes/attendanceRoutes");

const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')

const assignmentRoutes = require("./routes/assignmentRoutes");

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use("/api/attendance", attendanceRoutes);

app.use("/api/assignments", assignmentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend running' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
