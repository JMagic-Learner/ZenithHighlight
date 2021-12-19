import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from '../../utils/auth';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Router>
          
         
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
