import React from 'react'
import Statuscircle from './Statuscircle'

const Status = () => {
  return (
    <div className='min-h-[325px] bg-[#C2252E] flex flex-row justify-around items-center'>
        <Statuscircle />
        <Statuscircle />
        <Statuscircle />
    </div>
  )
}

export default Status