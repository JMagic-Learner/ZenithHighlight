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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



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
         

         
          <Box>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/">Home</Button>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/About">About</Button>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Gallery">Gallery</Button>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Articles">Articles</Button>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Publish">Publish</Button>
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Signup">Signup</Button>
          
          {Auth.loggedIn() ? (
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} onClick={logout}>Logout</Button>
          ) : ( 
          <Button color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} href="/Login">Login</Button>
          )}
          </Box>
        
       
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
