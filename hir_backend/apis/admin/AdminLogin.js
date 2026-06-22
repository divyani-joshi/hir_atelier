
const connectDB = require("../../db/dbconnnect");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

const AdminLogin = async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection("users");

    const { email, password } = req.body;

    const admin = await collection.findOne({
      email,
      password,
      role: "admin",
    });

    if (!admin) {
      return res.status(401).send({
        success: false,
        message: "Invalid Admin Credentials",
      });
    }

    const payload = {
      id: admin._id,
      email: admin.email,
      role: admin.role,
    };

    const token = jwt.sign(payload, jwt_secret, {
      expiresIn: "1h",
    });

    res.status(200).send({
      success: true,
      message: "Admin Login Successful",
      token,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { AdminLogin };

