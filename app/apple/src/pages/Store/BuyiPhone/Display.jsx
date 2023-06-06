/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { iPhonePriceContex } from './iPhonePriceContex'
import { useContext } from 'react'

const styleBox={
    padding: '1rem',
    width:'75%',
    display: 'flex',
    margin: '1rem 0',
    border: '1px solid grey',
    borderRadius: '0.7rem',
    alignItems:'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
}

const Display=({display,price,device_name})=>{
    const {setDisplayModify} = useContext(iPhonePriceContex)
    const [pick,setPick]= useState({text: '',plus: ''})
    const handleSelect=(text,plus)=>{
        setPick({text: text,plus: plus})
        setDisplayModify({price:Math.floor(price*plus),storage:text})
    }
    if (display?.slice(5,7)=='or'){
        return <div style={{margin:'0 0 15rem 0'}} >
           <h4>Model. Which is best for you?</h4>
            <div>
                <div style={styleBox} onClick={()=>handleSelect(display.slice(8,50),0)} className={(pick?.text==display.slice(8,50)) ? 'border border-primary' : ''}><div><h5 style={{fontSize:'1rem'}}>{device_name}</h5><p style={{fontSize:'0.9rem'}}>{display.slice(8,50)}</p></div><p style={{fontSize:'0.9rem'}}>{`From $${price} or $${Math.floor((price)/12*100)/100}/mo.per month for 24 mo.months before trade‑inFootnote`}</p></div>
                <div style={styleBox} onClick={()=>handleSelect(display.slice(0,5),0.1)} className={(pick?.text==display.slice(0,5)) ? 'border border-primary' : ''}><div><h5 style={{fontSize:'1rem'}}>{device_name}</h5><p style={{fontSize:'0.9rem'}}>{display.slice(0,5)}{display.slice(12,50)}</p></div><p style={{fontSize:'0.9rem'}}>{`From $${price+Math.floor(price*0.1)} or $${Math.floor((price+Math.floor(price*0.1))/12*100)/100}/mo.per month for 24 mo.months before trade‑inFootnote`}</p></div>
            </div>
        </div>
    }
    else{
        return <div style={{margin:'0 0 15rem 0'}}>
            <h4>Model. Which is best for you?</h4>
            <div>
                <div style={styleBox} onClick={()=>handleSelect(display?.slice(8,50),0)} className={(pick?.text==display?.slice(8,50)) ? 'border border-primary' : ''}><div><h5 style={{fontSize:'1rem'}}>{device_name}</h5><p style={{fontSize:'0.9rem'}}>{display}</p></div><p style={{fontSize:'0.9rem'}}>{`From $${price} or $${Math.floor((price)/12*100)/100}/mo.per month for 24 mo.months before trade‑inFootnote`}</p></div>
            </div>
        </div>
    }
}

Display.propTypes={
    display: PropTypes.string,
    priceL: PropTypes.string,
    device_name:PropTypes.string,
}

export default Display