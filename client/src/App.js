import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Typography } from '@mui/material';

import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Infinity from './pages/Infinity';
import Publish from './pages/Publish';
import Warhammer from './pages/Warhammer40k';
import Articles from './pages/Articles';
import Article1 from './pages/Article1';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logo from './assets/images/Zenith_Logo.jpg';


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
      <div className="banner">
        <img className="logo" src={Logo}/>
    <Typography variant="h3" className="Banner-Header">
      ZENITH HIGHLIGHT
      </Typography>
      </div>
    {/* <Card>
    <CardMedia
        component="img"
        width="150%"
        height="250"
        image="./assets/images/ZENITH_HIGHLIGHT_BANNER2.jpg"
        alt="green iguana"
      /> 
    </Card> */}
    
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
            <Route exact path="/Infinity">
              <Infinity  />
            </Route>
            <Route exact path="/Articles">
              <Articles  />
            </Route>
            <Route exact path="/Article1/:articleId">
              <Article1 />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/Publish">
              <Publish />
            </Route>
            <Route exact path="/Contact">
              <Contact />
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
