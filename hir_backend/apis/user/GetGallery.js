const connectDB = require("../../db/dbconnnect")


let GetGallery = async(req,res)=>{

    try{

        let db = await connectDB();

        let collection = db.collection("gallery");


        let {service} = req.params;


        let gallery = await collection.findOne({
            service: service
        });


        if(!gallery){

            return res.status(404).send({
                success:false,
                message:"Gallery not found"
            })

        }


        return res.status(200).send({
            success:true,
            data:gallery
        })


    }catch(e){

        return res.status(500).send({
            success:false,
            message:"Internal server error",
            error:e.message
        })

    }

}


module.exports = {GetGallery}