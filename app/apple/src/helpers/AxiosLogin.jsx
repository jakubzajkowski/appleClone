import axios from 'axios'

const AxiosLogin=(password,email)=>{
    axios.post('http://127.0.0.1:3000/login',{
        email: email,
        password : password,
    }, {
        headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          credentials: 'include',
      }).then((response)=>{
        console.log(response)
    })
}

export default AxiosLogin