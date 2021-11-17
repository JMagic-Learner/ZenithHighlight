
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';



import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ButtonAppBar from './components/Appbar';
import Warhammer from './pages/Warhammer40k';
import Articles from './pages/Articles';
import Article1 from './pages/Article1';
import Login from './pages/Login';
import Signup from './pages/Signup';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



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


function App() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
        <Header/>
        
        {/* <ButtonAppBar/> */}
        <div className = "content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/About">
              <About />
            </Route>
            <Route  exact path="/Gallery">
              <Gallery />
            </Route>
            <Route exact path="/Warhammer">
              <Warhammer  />
            </Route>
            <Route exact path="/Articles">
              <Articles  />
            </Route>
            <Route exact path="/Article1">
              <Article1 />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
