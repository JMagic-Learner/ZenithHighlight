import React, { useState } from 'react';
import Button from '@mui/material/Button';
export default function ButtonDecrement(props) {
  
    return (
        <Button variant="contained" onClick={props.onClickFunc} >Round (-) </Button> 
     
    )
  }

