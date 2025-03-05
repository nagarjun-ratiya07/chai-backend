import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
//use ae middleware ke configration mate vaparvama aave che
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
//This is basically configure the json file ke jema data json format ma aavse
app.use(express.json({limit : "16kb"}))

//aa basically url mathi data aave aene handle karva mate thay che
app.use(express.urlencoded({extended:true , limit:"16kb"}))
//aa basically pdf,photos,file ne aapde rakhava mate vapray che
app.use(express.static("public"))

app.use(cookieParser())

export {app}