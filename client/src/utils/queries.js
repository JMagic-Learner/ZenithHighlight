import { gql } from '@apollo/client';


export const QUERY_OBJECTIVES = gql`
  query getObjectives {
    objectives {
      _id
      category
      name
      priority
      priorityDescription
      description
      victoryPoints
    }
  }`

  export const QUERY_NAME_OBJECTIVES = gql`
  query objectivesByName($name: String!) {
    objectivesByName(name: $name){
      _id
      category
      name
      priority
      priorityDescription
      description
      victoryPoints
    }
  }`

  export const QUERY_CAT_OBJECTIVES = gql`
  query objectivesByCat($category: String!) {
    objectivesByCat(category: $category) {
      _id
      category
      name
      priority
      priorityDescription
      description
      victoryPoints
    }
  }`


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
