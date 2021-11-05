import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function MediaCardKDM() {
  return (
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/ParadeDaemonPrince1.jpg"
        alt="green iguana"
      /> 
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kingdom Death: Monster
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A dark world as imagined by Adam Poots. Visually stunning models combined with a aspect of nightmare horror
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ mx: "auto" }} >Learn More</Button>
      </CardActions>
    </Card>
  );
}