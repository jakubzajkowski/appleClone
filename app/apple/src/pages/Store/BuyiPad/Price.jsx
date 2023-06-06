import PropTypes from 'prop-types'
import { iPadPriceContex } from './iPadPricecontext' 
import { useContext } from 'react'

const Price=({price})=>{
    const {storageModify,displayModify} = useContext(iPadPriceContex)
    return `From $${price+storageModify.price+displayModify.price} or $${Math.floor((price+displayModify.price+storageModify.price)/12*100)/100}/mo.per month for 24 mo.months before trade‑inFootnote`
}


Price.propTypes={
    price : PropTypes.number
}

export default Price