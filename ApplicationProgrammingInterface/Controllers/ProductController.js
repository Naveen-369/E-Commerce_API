const ProductModel = require("../Models/ProductModel");

/*Decalration of the callback function for the get method of the products in Routes*/
exports.getProducts=async(request,response,next)=>{
    
    //The database methods may take some time to fetch all the documents. So, we make the function asynchronous.
    const ProductList=await ProductModel.find({});
    
    // Declaration of the response
    response.json({
        SuccessCode:true,
        message:"Products fetched successfully",
        ProductList
    })
}

/*Declaration of the callback function for the get method of the product id in Routes*/
exports.getProductsID=async(request,response,next)=>{

    // Fetching the product based on the id of the product.
    try{
        console.log(request.params.id);
        const ProductID=await ProductModel.findById(request.params.id);
        
        //Declaration of the response
        response.json({
            SuccessCode:true,
            message:"Products ID fetched successfully",
            Product_Fetched:ProductID
        })
    }catch(error){

            //Declaration of the response
            response.status(404).json({
                SuccessCode:false,
                Error:error.message,
                Suggestion:"Product ID not found Please enter a valid product ID"
            })
    }
    
}