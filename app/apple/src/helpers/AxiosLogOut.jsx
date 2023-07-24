import axios from 'axios'

const AxiosLogOut=()=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/logout`,{}).then(({data})=>{
        window.location.href='/'
        console.log(data)
    })
}

export default AxiosLogOut