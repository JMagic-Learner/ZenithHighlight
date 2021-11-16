import * as React from 'react';
import { Typography } from '@mui/material';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Articles() {
    return(
     
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ p: 2.0 }} variant="h2"> Articles</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item> 11/15/2021</Item>
                <Item>
                <Link to="/Article1" >
                <Typography variant="h6">
                  Warhammer 40k - Being a Blood Angel Player in 9th Edition
                </Typography>
                </Link>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
            </Grid>
            <Typography variant="h6">
             Place Articles here
           </Typography>
          </Box>
           
        );
      }
        
          
          
          
       
         
        
        
