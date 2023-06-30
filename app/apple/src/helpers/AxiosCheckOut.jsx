import axios from 'axios'

const AxiosCheckOut=(data)=>{
    axios.post('http://127.0.0.1:3000/checkout',{
        data:data
    }, ).then(({data})=>{
        window.location.href=data.url
       console.log(data)
    })
}

export default AxiosCheckOut