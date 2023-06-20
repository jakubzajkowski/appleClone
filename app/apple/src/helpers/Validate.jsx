import validator from "validator"
//firstName,lastName,country,birthday
//password,confirmPassword,phoneNumber,acceptOne,acceptTwo
const Validate=(email,password,confirmPassword,acceptOne,acceptTwo)=>{
    const validate={
        error: false,
        emailErr:'',
        passwordErr:'',
        acceptErr:''
    }
        if (!validator.isEmail(email)) {validate.error=true;validate.emailErr='Check your email address'}
        if (validator.isEmpty(email)) {validate.error=true;validate.emailErr='Enter your email'}
        if (validator.isEmpty(password)) {validate.error=true;validate.passwordErr='Enter your password'}
        if (acceptOne!='on') {validate.error=true;validate.acceptErr='You must accept our policy to register'}
        if (confirmPassword!=password) {validate.error=true;validate.passwordErr='Confirm your password'}
        if (acceptTwo!='on') {validate.error=true;validate.acceptErr='You must accept our policy to register'}

    return validate
}

export default Validate