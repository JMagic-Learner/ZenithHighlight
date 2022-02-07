import React, { useState } from 'react';
import Button from '@mui/material/Button';
export default function CPDecrement(props) {
  
    return (
        <Button variant="contained" onClick={props.onClickFunc} >Command Points (-) </Button> 
     
    )
  }

