const connectDB = require("../../db/dbconnnect");

let AddFeedback = async (req, res) => {
  try {
    const { name, email, rating, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: "Name and message are required",
      });
    }

    const db = await connectDB();

    const feedbackCollection = db.collection("feedbacks");

    const result = await feedbackCollection.insertOne({
      name,
      email,
      rating,
      message,
      createdAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { AddFeedback };