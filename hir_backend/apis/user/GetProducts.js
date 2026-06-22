const connectDB = require("../../db/dbconnnect")

let GetProducts = async (req, res) =>{
   try{
     let db = await connectDB();
    let collection = db.collection("products");
    let products = await collection.find({status:"Active"}).toArray();

    if(products){
        return res.status(200).send({
            success: true,
            message:"Products Found",
            products
        });
    }
   }catch(e){
        return res.status(500).send({
            success: false,
            message:"Internal server error",
        });
   }
}

module.exports = { GetProducts}