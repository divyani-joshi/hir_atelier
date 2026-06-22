const connectDB = require("../../db/dbconnnect")

let GetSingleProduct = async (req, res) =>{
    try{
        let {slug} = req.params;
    let db = await connectDB();
    let collection = db.collection("products");
    let product = collection.findOne({slug:slug})

    if(product){
        return res.status(200).send({
            success:true,
            message:"Products Found",
            product
        });
    }
    }catch(e){
        return res.status(500).send({
            success:false,
            message:"Internal server error",
        });
    }
}

module.exports = {GetSingleProduct}