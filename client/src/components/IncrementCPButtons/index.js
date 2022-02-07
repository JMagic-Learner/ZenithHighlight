import React, { useState } from 'react';
import Button from '@mui/material/Button';
export function CPIncrement(props) {
  
   return (
    <Button variant="contained" onClick={props.onClickFunc} >Command Points (+) </Button> 
    //  <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    //  +1
    //  </button>
   )
}