import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';






const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  console.log(props)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("handleChange has been triggered");
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('You have submited a login attempt');
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
        
      });


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log('You have submited a login attempt');
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { 
  //        email: formState.email,
  //        password: formState.password
  //        },
        
  //     });

     Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Box className="Login-Container">
  
          <h4>Login</h4>
          <Box className="Inner-Container">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="email-login">
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                </div>
                <div className="email-login">
                <input
                   
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  
                />
                </div>
                <Button
                  variant="h6"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            )}

          
          </div>
          </Box>
          {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </Box>

  );
};

export default Login;
