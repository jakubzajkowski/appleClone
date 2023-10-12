import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import styled from 'styled-components'
import {useContext, useState} from 'react'
import AxiosLogin from '../../helpers/AxiosLogin'
import validator from 'validator'
import {MobileContext} from "../../context.jsx";

export const InputText=styled.input`
    border: 1px solid rgb(180,180,180);
    border-radius:0.2rem;
    padding:0.5rem;
    outline: none;
    display: block;
    &:focus {
        box-shadow: 0px 0px 4px 1px rgb(100,191,255);
        border: 1px solid rgb(0,121,255);
    }
    
`

const SignUp=()=>{
    const mobile = useContext(MobileContext)
    const [appleId,setAppleId]=useState('')
    const [password,setPassword]=useState('')
    const [errorServer,setErrorServer]=useState('')
    const [ErrClient,setErrClient]=useState('')
    const handleSubmit=()=>{
        if (validator.isEmpty(appleId) || validator.isEmpty(password)){
            setErrClient('Fill all fields')
        }else{
            AxiosLogin(password,appleId,setErrorServer)
            setErrClient('')
        }
    }

    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <form className={mobile.matches ? 'w-75 mx-auto p-2 my-4' : 'w-50 mx-auto my-4'}>
            <h1 className='my-5'>Sign in for faster checkout.</h1> 
            <div className={mobile.matches ? 'w-100 mt-5 mx-auto text-center' : 'w-50 mt-5 mx-auto text-center'}>
                <h3>Sign in to Apple Store</h3>
                <div className='w-100 position-relative'>
                    <InputText onChange={(e)=>setAppleId(e.target.value)} type='text' className='w-100' placeholder='Apple ID'/>
                </div>
                <div className='w-100 position-relative'>
                    <InputText onChange={(e)=>setPassword(e.target.value)} type='password' className='w-100' placeholder='Password'/>
                    <svg onClick={handleSubmit} style={{width:'40px',height:'40px',fill:'rgb(180,180,180)',cursor:'pointer',padding:'0.3rem',position:'absolute',top:'0%',right:'0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"/></svg>
                </div>
                <p className='text-center mt-5 text-danger' style={{fontSize:'0.8rem'}}>{ErrClient}</p>
                <p className='text-center text-danger' style={{fontSize:'0.8rem'}}>{errorServer}</p>
            </div>
            <p className='text-center mt-5' style={{fontSize:'0.9rem'}}><a href="">Forgot Apple ID or password?</a></p>
            <p className='text-center' style={{fontSize:'0.9rem'}}>Don’t have an Apple ID? <a href="/register">Create yours now.</a></p>
        </form>
        <Footer mobile={mobile} />
        </div>
    )
}

SignUp.propTypes={
    mobile: PropTypes.object
}

export default SignUp