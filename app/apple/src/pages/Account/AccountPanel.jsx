import  PropTypes  from 'prop-types'
import { useSelector } from 'react-redux'


const AccountPanel=({mobile,data})=>{
    const userData= useSelector(state=>state.user.data)
    if (data.type=='Sign In Security') return (
        <div className='w-100'>
            <h2>{data.type}</h2>
            <p>{data.title}</p>  
            <div className='d-md-flex w-100 justify-content-between flex-wrap'>
                {
                    data.content.map(x=><div className='mx-5 my-3 p-5 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}} key={x.text}><h5>{x.text}</h5></div>)
                }
                </div>
        </div>
    )
    if (data.type=='Personal Information') return (
        <div className='w-100'>
            <h2>{data.type}</h2>
            <p>{data.title}</p>  
            <div className='d-md-flex w-100 justify-content-between flex-wrap'>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>birthday</h5>
                    <p>{userData.birthday}</p>
                </div>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>country</h5>
                    <p>{userData.country}</p>
                </div>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>email</h5>
                    <p>{userData.email}</p>
                </div>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>first name</h5>
                    <p>{userData.first_name}</p>
                </div>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>last name</h5>
                    <p>{userData.last_name}</p>
                </div>
                <div className='mx-5 my-3 p-4 border rounded' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                    <h5>phone number</h5>
                    <p>{userData.phone_number}</p>
                </div>
            </div>
        </div>
    )
    if (data.type=='Payment') return (
        <div className='w-100'>
            <h2>{data.type}</h2>
            <p>{data.title}</p>  
            <div className='d-flex align-items-center my-3 p-3 border rounded justify-content-between' style={{cursor:'pointer',width:mobile.matches ? '100%' : '40%',boxShadow: '0px 0px 5px -2px rgba(66, 68, 90, 1)'}}>
                <h5>Add credit card</h5>
                <svg style={{width:'40px',height:'40px',margin:'0 0 0.5rem 0'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M302.2 218.4c0 17.2-10.5 27.1-29 27.1h-24.3v-54.2h24.4c18.4 0 28.9 9.8 28.9 27.1zm47.5 62.6c0 8.3 7.2 13.7 18.5 13.7 14.4 0 25.2-9.1 25.2-21.9v-7.7l-23.5 1.5c-13.3.9-20.2 5.8-20.2 14.4zM576 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM127.8 197.2c8.4.7 16.8-4.2 22.1-10.4 5.2-6.4 8.6-15 7.7-23.7-7.4.3-16.6 4.9-21.9 11.3-4.8 5.5-8.9 14.4-7.9 22.8zm60.6 74.5c-.2-.2-19.6-7.6-19.8-30-.2-18.7 15.3-27.7 16-28.2-8.8-13-22.4-14.4-27.1-14.7-12.2-.7-22.6 6.9-28.4 6.9-5.9 0-14.7-6.6-24.3-6.4-12.5.2-24.2 7.3-30.5 18.6-13.1 22.6-3.4 56 9.3 74.4 6.2 9.1 13.7 19.1 23.5 18.7 9.3-.4 13-6 24.2-6 11.3 0 14.5 6 24.3 5.9 10.2-.2 16.5-9.1 22.8-18.2 6.9-10.4 9.8-20.4 10-21zm135.4-53.4c0-26.6-18.5-44.8-44.9-44.8h-51.2v136.4h21.2v-46.6h29.3c26.8 0 45.6-18.4 45.6-45zm90 23.7c0-19.7-15.8-32.4-40-32.4-22.5 0-39.1 12.9-39.7 30.5h19.1c1.6-8.4 9.4-13.9 20-13.9 13 0 20.2 6 20.2 17.2v7.5l-26.4 1.6c-24.6 1.5-37.9 11.6-37.9 29.1 0 17.7 13.7 29.4 33.4 29.4 13.3 0 25.6-6.7 31.2-17.4h.4V310h19.6v-68zM516 210.9h-21.5l-24.9 80.6h-.4l-24.9-80.6H422l35.9 99.3-1.9 6c-3.2 10.2-8.5 14.2-17.9 14.2-1.7 0-4.9-.2-6.2-.3v16.4c1.2.4 6.5.5 8.1.5 20.7 0 30.4-7.9 38.9-31.8L516 210.9z"/></svg>
            </div>
        </div>
    )
    if (data.type=='Products') return (
        <div className='w-100'>
            <h2>{data.type}</h2>
            <p>{data.title}</p>  
            <p>No devices!</p>
        </div>
    )
}

AccountPanel.propTypes={
    mobile: PropTypes.object,
    data : PropTypes.object
}

export default AccountPanel