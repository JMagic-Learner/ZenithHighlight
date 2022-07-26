import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
mutation changePassword($username: String!, $email: String!, $password: String!) {
  changePasswordUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      password
    }
  }
}
`

export const ADD_ARTICLE = gql`
  mutation addArticle($articleAuthor: String!, $articleTitle: String!, $articleText1: String!, $articleText2: String!, $articleText3: String!, $articleText4: String!) {
    addArticle(articleAuthor: $articleAuthor, articleTitle: $articleTitle, articleText1: $articleText1, articleText2: $articleText2, articleText3: $articleText3, articleText4: $articleText4) {
      _id
      articleAuthor
      articleTitle
      articleText1
      articleText2
      articleText3
      articleText4
      createdAt
    }
  }`

// export const SAVE_EVENT = gql`
//   mutation saveEvent($eventId: ID!) {
//     saveEvent(eventId: $eventId) {
//       _id
//     }
//   }
// `;
// // Right after the user add comments save events to the user
// export const ADD_COMMENT = gql`
//   mutation addComment($eventId: ID!, $commentText: String!) {
//     addComment(eventId: $eventId, commentText: $commentText) {
//       _id
//       eventText
//       eventTitle
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
// export const EDIT_COMMENT = gql`
//   mutation editEventComment($commentId: ID!, $commentText: String!) {
//     editEventComment(_id: $commentId, commentText: $commentText) {
//       _id
//       commentText

//     }
//   }
// `
// export const REMOVE_COMMENT = gql`
//   mutation removeComment($eventId: ID!, $commentId: ID!) {
//     removeComment(eventId: $eventId, commentId: $commentId) {
//      _id
//     }
//   }
// `
