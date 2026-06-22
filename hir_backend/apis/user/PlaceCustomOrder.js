const connectDB =require("../../db/dbconnnect");
const { ObjectId } =require("mongodb");

let CustomOrder =async (req, res) => {
   try {
      let db =await connectDB();
      let orderCollection =db.collection("custom_orders");
      let serviceCollection =db.collection("services");
      let categoryCollection = db.collection("categories");
      let { service_id, description} = req.body;

      if (!service_id || !description) {
         return res.status(400).send({
            success: false,
            message:
            "service_id and description required"
         });
      }
      let service =await serviceCollection.findOne({_id: new ObjectId(service_id) });

      if (!service) {
         return res.status(404).send({
            success: false,
            message: "Service not found"
         });
      }
      let category =  await categoryCollection.findOne({ _id: new ObjectId(service.category_id)  });
      let image =req.file ? req.file.path : "";
      let orderData = {
         user_id: req.user.id,
         service_id:service._id,
         service_name:service.title,
         category_id: category._id,
         category_name: category.name,
         description,
         inspiration_image: image,
         status: "Pending",
         createdAt:new Date(),
         updatedAt:new Date()
      };

      let insertOrder = await orderCollection.insertOne(orderData);
      return res.status(201).send({
         success: true,
         message: "Custom order placed successfully",
         insertedId: insertOrder.insertedId,
         order: orderData
      });
   } catch (e) {
      console.log(e);
      return res.status(500).send({
         success: false,
         message: "Internal server error"
      });
   }
};

module.exports = { CustomOrder };