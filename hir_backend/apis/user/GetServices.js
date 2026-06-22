const connectDB = require("../../db/dbconnnect")
const { ObjectId } = require("mongodb");

let GetServices = async (req, res) =>{
    try{
        let db = await connectDB();
    let collection = db.collection("services");
    let {category_id} = req.params
    let query = { status: "Active" };

    if (category_id) {
      query.category_id = new ObjectId(category_id);
    }

    const services = await collection.find(query).toArray();

    return res.status(200).send({
        success: true,
        message:"Service Found",
        services
    });
    }catch(e){
        return res.status(500).send({
        success: false,
        message:"Inernal server error",
    })
}
}

module.exports = {GetServices}