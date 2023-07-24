import axios from 'axios'

const AxiosRegister=(password,email,phoneNumber,firstName,lastName,country,birthday,acceptOne,acceptTwo,confirmPassword,setServerErr)=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/register`,{
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
        if (data.error){
            setServerErr(data.error)
        }
        else{
            window.location.href='/'
        }
    })
}

export default AxiosRegister