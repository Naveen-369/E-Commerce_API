//Importing the order and product model
const orderModel =require("../Models/OrderModel");
const productModel=require("../Models/ProductModel");
//Creating a Date instance
const Now=new Date();

// Declaration of the claaback function for the Orders Routes
exports.postOrders=async (request,response,next)=>{

    /** CREATION OF NEW ORDER */

    // Creating a new order document
    const CartItem=request.body
    const TotalPrice=Number(CartItem.reduce((Accumulator,Item)=>Accumulator+(Item.product.price*Item.Qty),0)).toFixed(2);
    const Status="Order Placed";
    
    // Creating a new order instance for the declared schema
    const NewOrder=await orderModel.create({
        CartItem,Amount:TotalPrice,Status,CreatedAt:Now
    })

    // To check if the items are added correctly uncomment
    // NewOrder.CartItem.forEach((Order)=>console.log(Order.product));

    /** DECREMENTING THE STOCKS AMOUNT AFTER EACH ORDER */

    NewOrder.CartItem.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id.$oid);
        product.stock = product.stock - item.Qty;
        console.log(product.stock);
        await product.save();
    })
        
    response.json({
        SuccessCode:true,
        Order:NewOrder.CartItem,
        TotalCost:NewOrder.Amount,
        message:"Orders Writting successfully"
    })
}
