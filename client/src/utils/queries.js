import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      events {
        _id
        eventText
        eventTitle
      }
    }
  }
`;

export const QUERY_ARTICLES = gql`
  query getArticles {
    articles {
      _id
      articleText1
      articleText2
      articleAuthor
      articleTitle
      createdAt
      
    }
  }
`;

export const QUERY_SINGLE_ARTICLE = gql`
  query getSingleArticle($articleId: ID!) {
    article(articleId: $articleId) {
      _id
      articleText1
      articleText2
      articleAuthor
      articleTitle
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      articles{
        _id
      articleText1
      articleText2
      articleAuthor
      articleTitle
      createdAt
    }
    }
  }
`;
