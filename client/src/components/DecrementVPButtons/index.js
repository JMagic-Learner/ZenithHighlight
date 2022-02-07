import React, { useState } from 'react';
import Button from '@mui/material/Button';
export default function VPDecrement(props) {
  
    return (
        <Button variant="contained" onClick={props.onClickFunc} >Victory Points (-) </Button> 
     
    )
  }

