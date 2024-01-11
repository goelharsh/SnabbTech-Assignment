const bcrypt = require("bcryptjs")
const userModel = require("../models/userModels")



exports.resetPassword = async (req, res) => {
    try {
      const { password, confirmPassword, token } = req.body
  
      if (confirmPassword !== password) {
        return res.json({
          success: false,
          message: "Password and Confirm Password Does not Match",
        })
      }
      const userDetails = await userModel.findOne({ token: token })
      if (!userDetails) {
        return res.json({
          success: false,
          message: "Token is Invalid",
        })
      }
      const encryptedPassword = await bcrypt.hash(password, 10)
      await userModel.findOneAndUpdate(
        { token: token },
        { password: encryptedPassword },
        { new: true }
      )
      res.json({
        success: true,
        message: `Password Reset Successful`,
      })
    } catch (error) {
      return res.json({
        error: error.message,
        success: false,
        message: `Some Error in Updating the Password`,
      })
    }
  }