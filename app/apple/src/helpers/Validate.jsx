import validator from "validator"
const Validate=(firstName,setFirstNameErr,lastName,setLastNameErr,birthday,setBirthdayErr,email,setEmailErr,password,setPasswordErr,confirmPassword,setConfirmPasswordErr,phoneNumber,setPhoneNumberErr,acceptOne,setAcceptOneErr,acceptTwo)=>{
    const validate={
        error: false,
        emailErr:'',
        passwordErr:'',
        acceptErr:'',
        firstNameErr:'',
        lastNameErr:'',
        birthdayErr:'',
        phoneErr:'',
    }
    setEmailErr('')
    setConfirmPasswordErr('')
    setAcceptOneErr('')
    setPasswordErr('')
    setConfirmPasswordErr('')
    setLastNameErr('')
    setFirstNameErr('')
    setBirthdayErr('')
    setPhoneNumberErr('')
        if (!validator.isEmail(email)) {validate.error=true;validate.emailErr='Check your email address';setEmailErr(validate.emailErr)}
        if (!validator.isLength(password,{ min: 8, max: undefined })) {validate.error=true;validate.passwordErr='Your password should has min 8 characters';setPasswordErr(validate.passwordErr)}
        if (parseInt(birthday.slice(0,4))>new Date().getFullYear()-18) {validate.error=true;validate.birthdayErr='You must be adult to sign up';setBirthdayErr(validate.birthdayErr)}
        
        if (validator.isEmpty(email)) {validate.error=true;validate.emailErr='Enter your email';setEmailErr(validate.emailErr)}
        if (validator.isEmpty(password)) {validate.error=true;validate.passwordErr='Enter your password',setPasswordErr(validate.passwordErr)}
        if (validator.isEmpty(firstName)) {validate.error=true;validate.firstNameErr='Enter your first name',setFirstNameErr(validate.firstNameErr)}
        if (validator.isEmpty(lastName)) {validate.error=true;validate.lastNameErr='Enter your last name',setLastNameErr(validate.lastNameErr)}
        if (validator.isEmpty(birthday)) {validate.error=true;validate.birthdayErr='Enter your birthday',setBirthdayErr(validate.birthdayErr)}
        if (validator.isEmpty(phoneNumber)) {validate.error=true;validate.phoneErr='Enter your phone number',setPhoneNumberErr(validate.phoneErr)}
        if (acceptOne!='on') {validate.error=true;validate.acceptErr='You must accept our policy to register';setAcceptOneErr(validate.acceptErr)}
        if (confirmPassword!=password) {validate.error=true;validate.passwordErr='Confirm your password';setConfirmPasswordErr(validate.passwordErr)}
        if (acceptTwo!='on') {validate.error=true;validate.acceptErr='You must accept our policy to register';setAcceptOneErr(validate.acceptErr)}

    return validate
}

export default Validate