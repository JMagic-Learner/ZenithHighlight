import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Header() {
    return (
        <Box>
            <Typography variant="h1" component="div" sx={{ flexGrow: 3 }}>
            Zenith Highlight
          </Typography>
        </Box>
    );
}