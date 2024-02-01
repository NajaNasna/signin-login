// const User = require('./models/User')
// const bcrypt = require('bcryptjs')

// module.exports = {
//    doSignup : (datas)=>{
//     console.log(datas)
//     return new Promise(async(resolve,reject)=>{
//         let userExist = await User.findOne({Email:datas.studEmail})
//         if(userExist){
//             return{
//                 statusCode : 401,
//                 message:"User already exist"
//             }
//         }else{
//            let secPass =await bcrypt.hash(datas.pass,10)
//            try {
//             await User.create({
//                 FirstName: datas.firstName,
//                 LastName: datas.lastName,
//                 Email: datas.studEmail,
//                 Dob : datas.dob,
//                 Gender : datas.radiobtn,
//                 Address : datas.Address,
//                 Phone : datas.mobile,
//                 AltPhone : datas.alternativeMobile,
//                 Password: secPass              
//             })
//             resolve({ success: true })
     

//         } catch (error) {
//             console.log(error)
//             reject({ success: false, error: error.message });
//         }
//         }
//     })
//    } 
// }