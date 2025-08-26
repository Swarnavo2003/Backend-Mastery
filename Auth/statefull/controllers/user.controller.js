import { loginUser, registerUser } from "../services/user.service.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await registerUser(username, email, password);

    return res.status(201).json({
      message: "User Created Successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);

    req.session.userId = user._id;

    return res.status(200).json({
      message: `Welcome Back ${user.username}`,
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
