const connectDB = require("../../db/dbconnnect")

let AddBlog = async (req, res) =>{
    try{
        let db = await  connectDB();
    let collection = db.collection("blogs");
    let {title, slug, description, category, tags} = req.body;

    let image =req.file ? req.file.path : "";

    let insertblog = await collection.insertOne({title, slug, description, category, tags, image})
    if (insertblog.acknowledged){
         return res.status(201).send({success:true, message:"Blog added"})
    }
    }catch(e){
        return res.status(500).send({success: false, message:"Internal server error"})
    }

}

module.exports = {AddBlog}