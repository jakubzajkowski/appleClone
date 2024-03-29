import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MacPriceContext } from './MacPriceContext'

const styleMemBox={
    padding: '1rem',
    display: 'flex',
    margin: '1rem 0',
    border: '1px solid grey',
    borderRadius: '0.7rem',
    alignItems:'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
}
const styleMemHeader={
    fontSize: '1rem',
}

const StorageElement=({text,plus,price,pick,setPick})=>{
    const {setStorageModify} = useContext(MacPriceContext)
    const handleSelect=()=>{
        setPick({text: text,plus: plus})
        setStorageModify({price:Math.floor(price*plus),storage:text})
    }
    return <div onClick={handleSelect} className={(pick?.text==text) ? 'border border-primary' : ''} style={styleMemBox}><h5 style={styleMemHeader}>{text}</h5><p className='mt-2'>+ ${Math.floor(price*plus)}.00</p></div>
}

StorageElement.propTypes={
    text: PropTypes.string,
    plus: PropTypes.number,
    price: PropTypes.number,
    pick: PropTypes.any,
    setPick: PropTypes.any,
}

export default StorageElement