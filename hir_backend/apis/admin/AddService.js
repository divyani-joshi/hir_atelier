const connectDB = require("../../db/dbconnnect")

let AddService = async (req, res) =>{
   try{
     let db = await connectDB();
    let collection = db.collection("services")
    let {title, slug,category_name,category_id,description,price} = req.body;

     let image =req.file ? req.file.path : "";

     let insertcategory = await collection.insertOne({title, slug,category_name,description,price, image});
     if(insertcategory.acknowledged){
            return res.status(201).send({success:true, message:"Service added"})
        }
     } catch(e){
        return res.status(201).send({success:true, message:"Internal server error."})
    }
}

module.exports = {AddService}