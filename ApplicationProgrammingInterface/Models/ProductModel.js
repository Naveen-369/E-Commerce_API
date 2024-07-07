//Creating the mongoose instance
const mongoose=require('mongoose')

//Creating the schema for the product
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    ratings:String,
    images:[{image:String}],
    category:String,
    Seller:String,
    Stock:Number,
    Number_Of_Reviews:String,
    CeratedAt:Date
 })

//Creating the model for the product. This model will be used to interact with the MongoDB database.
const ProductModel= mongoose.model("Product",ProductSchema);

//Exporting the model
module.exports=ProductModel;