/* eslint-disable no-unused-vars */
import useFetchApi from "../../../hooks/useFetchApi"
import CircularProgress from '@mui/material/CircularProgress';
import Panel from "./Panel";

const IPadPanel=()=>{
    const {data,error,isLoading}=useFetchApi('/api/ipad')
    return (<div className="border rounded w-75 mx-auto p-5">
        <h3 className='w-100 text-center mx-auto' style={{fontSize:'50px',margin:'0rem 0 1rem 0'}}>Which iPad is right for you?</h3>
        <div className="d-lg-flex justify-content-between w-75 mt-5 mx-auto">
            {isLoading ? <CircularProgress/> : data?.map(ipad=><Panel key={ipad.id} data={{internet:ipad.internet,connector:ipad.connector,touchid:ipad.touchid,camera:ipad.camera,price:ipad.price_number,width:ipad.width,chip:ipad.chip,img:ipad.img_0,device_name:ipad.device_name,slogan: ipad.slogan,display: ipad.display}}/>)}
        </div>
    </div>
    )
}

export default IPadPanel