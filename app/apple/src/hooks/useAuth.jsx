import {useState,useEffect} from "react";
import axios from 'axios'

const useAuth=()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(false)
    const [data,setData]=useState(null)
    useEffect(()=>{
        setIsLoading(true)
        axios('/api/users').then(({data})=>{
            setData(data)
        }).catch(err=>{
            console.log(err)
            setError(err)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])
    return {data,error,isLoading}
}


export default useAuth