const connectDB = require("../../db/dbconnnect")

let GetBooking = async (req, res)=>{
   try{
     let db = await connectDB();
    let collection = db.collection("bookings");
    let booking = await collection.find({}).toArray();

    if(booking){
         return res.status(200).send({
            success: true,
            message:"Booking Found",
            booking
    });  
}
   }catch(e){
    return res.status(500).send({
            success: false,
            message:"Internal server error",
   })
}
}

module.exports = {GetBooking}
