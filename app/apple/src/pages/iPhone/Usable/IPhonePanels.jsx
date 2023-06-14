/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useFetchApi from "../../../hooks/useFetchApi"
import CircularProgress from '@mui/material/CircularProgress';
import Panel from "./Panel";

const IPhonePanel=({mobile})=>{
    const {data,error,isLoading}=useFetchApi('/api/iphone')
    return (<div className={mobile.matches ? "border rounded w-100 mx-auto p-5" : "border rounded w-75 mx-auto p-5"}>
        <h3 className='w-100 text-center mx-auto' style={{fontSize:'50px',margin:'0rem 0 1rem 0'}}>Which iPad is right for you?</h3>
        <div className="d-lg-flex justify-content-between w-75 mt-5 mx-auto">
            {isLoading ? <CircularProgress/> : data?.map(iphone=><Panel key={iphone.id} data={{sos:iphone.sos,battery:iphone.battery,internet:iphone.internet,touchid:iphone.touchid,camera:iphone.camera,price:iphone.price_number,chip:iphone.chip,img:iphone.img_0,device_name:iphone.device_name,slogan: iphone.slogan,display: iphone.display}}/>)}
        </div>
    </div>
    )
}

export default IPhonePanel