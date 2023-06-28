import {useState,useEffect} from "react";
import axios from 'axios'

const useCart=(id='ff6ec10e-512a-45ea-8d73-f95da514f74c')=>{
    const [Carterror,setCartError]=useState(null)
    const [isCartLoading,setIsCartLoading]=useState(false)
    const [cart,setData]=useState(null)
    useEffect(()=>{
        setIsCartLoading(true)
        axios(`/api/cart/${id}`).then(({data})=>{
            setData(data)
        }).catch(err=>{
            console.log(err)
            setCartError(err)
        }).finally(()=>{
            setIsCartLoading(false)
        })
    },[])
    return {cart,Carterror,isCartLoading}
}


export default useCart