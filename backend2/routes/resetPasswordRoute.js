const express = require('express');
const { Register } = require('../db/registerModel'); 
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const resetPasswordRoute = express.Router();

resetPasswordRoute.post("/", async (req, res) => {
  const { email, oldPassword, newPassword, confirmPassword } = req.body;

  if (!email) {
    return res.status(400).send("Email is required.");
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).send("New passwords do not match.");
  }

  try {
    const user = await Register.findOne({
      where: { email: email },
      attributes: ['email', 'userName', 'registerId', 'password']
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).send("Old password is incorrect.");
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.send("Password updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while updating password.");
  }
});

module.exports = resetPasswordRoute;
