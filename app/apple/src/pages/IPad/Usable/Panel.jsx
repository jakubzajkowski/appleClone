import PropTypes from 'prop-types'
import styled from 'styled-components'

const BuyButton=styled.button`
border:none;
padding: 0.5rem 1rem;
background-color: rgb(30,144,255);
color:white;
border-radius: 3rem;
`

const Panel = ({data})=>{
    return (
        <div className="flex-column mx-2">
            <div>
                <img className='d-block mx-auto' style={{width:'160px',height:'100px'}} src={data.img} alt="ipad" />
                <h4 className='text-center' style={{height:'100px'}}>{data.device_name}</h4>
                <p className='text-center' style={{height:'100px',fontSize:'0.9rem'}}>{data.slogan}</p>
                <p className='text-center' style={{fontSize:'0.9rem'}}>From ${data.price}</p>
                <BuyButton className='d-block mx-auto'><a className='text-decoration-none text-light' href={`/store/buy-ipad/${data.device_name.replace(/\s+/g,"-")}`}>Buy</a></BuyButton>
                <hr />
                <p className='text-center' style={{height:'100px',fontSize:'0.9rem'}}>{data.display}</p>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/></svg>
                    <p className='my-3' style={{fontSize:'0.9rem'}}>{data.chip}</p>
                </div>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z"/></svg>
                    <p className='my-3' style={{fontSize:'0.9rem'}}>{data.width}</p>
                </div>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                    <p className='my-3' style={{fontSize:'0.9rem'}}>{data.camera}</p>
                </div>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z"/></svg>
                    <p className='my-3' style={{fontSize:'0.9rem'}}>{data.touchid}</p>
                </div>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M641.5 256c0 3.1-1.7 6.1-4.5 7.5L547.9 317c-1.4.8-2.8 1.4-4.5 1.4-1.4 0-3.1-.3-4.5-1.1-2.8-1.7-4.5-4.5-4.5-7.8v-35.6H295.7c25.3 39.6 40.5 106.9 69.6 106.9H392V354c0-5 3.9-8.9 8.9-8.9H490c5 0 8.9 3.9 8.9 8.9v89.1c0 5-3.9 8.9-8.9 8.9h-89.1c-5 0-8.9-3.9-8.9-8.9v-26.7h-26.7c-75.4 0-81.1-142.5-124.7-142.5H140.3c-8.1 30.6-35.9 53.5-69 53.5C32 327.3 0 295.3 0 256s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5 39.1 0 43.9 9.5 74.6-60.4C255 88.7 273 95.7 323.8 95.7c7.5-20.9 27-35.6 50.4-35.6 29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6H294c-29.1 0-44.3 67.4-69.6 106.9h310.1v-35.6c0-3.3 1.7-6.1 4.5-7.8 2.8-1.7 6.4-1.4 8.9.3l89.1 53.5c2.8 1.1 4.5 4.1 4.5 7.2z"/></svg>
                    <p className='my-3'style={{fontSize:'0.9rem'}}>{data.connector}</p>
                </div>
                <div className='text-center' style={{height:'160px'}}>
                    <svg className='d-block mx-auto' style={{width:'50px',height:'50px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
                    <p className='my-3'style={{fontSize:'0.9rem'}}>{data.internet}</p>
                </div>
            </div>
        </div>
    )
}

Panel.propTypes={
    data:PropTypes.object
}

export default Panel