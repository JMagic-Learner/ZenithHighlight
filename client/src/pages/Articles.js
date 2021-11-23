import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ARTICLES } from '../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Articles() {
  const { loading, data } = useQuery(QUERY_ARTICLES);
  const articles = data?.articles || [];
    return(

          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ p: 2.0 }} variant="h2"> Articles</Typography>
            <Grid container spacing={2}>

            {articles.map((element) => {
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item> {element.createdAt}</Item>
                <Item> {element._id}</Item>
                <Item>
                <Link to="/Article1" >
                <Typography variant="h6">
                {element.articleTitle}
                </Typography>
                </Link>
                </Item>
              </Grid>
            })
          }
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
              <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
                <Item>Test</Item>
              </Grid>
            </Grid>
            <Typography variant="h6">
             Place Articles here
           </Typography>
          </Box>
           
        );
      }
        
          
          
          
       
         
        
        