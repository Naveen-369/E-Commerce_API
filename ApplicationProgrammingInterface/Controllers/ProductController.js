//Decalration of the callback function for the get method of the products in Routes
exports.getProducts=(request,response,next)=>{
    response.json({
        SuccessCode:true,
        message:"Products fetched successfully"
    })
}

// Declaration of the callback function for the get method of the product id in Routes
exports.getProductsID=(request,response,next)=>{
    response.json({
        SuccessCode:true,
        message:"Products ID fetched successfully"
    })
}