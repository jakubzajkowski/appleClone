import validator from "validator"
//firstName,lastName,country,birthday
//password,confirmPassword,phoneNumber,acceptOne,acceptTwo
const Validate=(email,password)=>{
    const validate={
        error: false,
        emailErr:'',
        passwordErr:''
    }
        if (!validator.isEmail(email)) {validate.error=true;validate.emailErr='Check your email address'}
        if (validator.isEmpty(email)) {validate.error=true;validate.emailErr='Enter your email'}
        if (validator.isEmpty(password)) {validate.error=true;validate.passwordErr='Enter your password'}

    return validate
}

export default Validate