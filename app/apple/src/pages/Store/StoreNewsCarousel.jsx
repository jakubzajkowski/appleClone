import { motion } from "framer-motion"
import styled from 'styled-components'
import { ProductsList } from "./ProductsLists"
import Product from "./Product"
import { useEffect,useState,useRef } from "react"

const Carousel=styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:0 0 3rem 0;
    width: 100%;
    padding: 0 0 0 25%;
    @media (max-width: 950px) {
        padding: 1rem;
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
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
    },[])
    return(
        <div className='store__products_carousel' style={{overflow:'hidden'}}>
          <Header className="my-5"><span style={{color:'black'}}>The latest.</span> Take a look at what’s new, right now.</Header>
          <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} >
            {ProductsList.map(product=><Product key={product.name} name={product.name} img={product.img}/>)}
          </Carousel>
        </div>
        )
}

export default StoreNewsCarousel