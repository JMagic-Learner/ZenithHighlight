import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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




export default function MediaCard() {
  return (
    <ThemeProvider theme={theme}>
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
          Infinity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A Sci-Fi universe that incorporates cyberpunk , anime , and skirmish gameplay
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ mx: "auto" }}>Learn More</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}