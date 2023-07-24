import axios from 'axios'

const AxiosLogin=(password,email,setErrorServer)=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/login`,{
        email: email,
        password : password,
    }, {
        headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          credentials: 'include',
      }).then(({data})=>{
        if (data.error==''){
            window.location.href='/account'
        }
        else{
            setErrorServer(data.error)
        }
    })
}

export default AxiosLogin