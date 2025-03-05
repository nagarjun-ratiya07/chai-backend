// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
dotenv.config({
    path : './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGODB connection Failed !! : " , err);
    
})
// jyre async code run thay tyre te aek promise return kare che <- v.v.v.MIMP


//Approach 1 :- To connect Data Base with our front end through index.js

/*
import express from "express"
const app = express()
;( async()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("ERR : " , error);
            throw err
            
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    catch(error)
    {
        console.log("Error: ", error)
        throw err
    }
} )()
//it is best practice to use async function with IIFE
//and iife ni pela aek semicolon lagavo ae as a good coding convention che
*/