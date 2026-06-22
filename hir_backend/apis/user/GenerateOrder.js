const Razorpay = require("razorpay");
const connectDB = require("../../db/dbconnnect");
const { ObjectId } = require("mongodb");

const razorpay = new Razorpay({
  key_id: process.env.VITE_RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

let GenerateOrder = async (req, res) => {
  try {
    const { booking_id } = req.body;

    if (!booking_id) {
      return res.status(400).send({
        success: false,
        message: "Booking ID is required",
      });
    }

    const db = await connectDB();

    const bookingCollection =
      db.collection("bookings");

    const booking =
      await bookingCollection.findOne({
        _id: ObjectId.createFromHexString(
          booking_id
        ),
      });

    if (!booking) {
      return res.status(404).send({
        success: false,
        message: "Booking not found",
      });
    }

    if (
      booking.payment_status === "Paid"
    ) {
      return res.status(400).send({
        success: false,
        message: "Booking already paid",
      });
    }

    const order =
      await razorpay.orders.create({
        amount:
          Number(booking.total_amount) *
          100,
        currency: "INR",
        receipt: `receipt_${booking_id}`,
      });

    return res.status(200).send({
      success: true,
      message: "Order generated",

      data: {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (e) {
    console.log(e);

    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { GenerateOrder };