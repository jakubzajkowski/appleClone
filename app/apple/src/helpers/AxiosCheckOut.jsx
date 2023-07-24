import axios from 'axios'

const AxiosCheckOut=(data)=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/checkout`,{
        data:data
    }, ).then(({data})=>{
        window.location.href=data.url
       console.log(data)
    })
}

export default AxiosCheckOut