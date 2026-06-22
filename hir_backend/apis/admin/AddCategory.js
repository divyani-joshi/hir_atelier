const connectDB = require("../../db/dbconnnect")

let AddCategory = async (req, res) =>{
   try{
     let db = await connectDB();
    let collection = db.collection("categories")
    let {name, slug,} = req.body;

     let image =req.file ? req.file.path : "";

     let insertcategory = await collection.insertOne({name, slug, image});
     if(insertcategory.acknowledged){
            return res.status(201).send({success:true, message:"category added"})
        }
     } catch(e){
        return res.status(201).send({success:true, message:"Internal server error."})
    }
}

module.exports = {AddCategory}