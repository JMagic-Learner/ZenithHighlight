import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const author = "Testing"
const title = "Load this Title from MongoDB"
const paragraph1 = "This is the first paragraph loaded from MongoDB"
const paragraph2 = "This is the second paragraph loaded from MongoDB"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Article1() {
    return(
     
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4"> {title} </Typography>

            <Divider sx={{ p: 5.0 }}>  AUTHOR - {author} </Divider>

            <Typography >

              {paragraph1}

              <Divider sx={{ p: 2.0 }}>  </Divider>

              {paragraph2}
              
            </Typography>
            
          </Box>
           
        );
      }