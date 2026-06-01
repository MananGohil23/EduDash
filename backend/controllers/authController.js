const bcrypt = require('bcryptjs');

const User = require('../models/User');

const  generateToken = require('../utils/generateToken');

const jwt = require('jsonwebtoken');

const register = async (req, res) => {

  try {

    const { username, password } = req.body

    const existingUser = await User.findOne({ username })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      username,
      password: hashedPassword
    })

    res.status(201).json({
      token: generateToken(user._id),
      username: user.username
    });

  } catch (err) {

    console.log(err);
    alert(err.response.data.message);

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

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    )

    res.json({ token, username: user.username });

  } catch (err) {

    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  register,
  login
}