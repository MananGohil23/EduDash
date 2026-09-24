const bcrypt = require('bcryptjs');

const User = require('../models/User');

const generateToken = require('../utils/generateToken');

const register = async (req, res) => {

  try {

    const { username, password , studentID, collegeName } = req.body

    const existingUser = await User.findOne({ username })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      username,
      password: hashedPassword,
      studentID,
      collegeName
    })

    res.status(201).json({
      token: generateToken(user._id),
      username: user.username,
      studentID: user.studentID,
      collegeName: user.collegeName
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message
    })
  }
}

const login = async (req, res) => {

  try {

    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({
        message: 'User not found'
      })
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    )

    if (!validPassword) {
      return res.status(400).json({
        message: 'Invalid password'
      })
    }

    const token = generateToken(user._id)

    res.json({ token, username: user.username, studentID: user.studentID, collegeName: user.collegeName });

  } catch (err) {

    res.status(500).json({
      message: err.message
    })
  }
}

const getMe = async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.json({
      username: user.username,
      studentID: user.studentID,
      collegeName: user.collegeName
    })

  } catch (err) {

    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  register,
  login,
  getMe
}