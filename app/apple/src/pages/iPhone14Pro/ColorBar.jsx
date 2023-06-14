import { motion } from "framer-motion"
import styled from 'styled-components'
import { useEffect,useState } from "react"
import PropTypes from 'prop-types'


const Bar = styled(motion.div)`
    position:fixed;
    top:5%;
    z-index:1000;
    width:100%;
    background-color:rgb(60, 60, 60,0.9);
    backdropFilter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
`
const ColorDots=styled.div`
        border-radius: 3rem;
        width: 20px;
        height: 20px;
        background-color:${props => (props.color=='white') ? 'rgb(240,240,240)' : props.color};
        margin: 0 0.5rem 0.5rem 0.5rem;
        cursor: pointer;
    `

const ColorBar=({colors,setIPhoneStart,mobile,barScrollTop})=>{
    const [scrollTop,setScrollTop]=useState(false)
    const [scrolling,setScrolling]=useState(false)
    useEffect(() => {
        const onScroll = e => {
          setScrollTop(barScrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (scrolling ?
        <Bar key='animate' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} exit={{opacity:0}}>
            <div className={mobile.matches ? 'd-flex justify-content-between w-100 mx-auto align-items-center' : 'd-flex justify-content-between w-50 mx-auto align-items-center'}>
                <h1 className='text-light text-center font-weight-bold' style={{fontSize: mobile.matches ? '20px' : '25px'}}>Pro. Beyond.</h1>
                <div className='d-flex justify-content-between '>
                    {colors.map(color=><ColorDots onClick={()=>setIPhoneStart(color)} key={color} color={color}/>)}
                </div>
            </div>
        </Bar> : '')
}

ColorBar.propTypes={
    colors:PropTypes.array,
    setIPhoneStart: PropTypes.func,
    mobile:PropTypes.object,
    barScrollTop: PropTypes.any
}

export default ColorBar