import { motion } from "framer-motion"
import styled from 'styled-components'
import { useEffect,useState,useRef,useContext} from "react"
import { MobileContext } from "../../../context"
import CircularProgress from '@mui/material/CircularProgress';
import ShoppingProduct from "./ShoppingProduct"
import PropTypes from 'prop-types'

const Carousel=styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:0 0 3rem 0;
    width:110%;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
        width:350%;
    }
`
const Header=styled.h3`
    color:rgb(90,90,90),
    font-weight:bold;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
    }
`

const ShoppingProductsCarousel=({data,isLoading,header,bg_color})=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()
    const mobile = useContext(MobileContext)
    useEffect(()=>{
        if (mobile.matches){
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/3.5)
        }
        else{
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/1.1)
        }
    })
    return(
        <div className='store__products_carousel' style={{overflow:'hidden'}}>
           <Header className="my-3">{header}</Header>
           <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}}>
            {isLoading ? <CircularProgress /> : data?.map(info=><ShoppingProduct key={info.id} bg_color={bg_color} img={info.img_1} colors={info.colors} price={info.price} device_name={info.device_name}/>)} 
           </Carousel>
        </div>
        )
}

ShoppingProductsCarousel.propTypes={
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    header: PropTypes.any,
    bg_color: PropTypes.string
}

export default ShoppingProductsCarousel