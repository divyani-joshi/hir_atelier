const connectDB = require("../../db/dbconnnect")

const Signup = async (req, res) => {
    try{
        let db = await connectDB();
        let collection = db.collection("users");
        let{name,email,password,mobile_no,city} = req.body
        
         if(!name || !email || !password || !mobile_no || !city){
            return res.status(400).send({success:false, message:"All Fields are required"})
        }

        let userExists = await collection.findOne({$or: [{email}, {mobile_no}]})
        console.log(userExists);
          if (userExists) {
            return res.status(400).send({status:false, message:"user already exists"})
          }
        
          let user = {
            name,
            email,
            password,
            mobile_no,
            city,
            profile_image:"",
            wishlist:[],
            role:"User",
            status:"Active",
            created_at:new Date()
          }

          let insertUser = await collection.insertOne(user);

          if(insertUser.acknowledged){
            return res.status(201).send({
                success:true,
                message:"Signup Successful"
            })
          }
    }catch(e){
        console.log(e);
        return res.status(500).send({success: false, message:"Internal Server error"});
    }
}

module.exports = {Signup}
