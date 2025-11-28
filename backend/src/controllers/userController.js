import httpStatus from "http-status";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();

    return res.status(httpStatus.OK).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });
  } catch (e) {
    console.error("Login Error:", e);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: e.message });
  }
};

const register = async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(httpStatus.CREATED)
      .json({ message: "User registered successfully" });
  } catch (e) {
    console.error("Register Error:", e);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong", error: e.message });
  }
};

export { login, register };
