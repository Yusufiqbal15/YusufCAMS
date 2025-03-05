'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Deshboard1 = () => {
  const [age, setAge] = React.useState('');  // Move the useState inside the component

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box height={50} />
      
        <div className='desh1 flex'>
          <h1 className='desh2'>Deshboard</h1>
          <span className="flex desh3 space-x-4">
          <span>
            date 
          </span>

          
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1<sup>st</sup></MenuItem>
                  <MenuItem value={20}>2<sup>nd</sup></MenuItem>
                  <MenuItem value={30}>3<sup>rd</sup></MenuItem>
                  <MenuItem value={40}>4<sup>th</sup></MenuItem>
                  <MenuItem value={50}>5<sup>th</sup></MenuItem>
                  <MenuItem value={60}>6<sup>th</sup></MenuItem>
                  <MenuItem value={70}>7<sup>th</sup></MenuItem>
                  <MenuItem value={80}>8<sup>th</sup></MenuItem>
                  <MenuItem value={90}>9<sup>th</sup></MenuItem>
                  <MenuItem value={100}>10<sup>th</sup></MenuItem>
                  <MenuItem value={110}>11<sup>th</sup></MenuItem>
                  <MenuItem value={120}>12<sup>th</sup></MenuItem>
                  
                </Select>
              </FormControl>
            </Box>
            </span>
         
          </div>
        
     
    </>
  );
};

export default Deshboard1;
