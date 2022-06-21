import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//Image Components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


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

  let picturePosition = 0;
  let pictureArray = [
    '../assets/images/BloodAngelsLineup.jpg', 
    '../assets/images/AssaultIntercessor.jpg', 
    '../assets/images/yujing.jpg', 
    '../assets/images/TifaExpo.jpeg', 
    "../assets/images/ParadeMortisContemptor2.jpg"
    ];

export default function About() {
 

  
let [pictureState, pictureDisplay] = React.useState("../assets/images/BloodAngelsLineup.jpg");

// M<Y OWN UNIQUE CODE FOR REACTF CAROUSEL
let scrollForward =async (event) => {
  if (picturePosition > pictureArray.length - 1) {
    picturePosition=0;
   }
  console.log( pictureArray[picturePosition]);
  pictureState = pictureDisplay(pictureArray[picturePosition]);
  picturePosition++;
  
};

let scrollBack =async (event) => {
  if (picturePosition < 0) {
    picturePosition=pictureArray.length - 1;
   }
  console.log( pictureArray[picturePosition]);
  pictureState = pictureDisplay(pictureArray[picturePosition]);
  picturePosition--;
  

};
    return(
        
        <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2} align="center" >
       <Grid item sx={8} md={12} lg={12}>
        <Typography variant="h3" align='center'>
           Welcome to Zenith Highlight 
        </Typography>
        </Grid>
        <Grid item sx={12} md={12} lg={12}>
 
        
        <Card  >
       <CardMedia
        component="img"
        height="600"
        image={pictureState}
        alt="a list of pictures"
      /> 
    </Card>
    < ArrowBackIosIcon variant="contained" onClick={scrollForward} sx={{ fontSize: 50 }}   > Scroll Through Forwards</ArrowBackIosIcon>
    < ArrowForwardIosIcon variant="contained" onClick={scrollBack} sx={{ fontSize: 50 }} > Scroll Through BAckwards </ ArrowForwardIosIcon>

        </Grid>
       
        <Grid item sx={12} md={12} lg={12}>
        <Typography variant="h8" align="center">
            <p>ZenithHighlight is a hobby website that is designed first and foremost for wargamers</p>
            <p>One of the things that we noticed in the tabletop wargaming hobby, is the lack of digital implementation</p>
            <p>To that end, Zenith Highlight aims to address three goals</p>
            
            <li> 1.) Translate text to digital mediums</li>
            <li> 2.) Be open resource for wargamers to utilize</li>
            <li> 3.) Showcase models, wargames and ideas from many wargame communities</li>

            <p> One of my current goals is to maintain an database of 40k 9th Edition objectives</p>
            <p> This initial goal transformed into making a Victory point tracker </p>
         
        </Typography>
        </Grid>
        </Grid>   
      </Box>

        
    );
}

