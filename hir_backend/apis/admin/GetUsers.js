const connectDB = require("../../db/dbconnnect")

let GetUser = async (req, res ) =>{
   try{
     let db = await connectDB();
    let collection = db.collection("users");
    let users = await collection.find({status : "Active"}).toArray(); 

    if(users){
        return res.status(200).send({
            success: true,
            message:"Users Found",
            users
        });  
    }
   }catch(e){
    return res.status(500).send({
            success: false,
            message:"Internal server error"
        }); 
   }
}

module.exports = {GetUser}