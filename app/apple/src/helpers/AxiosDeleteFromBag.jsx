import axios from 'axios'

const AxiosDeleteFromBag=(deleteId)=>{
    axios.post(`${import.meta.env.VITE_HOST_NAME}/delete-cart`,{
        deleteId : deleteId
    }, ).then(({data})=>{
       console.log(data)
    })
}

export default AxiosDeleteFromBag