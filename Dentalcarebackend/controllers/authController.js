const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // HARDCODED ADMIN
    if (
      email !== "admin@gmail.com" ||
      password !== "123456"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        email: "admin@gmail.com",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        name: "Admin",
        email: "admin@gmail.com",
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logoutAdmin = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};