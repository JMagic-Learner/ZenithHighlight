import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ARTICLE} from '../utils/queries';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Article1 = () => {
  // We first capture the parameter being fed from Articles.js 
  const { articleId } = useParams();
  let idContainer = ""
  const [renderComment, commentState] = useState('false');

  const { loading, data } = useQuery(QUERY_SINGLE_ARTICLE, {
    // pass URL parameter
    // We are searching for a single ARTICLE, using the paramter passed through by Articles.js
    variables: { articleId: articleId },
  });

  // We are going to check to see if QUERY_SINGLE_ARTICLE has returned a value
  // If DATA, then drill into ARTICLE
  const articleData = data?.article || {};
  if (articleData) {
    console.log("QUERY_SINGLE_ARTICLE has found a article matching the param id");
  }
  if (articleData._id) {
    console.log("QUERY_SINGLE_ARTICLE has found " + articleData._id + " as the value of _id");
    idContainer = articleData._id;
    console.log(typeof idContainer, idContainer);
  }
  if (articleData.articleTitle) {
    console.log("QUERY_SINGLE_ARTICLE has found " + articleData.articleTitle + " as the value of title");
  }
  if (articleData.articleAuthor) {
    console.log("QUERY_SINGLE_ARTICLE has found " + articleData.articleAuthor + " as the value of author");
  }
  if (loading) {
    return <div>Loading...</div>;
  }


    return(
     
          <Box sx={{ flexGrow: 1 }}>
            <Grid>
              <Grid item xs={12} sm={6} md={8} align="center" margin="auto">

              <Card>
        <CardMedia
                component="img"
                height="550"
                image={"../assets/images/" + idContainer + ".jpg"}
                alt="IMAGE"
              /> 
              <CardContent>
                <Typography variant="h6">
                {articleData.articleTitle}
                </Typography>
              </CardContent>
               </Card>
            
            <Typography variant="h4"> {articleData.articleTitle} </Typography>

            <Divider sx={{ p: 5.0 }}>  AUTHOR - {articleData.articleAuthor} </Divider>


            <Typography >

              {articleData.articleText1}

              <Divider sx={{ p: 2.0 }}>  </Divider>

              {articleData.articleText2}
              
            </Typography>
            </Grid>
            </Grid>
          </Box>
           
        );
      }

      export default Article1;