const express = require('express')
const router = express.Router()
const userHelpers = require('../helpers/user-helpers')
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.SECRET_KEY




router.post('/student-signup',async(req,res)=>{
    console.log(req.body)
    await userHelpers.doSignup(req.body).then((response)=>{
        console.log(response)
        res.send(response)
        
    })
})


router.post('/student-login',async(req,res)=>{
    await userHelpers.doLogin(req.body).then((response)=>{
        console.log(response)
        // res.send(response)

        if (response.success) {
            res.send(response); // Send the response object
            console.log(response._id)
        }  
        else {
            res.send(response); // Send an appropriate failure response
        }








        // const data = {
        //     user:{
        //         id:response.id
        //     }
        // }

        // const authToken = jwt.sign(data,jwtSecret) 
        // return res.json({success: true, authToken:authToken})

    })
})
module.exports =router