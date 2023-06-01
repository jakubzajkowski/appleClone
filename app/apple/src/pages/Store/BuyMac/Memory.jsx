/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useState } from 'react'
import MemoryElement from './MemoryElement'
import { memory24List,memory16List,memory96List } from './memoryList'


const Memory=({memory,price})=>{
    const [pick,setPick]= useState(null)
    if (memory==24){
        return <div>
           {memory24List.map(mem=><MemoryElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
        </div>
    }
    else if (memory==96){
        return <div>
            <div>
                {memory96List.map(mem=><MemoryElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
            </div>
        </div>
    }
    else{
        return <div>
            {memory16List.map(mem=><MemoryElement pick={pick} setPick={setPick} key={mem.text} plus={mem.plus} price={price} text={mem.text}/>)}
        </div>
    }
}

Memory.propTypes={
    memory: PropTypes.number,
}

export default Memory