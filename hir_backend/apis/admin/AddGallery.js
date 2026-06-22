const connectDB = require("../../db/dbconnnect")


let AddGallery = async (req,res)=>{

    try{

        let db = await connectDB();

        let collection = db.collection("gallery");


        let {
            title,
            subtitle,
            service
        } = req.body;


        let images = req.files 
        ? req.files.map((file)=>file.path)
        : [];


        let insertgallery = await collection.insertOne({
            title,
            subtitle,
            service,
            images
        });


        if(insertgallery.acknowledged){

            return res.status(201).send({
                success:true,
                message:"Gallery added"
            })

        }


    }catch(e){

        return res.status(500).send({
            success:false,
            message:"Internal server error",
            error:e.message
        })

    }

}


module.exports = {AddGallery}