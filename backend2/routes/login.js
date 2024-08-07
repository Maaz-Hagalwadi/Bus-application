
const express = require('express');
const { Login } = require('../db/loginModel'); 
const { Register } = require('../db/registerModel');
const bcrypt = require('bcrypt');

const loginRoute = express.Router();

loginRoute.get("/", (req, res) => {
  res.send("login page");
});

loginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await Register.findOne({
      where: { email },
      attributes: ['registerId', 'userName', 'password', 'email', 'status', 'role','phoneNumber','age','gender']
    });

    if (!checkUser) {
      await Login.create({
        email,
        password,
      });
      return res.status(403).send('User not found'); 
    }

  
    if (checkUser.status !== 'active') {
        await Login.create({
        email,
        password,
      });
      return res.status(403).send('Account not yet activated. Please verify your OTP.');
    }

    
    const passwordMatch = await bcrypt.compare(password, checkUser.password);

    if (!passwordMatch) {
      await Login.create({
        email,
        password,
      });
      return res.status(401).send('Invalid password'); 
    }

  
    await Login.create({
      email,
      password,
    });

   
    res.json({
      userName: checkUser.userName,
      email: checkUser.email,
      role: checkUser.role,
      phoneNumber: checkUser.phoneNumber,
      age: checkUser.age,
      gender: checkUser.gender
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error while user login");
  }
});

module.exports = loginRoute;
