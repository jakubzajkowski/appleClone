import { motion } from "framer-motion"
import styled from 'styled-components'
import News from "./News"
import { useEffect,useState,useRef,useContext} from "react"
import useFetchApi from "../../hooks/useFetchApi"
import { MobileContext } from "../../context"
import CircularProgress from '@mui/material/CircularProgress';

const Carousel=styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:0 0 3rem 0;
    width:150%;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
        width:500%;
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

const StoreNewsCarousel=()=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()
    const {data,error,isLoading}=useFetchApi()
    const mobile = useContext(MobileContext)
    console.log(error)
    useEffect(()=>{
        if (mobile.matches){
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/5)
        }
        else{
            setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth/1.5)
        }
    })
    return(
        <div className='store__products_carousel' style={{overflow:'hidden'}}>
           <Header className="my-3"><span style={{color:'black'}}>The latest.</span> Take a look at what’s new, right now.</Header>
           <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} >
            {isLoading ? <CircularProgress /> : data?.map(news=><News key={news.id} device_name={news.device_name} bg_color={news.bg_color} slogan={news.slogan} img={news.img} price={news.price} price_number={news.price_number}/>)} 
           </Carousel>
        </div>
        )
}

export default StoreNewsCarousel