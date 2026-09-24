require("dotenv").config();
const express = require('express')

const cors = require('cors')

const attendanceRoutes = require("./routes/attendanceRoutes");

const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')

const assignmentRoutes = require("./routes/assignmentRoutes");

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

const startServer = async () => {
  try {

    await connectDB()

  } catch (err) {

    console.error("Failed to connect to MongoDB:", err.message)

    process.exit(1)
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()
