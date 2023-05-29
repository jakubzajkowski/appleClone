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

const StoreProductsCarousel=()=>{
    const [width,setWidth]=useState(null)
    const carousel = useRef()
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
    },[])
    return(
        <div className='store__products_carousel' style={{overflow:'hidden'}}>
          <Carousel ref={carousel} drag="x" dragConstraints={{right:0,left:-width}} >
            {ProductsList.map(product=><Product key={product.name} name={product.name} img={product.img}/>)}
          </Carousel>
        </div>
        )
}

export default StoreProductsCarousel