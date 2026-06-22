const connectDB = require("../../db/dbconnnect")

let GetFeedbacks = async (req, res) => {
   try{
     let db = await connectDB();
    let collection = db.collection("feedbacks");
    let feedbacks = await collection.find({status:"Active"}).toArray();

    if(feedbacks){
        return res.status(200).send({
            success: true,
            message:"Feedbacks Found",
            feedbacks 
        });
    }
   }catch(e){
    return res.status(500).send({
            success: false,
            message:"Internal server error", 
        });
   }
}

module.exports = {GetFeedbacks}