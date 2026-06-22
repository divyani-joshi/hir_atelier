const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbconnnect");

let UpdateGallery = async (req, res) => {
  try {
    const db = await connectDB();

    const collection = db.collection("gallery");

    const images = req.files.map(file => file.path);

    const result = await collection.updateOne(
      {
        _id: new ObjectId(req.params.id)
      },
      {
        $set: {
          images
        }
      }
    );

    return res.status(200).send({
      success: true,
      message: "Gallery updated successfully"
    });

  } catch (e) {
    return res.status(500).send({
      success: false,
      message: e.message
    });
  }
};

module.exports = {UpdateGallery}