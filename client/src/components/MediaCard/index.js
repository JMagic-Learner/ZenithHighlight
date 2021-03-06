import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';


const theme = createTheme({
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
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