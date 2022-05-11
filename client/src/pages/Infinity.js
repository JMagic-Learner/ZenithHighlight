import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

import { Avatar } from '@mui/material';



let regularOrder = 10;
let regularOrderArray = [];
let irregularOrder = 0;
let coordinatedOrder = 4;
let lieutenantOrder= 1;
let impetuousOrder = 0;


export default function Infinity() {

// Add orders to a array, then we will for each and make a list of orders"
const generateOrders = async event => {
  for (let i=1; i< regularOrder; i++) {
    console.log("the " + i +"th order has been generated");
    regularOrderArray.unshift("regularOrder");
  }
  console.log(regularOrderArray);
}
    return(
        <Box sx={{ flexGrow: 1 }}>
          
          <Typography sx={{ p: 2.0 }} variant="h2"> Infinity N4</Typography>
          
        <Card>
        <CardMedia
                component="img"
                height="550"
                image="./assets/images/ZENITH_HIGHLIGHT_BANNER2.jpg"
                alt="LIST"
              /> 
              <CardContent>
                <Typography variant="h6">
                 Infinity Roster
                </Typography>
              </CardContent>
               </Card>

              <Button onClick={generateOrders}> Generate Orders</Button>

            <Typography variant="h6">
            Infinity N4 - Warcor
            </Typography>
        
        </Box>
    )
}