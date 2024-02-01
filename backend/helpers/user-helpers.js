var db = require('../db')
const bcrypt = require('bcryptjs')
var collection = require('../config/collection')

module.exports = { 

    doSignup : async(userData)=>{

        try {
            const existingUser = await db.get().collection(collection.STUDENT_COLLECTION).findOne({ studEmail: userData.studEmail });
            
            if (existingUser) {
                return { status:400,success: false, message: "User already exists" };
            }
else{
            userData.pass =await bcrypt.hash(userData.pass,10)
            return db.get().collection(collection.STUDENT_COLLECTION).insertOne(userData).then((data)=>{
                console.log(data)
                // return data
                return ({success:true, userData:userData})
            })}
        } catch (error) {
            console.log(error)
            return ({success:false , message: "Error during signup"})
        }
    },

    doLogin:async(userData)=>{
        try {
            let userExist = await db.get().collection(collection.STUDENT_COLLECTION).findOne({studEmail:userData.studEmail})
            let response = {};
    //         if(userExist){
    //             await bcrypt.compare(userData.pass,userExist.pass).then((status=>{
    //                 if(status){
    //                     console.log(('login successs'));
    //                     response.user = userExist;
    //                     response.success = true;
    //                     console.log(response)
    //                     return response;
    //                 }
    //                 else{
    //                     console.log('login failed')
    //                     return ({success:false, message:"Enter correct password"})
    //                 }
    //             }))
    //         }else{
    //             console.log('login failed')
    //             return ({success:false, message:"Enter valid email"})
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         return ({success:false})
    //     }
    // }





    if (userExist) {
        const status = await bcrypt.compare(userData.pass, userExist.pass);

        if (status) {
            console.log('login success');
            response.user = userExist;
            response.success = true;
            console.log(response);
            return response; 
        } else {
            console.log('login failed');
            response.success = false;
            response.message = 'Enter correct password';
            return response; 
        }
    } else {
        console.log('login failed');
        response.success = false;
        response.message = 'Enter valid email';
        return response; 
    }
} catch (error) {
    console.log(error);
    return { success: false, message: 'Error during login' };
}
}


} 