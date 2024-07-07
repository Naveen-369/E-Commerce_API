//Creating the mongoose instance
const mongoose=require('mongoose')

//Creating the schema for the Order
const OrderSchema=new mongoose.Schema({
    CartItem:Array,
    Amount:Number,
    Status:String,
    CreatedAt:Date
 })

//Creating the model for the Order. This model will be used to interact with the MongoDB database.
const OrderModel= mongoose.model("Order",OrderSchema);

//Exporting the model
module.exports=OrderModel;