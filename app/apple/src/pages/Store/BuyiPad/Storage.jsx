/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import StorageElement from './StorageElement'
import { storage128GBList } from './storageList'


const Storage=({price})=>{
    const [pick,setPick]= useState(null)
        return <div style={{margin:'0 0 15rem 0'}} className='w-75'>
            <h4>Storage. How much space do you need?</h4>
           {storage128GBList.map(mem=><StorageElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
        </div>
}

Storage.propTypes={
    price: PropTypes.number,
}

export default Storage