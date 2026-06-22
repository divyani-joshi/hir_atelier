const connectDB = require("../../db/dbconnnect")

let GetCategories = async (req, res) =>{
    try{
        let db = await connectDB();
        let collection = db.collection("categories");
        let categories = await collection.find({status:"Active"}).toArray();

            return res.status(200).send({
                success:true,
                message : "categories Found",
                categories
            });
        
    }catch(e){
        return res.status(500).send({
            success:false,
            message:"Internal server error"
        });
    }
}

module.exports = {GetCategories}