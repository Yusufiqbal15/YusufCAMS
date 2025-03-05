'use client';
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';


const Deshboard2 = () => {
  return (
    
    <div className='flex flex-wrap justify-center  gap-4 pt-5'>
      <div className='w-full sm:w-[30%]  text-center p-6  div'> 
      <span className='de'> <SchoolIcon/></span>
      <h4 className='i'>Total Student</h4>
      <h4 className='i'>50</h4>
      
      
      </div>



      <div className='w-full sm:w-[30%]  text-center p-6 div'>
      <span className='de'> <MovingIcon/> </span>
      <h1 className='i'>Total Present</h1>
      <h4 className='i'>86.3%</h4>
     
      </div>




      <div className='w-full sm:w-[30%]  text-center p-6 div'>
        <span className='de'><TrendingDownIcon/></span>
      <h4 className='i'>Total Absent</h4>
      <h4 className='i'>13.7%</h4>
   
      </div>
     
      
    </div>

   
    

  )
}

export default Deshboard2

