import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function MediaCard() {
  return (
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/DaofeiExample.jpeg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ mx: "auto" }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}