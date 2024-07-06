// Importing the required modules
const mongoose=require('mongoose');
// Declaration of the Database Configuration Module
const ConfigDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then((Connection)=>{
        console.log("Database Connected Successfully \n Connection : " + Connection.connection.host);
    })
}

//Exporting the module
module.exports=ConfigDatabase;