import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/route.js'
// import { connect } from 'mongoose'
import mongoose from 'mongoose'


const port = process.env.PORT || 8800
const app = express()
 app.use(cors())
 app.use(express.json())
dotenv.config()


app.use('/api',router)
 


const  connect = async() => {
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.url).then(()=>{

            console.log("Connected to MongoDb!")
        }).catch(err=>console.log(err))
    } catch(error){
        throw error;
    }
};
mongoose.connection.on("disconnected", ()=> {
    console.log("Disconnected!")
})

app.listen(port,()=>{
    connect()
    console.log("Connected to server")
})