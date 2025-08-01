//to register a user
//login
//logout
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const generateToken = (getId) => {
  return jwt.sign({ getId }, "DEFAULT_SECRET_KEY", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
const registerUser = async (req, res, next) => {
  const { email, name, password } = req.body;
  const { error } = registerSchema.validate({ name, email, password });
  if (error) {
    return res.status(400).json({
      success: "false",
      message: error.details[0].message,
    });
  }
  try {
    const isUserEmailAlreadyExists = await User.findOne({ email });
    if (isUserEmailAlreadyExists) {
      return res.status(400).json({
        success: "false",
        message: "User with this email already exists",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const newlyCreateUser = await User.create({
        name,
        email,
        password: hashPassword,
      });
      if (newlyCreateUser) {
        const token = generateToken(newlyCreateUser._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
      }
      res.status(201).json({
        success: "true",
        message: "User registered successfully",
        userData: {
          name: newlyCreateUser.name,
          email: newlyCreateUser.email,
          _id: newlyCreateUser._id,
        },
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: "false",
      message: "Internal server error",
    });
  }
};

const loginUser = async (req, res, next) => {
  const { password, email } = await req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({
      success: "false",
      message: error.details[0].message,
    });
  }
  try {
    const getUser = await User.findOne({ email });

    if (!getUser) {
      return res.status(400).json({
        success: "false",
        message: "User with this email does not exists",
      });
    }
    const checkAuth = await bcrypt.compare(password, getUser.password);
    if (!checkAuth) {
      return res.json({
        success: "false",
        message: "Invalid credentials",
      });
    }
    const token = generateToken(getUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      success: "true",
      message: "User logged in successfully",
    });

    next();
  } catch (error) {
    return res.status(500).json({
      success: "false",
      message: "Internal server error",
    });
  }
};

const logout=async (req,res)=>{
    res.cookie('token',"",{
        withCredentials:true,
        httpOnly:false
    })
    return res.status(200).json({
        success:true,
        message:'Logout Successfully'
    })
}

module.exports = {
  registerUser,
  loginUser,
  logout
};
