const connectDB = require("../../db/dbconnnect")

let GetSingleService = async (req, res) =>{
    try{
     let { slug } = req.params;
    let db = await connectDB();
    let collection = db.collection("services");
    let service = await collection.findOne({slug:slug});

    if(service){
        return res.status(200).send({
            success:true,
            message:"Service found",
            service
        });
    }
    }catch(e){
         return res.status(500).send({
            success:false,
            message:"Interal server error",
        });
    }
}

module.exports = {GetSingleService}