const connectDB = require("../../db/dbconnnect")
const { ObjectId } = require("mongodb");


let GetProfile = async(req,res)=>{

try{

let db = await connectDB();

let profileCollection = db.collection("users");
let bookingCollection = db.collection("bookings");


let profile = await profileCollection.findOne(
{
 _id:new ObjectId(req.user.id)
},
{
 projection:{
  password:0
 }
}
);


let history = await bookingCollection.find({
 user_id:req.user.id
}).toArray();


return res.send({
 success:true,
 profile,
 history
});


}catch(e){

return res.status(500).send({
 success:false,
 message:e.message
});

}

}


module.exports = {GetProfile}