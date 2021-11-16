import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Warhammer() {
    return(
        <Box sx={{ flexGrow: 1 }}>
          
          <Typography sx={{ p: 2.0 }} variant="h2"> Warhammer 40k - 9th Edition</Typography>
          
        <Card>
        <CardMedia
                component="img"
                height="550"
                image="./assets/images/DeathCompany3.jpg"
                alt="Death Company"
              /> 
              <CardContent>
                <Typography variant="h6">
                 Death Company - Warhammer 40k
                </Typography>
              </CardContent>
               </Card>

            <Typography variant="h6">
              Released in August 2020, the 9th iteration of Warhammer 40k was designed to uproot problems 
            </Typography>
        
        </Box>
    )
}