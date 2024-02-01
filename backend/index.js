const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
// const mongodb = require('./db')
const db = require('./db')

// mongodb()

//  app.use(cors({origin : "http://localhost:3000"}))

app.use(cors())


 
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//   ); 
//   next()
// })



app.use(express.json())




//================================================


db.connect((err)=>{
    if(err){
      console.log('Connection error'+err)
    }else{
      console.log("Database connected to port")
  
    }
  }) 



//=================================================



app.get('/',(req,res)=>{
    res.send('WELCOME')
})

app.use('/',require('./Routes/StudentRoute'))

app.listen(port,()=>{
    console.log( `server started at port ${port}`)
}) 