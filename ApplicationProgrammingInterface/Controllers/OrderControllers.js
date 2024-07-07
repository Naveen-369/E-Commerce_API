//Importing the order model
const orderModel =require("../Models/OrderModel");

// Declaration of the claaback function for the Orders Routes
exports.postOrders=(request,response,next)=>{
    console.log(request.body,"DATA");

    response.json({
        SuccessCode:true,
        message:"Orders Writting successfully"
    })
}
