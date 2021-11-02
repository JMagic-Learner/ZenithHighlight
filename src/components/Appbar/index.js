import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {

 
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      window.location.reload(false);
    }

  function refreshPage() {
    window.location.reload(false);
  }

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
          
          <Button onClick={handleChange} color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} to={"/"}>Home</Button>
          <Button onClick={handleChange} color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} to={"/About"}>About</Button>
          <Button onClick={handleChange} color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} to={"/Gallery"}>Gallery</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Tutorials</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Articles</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Contact</Button>
          
          </Router>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}

  