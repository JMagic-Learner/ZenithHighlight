import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { ADD_ARTICLE} from '../../utils/mutations';
import { QUERY_ARTICLES, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ArticleForm = () => {
const [articleTitle, setArticleTitle] = useState('');
  const [articleText1, setArticleText1] = useState('');
  const [articleText2, setArticleText2] = useState('');

   const [characterCount, setCharacterCount] = useState(0);

  const [addArticle, { error }] = useMutation(ADD_ARTICLE, {
    update(cache, { data: { addArticle } }) {
      try {
        const { articles } = cache.readQuery({ query: QUERY_ARTICLES });

        cache.writeQuery({
          query: QUERY_ARTICLES,
          data: { article: [addArticle, ...articles] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, articles: [...me.articles, addArticle] } },
      });
    },
  });

   const handleFormSubmit = async (event) => {
     event.preventDefault();

    try {
       const { data } = await addArticle({
         variables: {
           articleText1,
           articleText2,
           articleAuthor: Auth.getProfile().data.username,
           articleTitle,
         },
       });
       setArticleTitle('');
       setArticleText1('');
       setArticleText2('');
      } catch (err) {
        console.error(err);
      }
   };

  const handleChange = (event) => {
     const { name, value } = event.target;

     if (name === 'articleTitle' && value.length <= 200) {
        setArticleTitle(value);
          setCharacterCount(value.length);
        }
    if (name === 'articleText1' && value.length <= 500) {
     setArticleText1(value);
       setCharacterCount(value.length);
     }

    if (name === 'articleText2' && value.length <= 500) {
        setArticleText2(value);
        setCharacterCount(value.length);
    }
   };

  return (
    <Box 
    component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <Typography variant='h3'>Lets add an article to the database</Typography>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
               characterCount === 500 
              //  || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/500
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
              <div className="col-12 col-lg-9">
              <TextField
                name="articleTitle"
                placeholder="Write the Title"
                value={articleTitle}
                // className="form-input w-100"
                variant="outlined"
                onChange={handleChange}
              ></TextField>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="articleText1"
                placeholder="Write the first / introductory paragraph"
                value={articleText1}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="articleText2"
                placeholder="Write the second/ concluding paragraph"
                value={articleText2}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
               Add Article
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your experience. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
       
    </Box>
  ); 
  
};

export default ArticleForm;
