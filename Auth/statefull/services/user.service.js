import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";

export const registerUser = async (username, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.find({ email });

    if (!existingUser) {
      throw new Error("User Already Exists");
    }

    const user = new User({ username, email, password: hashedPassword });

    return await user.save();
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid Username or Password");
    }

    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = async () => {};
