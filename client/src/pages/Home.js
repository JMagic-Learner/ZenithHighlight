import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MediaCard from '../components/MediaCard';
import Carousel from '../components/Carousel';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




export default function Home() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={8} md={12} lg={12} >

          {/* <Carousel/> */}

          <Card>
            <CardMedia
              component="img"
              height sx={8} md={12} lg={12}
              image="./assets/images/ZenithHighlightTemplate2.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h6">
                Recent Works
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h4">
            <p> Hello, this is a collection of miniatures from artists local to your area</p>
          </Typography>

          <Grid container spacing={2}>
            {/* <Grid item xs={4}>
              <MediaCard 
                title="Infnity"
                description="A Sci-Fi universe that incorporates cyberpunk , anime , and skirmish gameplay"
                imageSource="./assets/images/DaofeiExample.jpeg"
                linkAddress="/Infinity"/>
            </Grid> */}
            <Grid item xs={6}>
             <MediaCard
                title="Warhammer40k"
                description="Objective Tracker and Scoring Utility - Nachmund"
                imageSource="./assets/images/AssaultIntercessor.jpg"
                linkAddress="/Warhammer"/>
            </Grid>
            <Grid item xs={6}>
            <MediaCard
                title="Gallery"
                description=" Gallery"
                imageSource="./assets/images/ParadeDaemonPrince1.jpg"
                linkAddress="/Gallery"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>


  );
}

