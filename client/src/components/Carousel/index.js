import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Grid';
let picturePosition = 0;
let pictureArray = [
    '../assets/images/BloodAngelsLineup.jpg',
    '../assets/images/AssaultIntercessor.jpg',
    '../assets/images/yujing.jpg',
    '../assets/images/TifaExpo.jpeg',
    "../assets/images/ParadeMortisContemptor2.jpg"
];

const Carousel = () => {
   
   

    let [pictureState, pictureDisplay] = useState("../assets/images/BloodAngelsLineup.jpg");

    const scrollForward =async (event) => {
        if (picturePosition > pictureArray.length - 1) {
          picturePosition=0;
         }
        console.log( pictureArray[picturePosition]);
        pictureDisplay(pictureArray[picturePosition]);
        picturePosition++;
        
      }

    const scrollBack =async (event) => {
        if (picturePosition < 0) {
          picturePosition=pictureArray.length - 1;
         }
        console.log( pictureArray[picturePosition]);
        pictureDisplay(pictureArray[picturePosition]);
        picturePosition--;
    }

    return (
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
    )
}

export default Carousel