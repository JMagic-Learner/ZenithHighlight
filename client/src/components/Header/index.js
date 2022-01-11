import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useWindowDimensions from '../ViewWidth';

import Auth from '../../utils/auth';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid'; 



const Header = () => {

  const { height, width } = useWindowDimensions();
  console.log(height)
  console.log(width)
 

  const [widthState, setWidthState] = useState({
    widthState:"true"
    
  });

  const checkWidth = () => {
    if (width > 750) {
      widthState = "false"  
    }
    
};
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [state, setState] = React.useState({
    left: false,
    
  });

  const toggleDrawer = (left, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [left]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/">Home</Button>
          </ListItem>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/About">About</Button>
          </ListItem>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Gallery">Gallery</Button>
          </ListItem>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Articles">Articles</Button>
          </ListItem>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Publish">Publish</Button>
          </ListItem>
          <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Calendar">Calendar</Button>
          </ListItem>
         
      </List>
      <Divider />
      <List>
      <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Signup">Signup</Button>
          </ListItem>
          {Auth.loggedIn() ? (
             <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} onClick={logout}>Logout</Button>
          </ListItem>
          ) : ( 
            <ListItem>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Login">Login</Button>
          </ListItem>
          )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        {/* This is the hamburger icon */}
        <Toolbar>
          <Router>


        <div>
      {['left'].map((anchor) => (
        <React.Fragment key='left'>
          
          <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           
            
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
         

         
    <Grid container spacing={2}>
    <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/">Home</Button>
    </Grid>
    <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/About">About</Button>
    </Grid>
    <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Gallery">Gallery</Button>
    </Grid>
    <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Articles">Articles</Button>
    </Grid>
    {/* <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Publish">Publish</Button>
    </Grid> */}
    <Grid item xs={6} md={2}>
    <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Signup">Signup</Button>
    </Grid>
   
          
          {Auth.loggedIn() ? (
            <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} onClick={logout}>Logout</Button>
          </Grid>
          ) : ( 
            <Grid item xs={6} md={2}>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Login">Login</Button>
          </Grid>
          )}
          
          </Grid>     
       
          {/* /* <Button onClick={handleChange} color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} to={"/Gallery"}>Gallery</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Tutorials</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Articles</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Contact</Button>  */} 
          
          </Router>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
