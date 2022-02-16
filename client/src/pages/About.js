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
        
        <Typography variant="h4">
            <p>ZenithHighlight is a hobby website that is designed first and foremost for wargamers</p>
            <p>One of the things that we noticed in the tabletop wargaming hobby, is the lack of digital implementation</p>
            <p>To that end, Zenith Highlight aims to address three goals</p>
            
            <li> 1.) Translate text to digital mediums</li>
            <li> 2.) Be open resource for wargamers to utilize</li>
            <li> 3.) Showcase models, wargames and ideas from many wargame communities</li>

            <p> One of my current goals is to maintain an database of 40k 9th Edition objectives</p>
            <p> This initial goal transformed into making a Victory point tracker </p>
      
        </Typography>

       
      </Box>

        
    );
}

