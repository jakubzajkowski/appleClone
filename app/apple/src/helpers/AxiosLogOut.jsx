import axios from 'axios'

const AxiosLogOut=()=>{
    axios.post('/logout',{}).then(({data})=>{
        window.location.href='/'
        console.log(data)
    })
}

export default AxiosLogOut