const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Objectives {
    _id: ID
    category: String
    name: String
    priority: Int!
    priorityDescription: String
    description: String
    victoryPoints: [Int]!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    articles: [Article]!
  }

  type Article {
    _id: ID
    articleAuthor: String
    articleText1: String
    articleText2: String
    articleTitle: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  } 

  type Query {
    objectives: [Objectives]
    objectivesByName(name: String!): Objectives
    objectivesByCat(category: String!): [Objectives]
    users: [User]
    user(username: String!): User
    articles(username: String): [Article]
    article(articleId: ID!): Article
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addArticle(articleAuthor: String!, articleTitle: String!, articleText1: String!, articleText2: String!): Article
    #saveEvent(eventId: ID!): User
    #addComment(eventId: ID!, commentText: String!): Event
    # editEventComment(eventId: ID!, commentId: ID, commentText: String): Event
    # deleteEventComment(commentId: String): Event
    # removeEvent(eventId: ID!): Event
    #removeComment(eventId: ID!, commentId: ID!): User
  }
`;

module.exports = typeDefs;
