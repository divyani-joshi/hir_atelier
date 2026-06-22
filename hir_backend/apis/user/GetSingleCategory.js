const connectDB = require("../../db/dbconnnect")


let GetSingleCategory = async (req, res )=>{
   try{
    let { slug } = req.params;
    let db = await connectDB();
    let collection = db.collection("categories")
    let category = await collection.findOne({slug: slug})

     if(!category) {
            return res.status(400).send({
                success: false,
                message: "Services details not Found",
                
            });
        }
        
        
        return res.status(200).send({
            success: true,
            message: "Category Found",
            category
        });
   }catch (e) {
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
        });
    }
  
};

module.exports = {GetSingleCategory}