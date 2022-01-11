import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { ADD_ARTICLE} from '../../utils/mutations';
import { QUERY_ARTICLES, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

let CHECK = false;

const ArticleForm = () => {

  // The follow three useStates record, and detect changes in text boxes" //
  const [articleTitle, setArticleTitle] = useState('');
  const [articleText1, setArticleText1] = useState('');
  const [articleText2, setArticleText2] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  // We are going to ping REACT, mutation to add an Article.
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

      if (me ) {
         CHECK = true;
      }
    },
  });

// The following function waits for an submission event // 
  const handleFormSubmit = async (event) => {
     event.preventDefault();
     console.log("you have attempted to submit an article");

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

// Handle Change is an function that renders/ and limits the available text // 
  const handleChange = (event) => {
     const { name, value } = event.target;

     if (name === 'articleTitle' && value.length <= 200) {
        setArticleTitle(value);
          setCharacterCount(value.length);
        }
    if (name === 'articleText1' && value.length <= 5000) {
     setArticleText1(value);
       setCharacterCount(value.length);
     }

    if (name === 'articleText2' && value.length <= 5000) {
        setArticleText2(value);
        setCharacterCount(value.length);
    }
   };



  return (
    <Box>
      <Typography variant='h3'>Lets add an article to the database</Typography>
      {/* Check to see if user is logged in */}
      {Auth.loggedIn() ? (
        <>
        
          <p
            className={`m-0 ${
               characterCount === 10000 
              //  || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/10000
          </p>
          
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
              <div>
              <textarea
                name="articleTitle"
                placeholder="Title"
                value={articleTitle}
                className="form-input w-500"
                style={{ height: "75%", width: "75%" ,lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <textarea
                name="articleText1"
                placeholder="Write the first / introductory paragraph"
                value={articleText1}
                className="form-input w-500"
                style={{ height: "75%", width: "75%" ,lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <textarea
                name="articleText2"
                placeholder="Write the second/ concluding paragraph"
                value={articleText2}
                className="form-input w-500"
                style={{ height: "75%", width: "75%" ,lineHeight: '1', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button className="btn btn-primary btn-block py-3" type="submit">
               Add Article
              </button>
            </div>
            {/* {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message} 
                 </div>*/}
                {CHECK && (
                <div className="col-12 my-3 bg-danger text-white p-3">
                <p> We have submitted an article</p>
                 </div>  
            )}
          </form>
        </>
      ) : (

      // If the user is not logged in, this else will render the following message // 
        <p>
          You need to be logged in to share your experience. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
       
       </Box>
  ); 
  
};

export default ArticleForm;
