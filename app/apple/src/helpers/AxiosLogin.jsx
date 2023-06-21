import axios from 'axios'

const AxiosLogin=(password,email)=>{
    axios.post('http://127.0.0.1:3000/login',{
        email: email,
        password : password,
    }).then(({data})=>{
        console.log(data.error)
    })
}

export default AxiosLogin