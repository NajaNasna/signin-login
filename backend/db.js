// const mongoose = require('mongoose')
// const MONGO_URI = process.env.MONGO_URI

// const mongodb =async()=>{
//     try {
//         await mongoose.connect(MONGO_URI).then(()=>{
//             console.log('Connected to database successfully')
//         }) 
//     } catch (error) {
//        console.log(error) 
//     }
    
// }


// module.exports= mongodb



const mongoose = require('mongoose')
const state = {
    db: null
}


module.exports.connect = function (done) {
    const url = process.env.MONGO_URI
    // const dbname = 'students'

   
    mongoose.connect(url).then(data => {

        state.db = data.connection.db
        done()

    }).catch(err => {
        return done(err)
    })


}

module.exports.get = function () { 
    return state.db
}