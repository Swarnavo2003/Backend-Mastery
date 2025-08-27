export const requireAuth = (req, res, next) => {
  try {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
      });
    } else {
      req.userId = req.session.userId;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
