
import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'

export const SignOutBtn=styled.button`
border:none;
padding: 0.2rem 1rem;
background-color: rgb(30,144,255);
color:white;
border-radius: 3rem;
`

const Account=({mobile})=>{
    const userData= useSelector(state=>state.user.data)
    const isLogged= useSelector(state=>state.user.logged)
    const isLoading= useSelector(state=>state.user.isLoading)
    useEffect(()=>{
        console.log(userData)
    })
    if (isLogged) return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <div className={mobile.matches ? 'w-100 my-4 mx-auto d-flex p-2 justify-content-between align-items-center' : 'w-75 my-4 mx-auto d-flex p-2 justify-content-between align-items-center'}>
            <h3>Apple ID</h3>
            <SignOutBtn>Sign Out</SignOutBtn>
        </div>
        <hr className='w-75 mx-auto'/>
        <div className={mobile.matches ? 'w-100 my-4 mx-auto d-lg-flex p-2 justify-content-between align-items-center' : 'w-75 my-4 mx-auto d-lg-flex p-2 justify-content-between align-items-center'}>
                <div className='w-25'>
                    <ul>
                        <h1>{userData?.first_name} {userData?.last_name}</h1>
                        <li style={{listStyle:'none',margin:'0 0 4rem 0'}}>{userData?.email}</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0'}}>Sign In Security</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0'}}>Personal Information</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0'}}>Payment</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0'}}>Products</li>
                    </ul>
                </div>
                <div className='w-75'>
                    
                </div>
            </div>
        <Footer mobile={mobile} />
        </div>
    )
    if (isLoading) return (
        <div>Loading...</div>
    )
    else return (
        <div>Not logged</div>
    )
}

Account.propTypes={
    mobile: PropTypes.object
}

export default Account