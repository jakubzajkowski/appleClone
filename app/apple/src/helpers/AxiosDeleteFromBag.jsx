import axios from 'axios'

const AxiosDeleteFromBag=(deleteId)=>{
    axios.post('http://127.0.0.1:3000/delete-cart',{
        deleteId : deleteId
    }, ).then(({data})=>{
       console.log(data)
    })
}

export default AxiosDeleteFromBag