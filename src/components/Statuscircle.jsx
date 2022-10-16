import React from 'react'

const Statuscircle = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-[200px] w-[200px] bg-[#AD232B] rounded-full flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-white'>1200+</p>
            <p className='text-xl mt-2 text-white'>Donations</p>
        </div>
        <div className='min-h-[3px] max-w-[80px] mt-4 ml-[28%] bg-white'></div>
    </div>
  )
}

export default Statuscircle