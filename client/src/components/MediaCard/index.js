import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';


export default function MediaCard(props) {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={4}>
       <CardMedia
        component="img"
        height="400"
        image={props.imageSource}
        alt="image is passed through props"
      /> 
      {/* <Image src="./assets/images/AssaultIntercessor.jpg" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Infinity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" sx={{ mx: "auto" }} >
      <Link margin="auto" to={props.linkAddress}> Learn More</Link>
       </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}