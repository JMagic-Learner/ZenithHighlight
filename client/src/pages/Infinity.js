import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Infinity() {
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

            <Typography variant="h6">
            Infinity N4 - Warcor
            </Typography>
        
        </Box>
    )
}