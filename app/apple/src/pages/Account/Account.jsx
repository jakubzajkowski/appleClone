
import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import styled from 'styled-components'
import AccountPanel from './AccountPanel'
import { accountList } from './accountList'

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
    const [panel,setPanel] = useState('Sign In Security')

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
                        <li style={{listStyle:'none',margin:'0 0 4rem 0',cursor:'pointer'}}>{userData?.email}</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0',cursor:'pointer'}} onClick={()=>setPanel('Sign In Security')}>Sign In Security</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0',cursor:'pointer'}} onClick={()=>setPanel('Personal Information')}>Personal Information</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0',cursor:'pointer'}} onClick={()=>setPanel('Payment')}>Payment</li>
                        <li style={{listStyle:'none',margin:'0 0 1rem 0',cursor:'pointer'}} onClick={()=>setPanel('Products')}>Products</li>
                    </ul>
                </div>
                <div className='w-75 p-2'>
                    {
                        accountList.filter(x=>x.type===panel).map(info=><AccountPanel key={info.type} mobile={mobile} data={info}/>)
                    }
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