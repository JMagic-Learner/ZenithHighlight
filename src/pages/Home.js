import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MediaCard from '../components/MediaCard';
import MediaCardWarhammer from '../components/MediaCardWarhammer';


export default function Home() {
    return(
        
        <Box sx={{ flexGrow: 1 }}>
          
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <MediaCard/>
          </Grid>
          <Grid item xs={4}>
          <MediaCardWarhammer/>
          </Grid>
          <Grid item xs={4}>
          <MediaCard/>
          </Grid>
        </Grid>



        <Typography variant="h4">
            <p> Hello, this is a collection of miniatures from artists local to your area</p>
        </Typography>
      </Box>

        
    );
}

