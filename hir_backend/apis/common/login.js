const connectDB = require("../../db/dbconnnect")
const jwt = require("jsonwebtoken");
require("dotenv").config();
let jwt_secret = process.env.JWT_SECRET;

let Login = async (req, res) =>{
    try{
        let db = await connectDB();
    let collection = db.collection("users");
    let {email, password} = req.body;
    let user = await collection.findOne({email, password})
    if (!user) {
    return res.status(400).send({
        success: false,
        message: "Invalid Email or Password"
    });
}
    let newUser = {
        id: user._id,
        email:user.email,
        mobile_no:user.mobile_no,
        role:user.role,
        status:user.status
    } 

    let token = jwt.sign(newUser, jwt_secret, {expiresIn: '1h'})
    if(user){
        res.status(200).send({
            success:true,
            message:"Login Successful",
            token
        })
    } else{
            return res.status(400).send({status:false, message:"Invalid Details"})
    }
    }catch(e){
         return res.status(500).send({success:false, message:"Internal server error"})
    }
}

module.exports = {Login}