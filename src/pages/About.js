import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function About() {
    return(
        
        <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">
            <p> ABOUT PAGE</p>
        </Typography>
      </Box>

        
    );
}

