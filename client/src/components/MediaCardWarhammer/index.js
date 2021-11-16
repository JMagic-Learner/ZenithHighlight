import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';





export default function MediaCardWarhammer() {
  return (
    
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image="./assets/images/AssaultIntercessor.jpg"
        alt="green iguana"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Warhammer 40k
        </Typography>
        <Typography variant="body2" color="text.secondary">
         A bleak future, where there is only war. 
        </Typography>
      </CardContent>
      <CardActions>
        
      <Button size="small" sx={{ mx: "auto" }} >
      <Link margin="auto" to="/Warhammer"> Learn More</Link>
       </Button>
        
      </CardActions>
    </Card>
    
  );
}