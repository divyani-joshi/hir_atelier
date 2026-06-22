const crypto = require("crypto");
const connectDB = require("../../db/dbconnnect");
const { ObjectId } = require("mongodb");

require("dotenv").config();

let VerifyPayment = async (req, res) => {
  try {
    const {
      booking_id,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    console.log("========== PAYMENT VERIFY ==========");
    console.log("Booking ID:", booking_id);
    console.log("Order ID:", razorpay_order_id);
    console.log("Payment ID:", razorpay_payment_id);
    console.log("Signature:", razorpay_signature);
    console.log(
      "Secret Exists:",
      !!process.env.RAZORPAY_KEY_SECRET
    );

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    console.log(
      "Generated Signature:",
      generatedSignature
    );

    if (
      generatedSignature !== razorpay_signature
    ) {
      return res.status(400).send({
        success: false,
        message: "Payment verification failed",
      });
    }

    const db = await connectDB();

    const bookingCollection =
      db.collection("bookings");

    const result =
      await bookingCollection.updateOne(
        {
          _id: new ObjectId(booking_id),
        },
        {
          $set: {
            payment_status: "Paid",
            booking_status: "Booked",
            razorpay_order_id,
            razorpay_payment_id,
            updated_at: new Date(),
          },
        }
      );

    console.log("Update Result:", result);

    return res.status(200).send({
      success: true,
      message: "Payment successful",
    });
  } catch (e) {
    console.log(
      "VERIFY PAYMENT ERROR:",
      e
    );

    return res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { VerifyPayment };