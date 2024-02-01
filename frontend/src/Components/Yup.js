import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationschema = Yup.object({
    firstName : Yup.string().min(3).max(15).required("Please enter your name"),
    lastName : Yup.string().required('Last name cannot be empty'),
    studEmail : Yup.string().email().required('Please enter your email'),
    dob : Yup.string().required("This field cannot be empty"),
    Address : Yup.string().required("This field cannot be empty"),
    gender : Yup.string().required(),
    mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    alternativeMobile : Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    courses : Yup.string().required("Please select your course"),
    pass : Yup.string().min(8).max(15).required('Please enter your password'),
    confirmPass : Yup.string().required().oneOf([Yup.ref('pass'),null],"Password must match")
})