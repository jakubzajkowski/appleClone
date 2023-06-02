/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import StorageElement from './StorageElement'
import { storage2TBList,storage8TBList } from './storageList'


const Storage=({storage,price})=>{
    const [pick,setPick]= useState(null)
    if (storage=='2TB'){
        return <div>
           {storage2TBList.map(mem=><StorageElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
        </div>
    }

    else{
        return <div>
            {storage8TBList.map(mem=><StorageElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
        </div>
    }
}

Storage.propTypes={
    storage: PropTypes.number,
}

export default Storage