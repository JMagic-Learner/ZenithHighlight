import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

//Image Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function About() {
    return(
        
        <Box sx={{ flexGrow: 1 }}>

        <Typography variant="h3">
          <h1> Welcome to Zenith Highlight </h1>
        </Typography>
        <Card sx={4}>
       <CardMedia
        component="img"
        height="550"
        image="./assets/images/Lineup.jpg"
        alt="green iguana"
      /> 
      <CardContent>
        <Typography variant="h6">
          A collection of the finest gentlemen
        </Typography>
      </CardContent>
       </Card>
        
        <Typography variant="h4">
            <p>ZenithHighlight is a hobby website that showcases a local group of wargamers</p>
            
            <p>We love what we do, and we would love to share our techniques and art with you</p>
        </Typography>

        <Typography variant="h4">
          <h1> WARGAMING </h1>
              <li>
                Warhammer 40k
              </li>
              <li>
                Age of Sigmar
              </li>
              <li>
                Warmachine
              </li>
              
        </Typography>
      </Box>

        
    );
}

