const connectDB = require("../../db/dbconnnect");

let ContactUs = async (req, res) => {
  try {

    let db = await connectDB();

    let collection = db.collection("contacts");

    let {
      full_name,
      email,
      mobile_no,
      service_name,
      subject,
      message
    } = req.body;

    if (
      !full_name ||
      !email ||
      !mobile_no ||
      !service_name ||
      !subject ||
      !message
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required"
      });
    }

    let contact = await collection.insertOne({
      user_id: req.user.id,
      full_name,
      email,
      mobile_no,
      service_name,
      subject,
      message,
      status: "Pending",
      created_at: new Date(),
      updated_at: new Date()
    });

    return res.status(201).send({
      success: true,
      message: "Message sent successfully",
      contact_id: contact.insertedId
    });

  } catch (e) {

    console.log(e);

    return res.status(500).send({
      success: false,
      message: "Internal server error"
    });

  }
};

module.exports = {
  ContactUs
};