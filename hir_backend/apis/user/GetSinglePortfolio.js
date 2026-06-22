const connectDB = require("../../db/dbconnnect")
const { ObjectId } = require("mongodb");

let GetSeinglePortfolio = async (req,res) =>{
    try{
        let { id } = req.params
    let db = await connectDB();
    let collection = db.collection("portfolio")
    let portfolio = await collection.findOne({_id: new ObjectId(id) });

    if(portfolio){
        res.status(200).send({
            success: true,
            message: "Portfolio Found",
            portfolio
        });
    }
    }catch(e){
         res.status(500).send({
            success: false,
            message: "Internal server error",
            
        });
    }
}

module.exports = { GetSeinglePortfolio }