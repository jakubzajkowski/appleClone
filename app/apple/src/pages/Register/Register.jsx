/* eslint-disable react-hooks/rules-of-hooks */
import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import CountryOptions from './CountryOptions'
import {InputText,Select,RegisterBtn} from './Styled'
import { useState } from 'react'
import Validate from '../../helpers/Validate'
import AxiosRegister from '../../helpers/AxiosRegister'

const Register=({mobile})=>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [country,setCountry]=useState('Afganistan')
    const [birthday,setBirthday]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [acceptOne,setAcceptOne]=useState('')
    const [acceptTwo,setAcceptTwo]=useState('')
    const [serverError,setServerErr]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (Validate(email,password,confirmPassword,acceptOne,acceptTwo).error){
            console.log(Validate(email,password,confirmPassword,acceptOne,acceptTwo).emailErr)
            console.log(Validate(email,password,confirmPassword,acceptOne,acceptTwo).passwordErr)
            console.log(Validate(email,password,confirmPassword,acceptOne,acceptTwo).acceptErr)
        }else{
            console.log(password,email,phoneNumber,firstName,lastName,country,birthday,acceptOne,acceptTwo)
            AxiosRegister(password,email,phoneNumber,firstName,lastName,country,birthday,acceptOne,acceptTwo,confirmPassword,setServerErr)
        }
    }

    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <form onSubmit={handleSubmit} className={mobile.matches ? 'w-75 mx-auto p-2 my-4' : 'w-50 mx-auto my-4'}>
            <h1 className='text-center'>Create Your Apple ID</h1>
            <p className='text-center'>One Apple ID is all you need to access all Apple services. Already have an Apple ID? Find it here </p>
            <div className={mobile.matches ? 'w-100 mx-auto my-5 d-flex justify-content-between' : ' d-flex justify-content-between w-50 mx-auto my-5'}>
                <InputText onChange={(e)=>setFirstName(e.target.value)} type='text' className='w-50' placeholder='First Name'/>
                <InputText onChange={(e)=>setLastName(e.target.value)} type='text' className='w-50' placeholder='Last Name'/>
            </div>
            <p className={mobile.matches ?'w-100 mx-auto':'w-50 mx-auto'}>COUNTRY / REGION</p>
            <Select onChange={(e)=>setCountry(e.target.value)} className={mobile.matches ?'w-100 mx-auto':'w-50 mx-auto'}>
                <CountryOptions />
            </Select>
            <p className={mobile.matches ? 'w-100 mx-auto mt-4' : 'w-50 mx-auto mt-4'}>Birthday</p>
            <InputText onChange={(e)=>setBirthday(e.target.value)} type='date' className={mobile.matches ?'w-100 mx-auto':'w-50 mx-auto'}/>
            <InputText onChange={(e)=>setEmail(e.target.value)} type='text' className={mobile.matches ?'w-100 mx-auto mt-4':'w-50 mx-auto mt-4'} placeholder='name@example.com'/>
            <InputText onChange={(e)=>setPassword(e.target.value)} type='password' className={mobile.matches ?'w-100 mx-auto mt-4':'w-50 mx-auto mt-4'} placeholder='Password'/>
            <InputText onChange={(e)=>setConfirmPassword(e.target.value)} type='password' className={mobile.matches ?'w-100 mx-auto mt-4':'w-50 mx-auto mt-4'} placeholder='Confirm Password'/>
            <InputText onChange={(e)=>setPhoneNumber(e.target.value)} type='number' className={mobile.matches ?'w-100 mx-auto mt-4':'w-50 mx-auto mt-4'} placeholder='Phone Number'/>
            <div className={mobile.matches ? 'w-100 mx-auto my-5 d-flex justify-content-between' : ' d-flex justify-content-between w-50 mx-auto my-5'}>
                <input type='checkbox' className='mx-3' onChange={(e)=>setAcceptOne(e.target.value)}/>
                <div>
                    <h5 style={{fontSize:'1rem'}}>Announcements</h5>
                    <p style={{fontSize:'0.8rem'}}>Receive Apple emails and communications including announcements, marketing, recommendations, and updates about Apple products, services and software.</p>
                </div>
            </div>
            <div className={mobile.matches ? 'w-100 mx-auto my-5 d-flex justify-content-between' : ' d-flex justify-content-between w-50 mx-auto my-5'}>
                <input type='checkbox' className='mx-3' onChange={(e)=>setAcceptTwo(e.target.value)}/>
                <div>
                    <h5 style={{fontSize:'1rem'}}>Apps, Music, TV, and More</h5>
                    <p style={{fontSize:'0.8rem'}}>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, Apple Card and more.</p>
                </div>
            </div>
            <p className='text-danger text-center w-100' style={{fontSize:'0.8rem'}}>{serverError}</p>
            <RegisterBtn type='submit' className='mx-auto d-block'>Continue</RegisterBtn>
        </form>
        <Footer mobile={mobile} />
        </div>
    )
}

Register.propTypes={
    mobile: PropTypes.object
}

export default Register