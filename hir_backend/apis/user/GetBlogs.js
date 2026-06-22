const connectDB = require("../../db/dbconnnect")

let GetBlogs = async (req, res) => {
   try{
     let db = await connectDB();
    let collection = db.collection("blogs");
    let blogs = await collection.find({status:"Active"}).toArray();

    if(blogs){
       return res.status(200).send({
            success: true,
            message:"Blogs Found",
            blogs 
        });
    }
   }catch(e){
    return res.status(500).send({
            success: false,
            message:"Internal server error", 
        });
   }
}

module.exports = {GetBlogs}
