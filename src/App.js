
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';



import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import ButtonAppBar from './components/Appbar';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
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
          {/* <Button onClick={handleChange} color="inherit" variant="h6" component={Link} sx={{ flexGrow: 1 }} to={"/Gallery"}>Gallery</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Tutorials</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Articles</Button>
          <Button onClick={refreshPage} color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>Contact</Button>  */}
          
          </Router>
        </Toolbar>
      </AppBar>
    </Box>
        {/* <ButtonAppBar/> */}
        <div className = "content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/About">
              <About />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
