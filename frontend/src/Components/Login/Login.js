import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { validationschema } from '../Yup'
import { useFormik } from 'formik'


function Login() {

  const initialValues = {
    studEmail: '',
    pass: '',
}
const location = useNavigate()





const { values, errors, handleChange, handleBlur} = useFormik({

  initialValues: initialValues,
  validationSchema: validationschema


})


const handleSubmit = async(e)=>{
     e.preventDefault();
     const result = await axios.post('http://localhost:8000/student-login',values)
     console.log(result)
     if(result.data.success){
       location('/')
     }else{
       alert(result.data.message)
     }
   }




  // const[studEmail,setStudEmail] = useState('')
  // const[pass,setPass] = useState('')
  // const location = useNavigate()


  // const handleSubmit = async(e)=>{
  //   e.preventDefault();
  //   const body = {studEmail,pass} ;
  //   const result = await axios.post('http://localhost:8000/student-login',body)
  //   console.log(result)
  //   if(result.data.success){
  //     location('/')
  //   }else{
  //     alert(result.data.message)
  //   }
  // }



  return (
    <div>
      <div className="container text-center">

        <form className='row mt-5' >
          <h2>Login to your Account</h2>

  <div className="col-md-9 col-12 my-5 mx-auto">
    <label className="form-label">Email address</label>
    <input type="email" name='studEmail' 
    // value={studEmail} 
    value={values.studEmail} className="form-control" 
    onChange={handleChange} 
    // onChange={(e)=>setStudEmail(e.target.value)}
    />
    {errors.studEmail? (<p className='error-text'>{errors.studEmail}</p>) : null}

  </div>


  <div className="col-md-9 col-12 mb-3 mb-5 mx-auto">
    <label className="form-label">Password</label>
    <input type="password" name='pass'
    // value={pass} 
    value={values.pass}
    className="form-control" 
    onChange={handleChange} 
    // onChange={(e)=>setPass(e.target.value)}
    />
    {errors.pass ? (<p className='error-text'>{errors.pass}</p>) : null}
  </div>


<button type="button" onClick={handleSubmit} className="btn btn-primary col-md-4 mx-auto">Login</button>
</form>


    <p className='mt-5'>Don't have an Account ? <Link to={'/signup'}><span className='login-para'>Create new Account</span></Link></p>
    </div>
    </div>
  )
}

export default Login