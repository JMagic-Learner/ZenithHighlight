import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
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


export default function Contact() {
    return(
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        
          <Typography sx={{ p: 2.0 }} variant="h2"> Contact</Typography>
    <Grid container spacing={2}> 
    
    <Grid item xs={4}>         
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
      <Button size="small" sx={{ mx: "auto" }} >
      <Link margin="auto" to="/Infinity"> Learn More</Link>
       </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>         
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
      <Button size="small" sx={{ mx: "auto" }} >
      <Link margin="auto" to="/Infinity"> Learn More</Link>
       </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={4}>         
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
      <Button size="small" sx={{ mx: "auto" }} >
      <Link margin="auto" to="/Infinity"> Learn More</Link>
       </Button>
      </CardActions>
    </Card>
    </Grid>
  
        </Grid>
        </Box>
        </ThemeProvider>
    )
}