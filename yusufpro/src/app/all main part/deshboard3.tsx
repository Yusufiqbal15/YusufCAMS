import React from 'react'
import Charta from './chart1'
import Chartb from './chart2'

const Deshboard3 = () => {
  return (
    <div className='flex chart1'>
      <div  className='chart2 w-full sm:w-[50%] '>
        <h1 className='ts'>Attendance </h1>
        <Charta/></div>
      <div  className='chart2 w-full sm:w-[50%] '>
      <h1 className=' ts ts1'>Monthly Attendance </h1>
        <Chartb/></div>
    </div>
  )
}

export default Deshboard3
