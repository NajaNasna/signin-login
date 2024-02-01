import { useFormik } from 'formik'
import React from 'react'
import { validationschema } from '../Yup'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import {  Formik,errors,touched,handleBlur,handleChange,handleSubmit,values } from 'formik'

function Signup() {

    const initialValues = {
        firstName: '',
        lastName: '',
        studEmail: '',
        dob: '',
        Address: '',
        gender: '',
        mobile: '',
        alternativeMobile: '',
        courses: '',
        pass: '',
        // confirmPass: ''
    }

    const { values, errors, touched, handleChange, handleBlur, resetForm } = useFormik({

        initialValues: initialValues,
        validationSchema: validationschema
        //     onSubmit : async(values,action)=>{

        // console.log(values)
        //         try {
        //             const result = await axios.post('http://localhost:8000/student-signup', values);
        //             console.log(result);
        //             action.resetForm();
        //         } catch (error) {
        //             console.error(error);
        //         }


        // }

    })


    const handleSubmit = () => {
        axios.post('http://localhost:8000/student-signup', values)
            .then((result) => {
                console.log(result);
                resetForm()

            })
            .catch((error) => {
                console.error(error);
            });
    }



    return (



        <div>
            <div className="container-fluid">
                <div className="container">

                    <form className='mt-4' >
                        <h2 className='text-center'>Create Account</h2>
                        <div className="row mt-4">
                            <div className="col-md-6 col-12 mb-4 ">
                                <label className="form-label">First Name</label>
                                <input type="text" value={values.firstName} className="form-control" name='firstName' onChange={handleChange} onBlur={handleBlur} />
                                {errors.firstName && touched.firstName ? (<p className="error-text">{errors.firstName}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Last Name</label>
                                <input type="text" value={values.lastName} className="form-control" name='lastName' onChange={handleChange} onBlur={handleBlur} />
                                {errors.lastName && touched.lastName ? (<p className='error-text'>{errors.lastName}</p>) : null}
                            </div>
                            <div className="col-md-12 col-12 mb-4">
                                <label className="form-label">Student E-mail</label>
                                <input type="email" value={values.studEmail} className="form-control" placeholder='name@example.com' name='studEmail' onChange={handleChange} onBlur={handleBlur} />
                                {errors.studEmail && touched.studEmail ? (<p className='error-text'>{errors.studEmail}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Birth Date</label>
                                <input type="date" value={values.dob} className="form-control" name='dob' onChange={handleChange} onBlur={handleBlur} />
                                {errors.dob && touched.dob ? (<p className='error-text'>{errors.dob}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Gender</label> <br />
                                <input type="radio" name='gender' className='ms-4 me-2' value="male"
                                    checked={values.gender === "male"}
                                    onChange={handleChange} />
                                <label>Male</label>
                                <input type="radio" name='gender' className='ms-4 me-2' value="female"
                                    checked={values.gender === "female"}
                                    onChange={handleChange} />
                                <label>Female</label>
                            </div>
                            <div className="col-md-12 col-12 mb-4">
                                <label className="form-label">Address Line 1</label>
                                <input type="text" value={values.Address} className="form-control" name='Address' onChange={handleChange} onBlur={handleBlur} />
                                {errors.dob && touched.dob ? (<p className='error-text'>{errors.dob}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" value={values.mobile} className="form-control" name='mobile' onChange={handleChange} onBlur={handleBlur} />
                                {errors.mobile && touched.mobile ? (<p className='error-text'>{errors.mobile}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Alternative Phone Number</label>
                                <input type="tel" value={values.alternativeMobile} className="form-control" name='alternativeMobile' onChange={handleChange} />
                                {errors.alternativeMobile ? (<p className='error-text'>{errors.alternativeMobile}</p>) : null}
                            </div>
                            <div className="col-md-12 col-12 mb-4">
                                <label className="form-label me-4">Courses</label>
                                <select name="courses" id="" className='col-md-12' defaultValue='' value={values.courses}
  onChange={handleChange}>
                                    <option disabled value="">Select the courses</option>
                                    <option value="aaa">aaa</option>
                                    <option value="bbb">bbb</option>
                                    <option value="ccc">ccc</option>
                                </select>
                                {errors.courses ? (<p className='error-text'>{errors.courses}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" value={values.pass} className="form-control" name='pass' onChange={handleChange} onBlur={handleBlur} />
                                {errors.pass && touched.pass ? (<p className='error-text'>{errors.pass}</p>) : null}
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='confirmPass' onChange={handleChange} onBlur={handleBlur} />
                                {errors.confirmPass && touched.confirmPass ? (<p className='error-text'>{errors.confirmPass}</p>) : null}
                            </div>

                            <button type="button" className="btn btn-primary w-25 mx-auto my-5" onClick={handleSubmit}>Sign up</button>


                        </div>
                    </form>
                    <p className='text-center'>Already have an account ? <Link to={'/login'}>
                        <span className='signup-para'>Login</span></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Signup