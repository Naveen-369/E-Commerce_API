// Declaration of the claaback function for the Orders Routes
exports.postOrders=(request,response,next)=>{
    response.json({
        SuccessCode:true,
        message:"Orders Writting successfully"
    })
}
