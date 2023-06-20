import axios from 'axios'

const AxiosRegister=(password,email,phoneNumber,firstName,lastName,country,birthday,acceptOne,acceptTwo,confirmPassword,setServerErr)=>{
    axios.post('http://127.0.0.1:3000/register',{
        firstName :firstName,
        lastName : lastName,
        country : country,
        birthday : birthday,
        email: email,
        password : password,
        confirmPassword: confirmPassword,
        phoneNumber :  phoneNumber,
        acceptOne: acceptOne,
        acceptTwo: acceptTwo
    }).then(({data})=>{
        setServerErr(data.error)
    })
}

export default AxiosRegister