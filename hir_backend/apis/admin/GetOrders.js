const connectDB = require("../../db/dbconnnect")

let GetOrder = async (req, res)=>{
   try{
     let db = await connectDB();
    let collection = db.collection("custom_orders");
    let orders = await collection.find({}).toArray();

    if(orders){
         return res.status(200).send({
            success: true,
            message:"ordres Found",
            orders
    });  
}
   }catch(e){
    return res.status(500).send({
            success: false,
            message:"Internal server error",
   })
}
}

module.exports = {GetOrder}
