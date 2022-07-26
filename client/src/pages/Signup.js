import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Auth from '../utils/auth';
import Box from '@mui/material/Box';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("HandleFormSubmit has been triggered");
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
    // try {
    //   const { data } = await addUser({
    //     variables: { 
    //       username: formState.name,
    //       email: formState.email,
    //       password: formState.password,
    //      },
    //   });
      console.log("We have attempted to wait for addUser");
      console.log('This is the formstate ' + formState);
      console.log(formState.name);
      console.log(formState.password);
      console.log(formState.email);
      
      Auth.login(data.addUser.token);
    } catch (e) {
      console.log("An error has been logged");
      console.error(e);
    }
  };

  return (
    <Box className="Login-Container">
        <Box className="Inner-Container">
          <Typography variant="h4" className="card-header bg-dark text-light p-2">Sign Up</Typography>
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
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                </div>
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
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            )}

           
          </div>
            </Box>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                <p>An error has been detected</p> 
                {error.message}
              </div>
            )}
    </Box>
  );
};

export default Signup;
