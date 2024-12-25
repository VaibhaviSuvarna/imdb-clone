import React from 'react'

const Pagination = ({handlePrev,handleNext,pageNo}) => {
  return (
    <div className='
    bg-gray-400 mt-8 p-4 flex justify-center'>
        <div onClick={handlePrev} className='px-8 '><i class="fa-solid fa-arrow-left"></i></div>
       <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination