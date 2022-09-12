import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Carousel from "../components/Carousel"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import image1 from '../assets/images/DaofeiExample.jpeg'

const buttonStyle = createTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#ffb300',
      dark: '#fafafa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {

  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={8} md={12} lg={12}>
          <div className="margin-top-1">
          <Typography   variant="h2" align='center'>
            Welcome to Zenith Highlight
          </Typography>
          </div>
 
        </Grid>



        <Box className="text-align-left about-paragraph margin-top-1">
          <img className="about-image" src={image1}/>
          <div>
          <Typography variant="h8">
          ZenithHighlight is a hobby website that is designed to showcase painting and provide wargame utilties to hobbyists. Users can sign up, login, and post their articles regarding the wargaming hobby. Furthermore, users can utilize the 40k 9th Edition scoring utility to help keep track of 9th Edition Matched Play matches.
          Overall, Zenith Highlight aims to continue providing and developing digital applications for public and open source use. 
          </Typography>
          <br></br>   <br></br>
          <Typography variant="h8">
         Zenith Highlight currently showcases the following hobbies;

          </Typography>
          
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Button component={Link } href="https://warhammer40000.com/"><ListItemText primary="Warhammer 40k" /></Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <Button component={Link } href="https://kingdomdeath.com/"><ListItemText primary="Kingdom Death" /></Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button component={Link } href="https://www.catalystgamelabs.com/brands/battletech"> <ListItemText primary="Battletech" /></Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                <Button component={Link } href="https://infinitytheuniverse.com/games/infinity"><ListItemText primary="Infinity"/></Button>
            </ListItemButton>
          </ListItem>
        </List>
          <Typography variant="h8">
          Zenith Highlight was started in 2019 using traditional HTML, CSS, and Javascript. 
          This website was later reinitialized using the React, MongoDB, Express and Node.JS in order to modernize the UI and to provide greater utility. 
          Future plans include adding and expanding upon the Gallery, and improving on the existing Carousel component found within the Client directory
          </Typography>
          </div>
        </Box>

        {/* <Grid item sx={12} md={12} lg={12}>

          <Carousel/>

        </Grid> */}


      </Grid>
    </Box>


  );
}

