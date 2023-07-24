import {useState,useEffect} from "react";
import axios from 'axios'
//'ff6ec10e-512a-45ea-8d73-f95da514f74c'
const useCart=()=>{
    const [Carterror,setCartError]=useState(null)
    const [isCartLoading,setIsCartLoading]=useState(false)
    const [cart,setData]=useState(null)
    useEffect(()=>{
        setIsCartLoading(true)
        axios('/api/users').then((res)=>{
            axios(`/api/cart/${res.data.user.id}`).then(({data})=>{
                setData(data)
            }).catch(err=>{
                console.log(err)
                setCartError(err)
            }).finally(()=>{
                setIsCartLoading(false)
            })  
        }).catch(err=>{
            console.log(err)
            setCartError(err)
        })
    },[])
    return {cart,Carterror,isCartLoading}
}


export default useCart