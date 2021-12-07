import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MediaCard from '../components/MediaCard';
import MediaCardWarhammer from '../components/MediaCardWarhammer';
import MediaCardKDM from '../components/MediaCardKDM';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// import Carousel1 from '../components/Carousel';




export default function Home() {
    return(
        
        <Box sx={{ flexGrow: 1 }}>


       
      {/* <Carousel1 /> */}
     
     
<Card>
<CardMedia
        component="img"
        height="550"
        image="./assets/images/Banner_Lower2.jpg"
        alt="green iguana"
      /> 
      
      

      <CardContent>
        <Typography variant="h6">
          Kingdom Death - Ringtail Vixen (Halloween)
        </Typography>
      </CardContent>
       </Card>

       <Typography variant="h4">
            <p> Hello, this is a collection of miniatures from artists local to your area</p>
        </Typography>
          
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <MediaCard/>
          </Grid>
          <Grid item xs={4}>
          <MediaCardWarhammer/>
          </Grid>
          <Grid item xs={4}>
          <MediaCardKDM/>
          </Grid>
        </Grid>

      </Box>

        
    );
}

