const connectDB = require("../../db/dbconnnect")

let GetPortfolio = async (req, res) =>{
    try{
        let db = await connectDB();
    let collection = db.collection("portfolio");
    let portfolio = await collection.find({status:"Active"}).toArray();

    if(portfolio){
        return res.status(200).send({
            success: true,
            message:"Portfolio Found",
            portfolio
        })
    }
    }catch(e){
        return res.status(500).send({
            success: false,
            message:"Internal server error",
            
        })
    }
}

module.exports = {GetPortfolio}