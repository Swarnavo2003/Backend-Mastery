import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"] || req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized : Invalid or missing",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.id = decoded.id;
    next();
  } catch (error) {
    console.log("Error in auth middleware", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
