/* eslint-disable no-unused-vars */
import useFetchApi from "../../../hooks/useFetchApi"
import CircularProgress from '@mui/material/CircularProgress';
import Panel from "./Panel";

const MacPanel=()=>{
    const {data,error,isLoading}=useFetchApi('/api/mac')
    return (<div className="border rounded w-75 mx-auto p-5">
        <h3 className='w-100 text-center mx-auto' style={{fontSize:'50px',margin:'0rem 0 1rem 0'}}>Which Mac is right for you?</h3>
        <div className="d-lg-flex justify-content-between w-75 mt-5 mx-auto">
            {isLoading ? <CircularProgress/> : data?.map(mac=><Panel key={mac.id} data={{core_gpu:mac.core_gpu,core_cpu:mac.core_cpu,ram:mac.ram,battery:mac.battery,internet:mac.internet,touchid:mac.touchid,mic:mac.mic,price:mac.price_number,camera:mac.camera,chip:mac.chip,img:mac.img_0,device_name:mac.device_name,slogan: mac.slogan,display: mac.display}}/>)}
        </div>
    </div>
    )
}

export default MacPanel