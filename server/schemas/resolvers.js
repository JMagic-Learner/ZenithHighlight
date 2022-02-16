const { AuthenticationError } = require('apollo-server-express');
const { User, Article, Objectives } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    objectives: async () => {
      return Objectives.find().sort({"category":-1});
      
    },
    objectivesByName: async (parent, {name}) => {
      return Objectives.findOne({name});
    },
    objectivesByCat: async (parent, {category}) => {
      return Objectives.find({category});
    },
    users: async () => {
      return User.find().populate('article');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('articles');
    },
    articles: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Article.find(params).sort({ createdAt: -1 });
    },
    article: async (parent, { articleId }) => {
      return Article.findOne({ _id: articleId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('articles');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("username is " + username);
      console.log("email is " + username);
      console.log("password is " + password);
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addArticle: async (parent, {articleAuthor, articleTitle, articleText1, articleText2}) => {
      const article = await Article.create({ articleAuthor, articleTitle, articleText1, articleText2 });
      return article;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

  //  saveEvent: async (parent, { eventId,  }, context) => {
  //     if (context.user) {
  //        const updatedUser = await User.findOneAndUpdate(
  //             {_id: context.user._id },
  //             { $addToSet: {events: eventId }},
  //             { new: true} );

  //           return updatedUser;
  //        }
  //        throw new AuthenticationError("You are not logged");
  //       },
    
    
//     addComment: async (parent, { eventId, commentText }, context) => {
//       if (context.user) {
//         return Article.findOneAndUpdate(
//           { _id: eventId },
//           {
//             $addToSet: {
//               comments: { commentText, commentAuthor: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     editEventComment: async (parent, { eventId, commentId, commentText }, context) => {
//       if (context.user) {
//         return Article.findOneAndUpdate(
//           { _id: eventId },
//           {
//             $addToSet: {
//               comments: { commentText, commentAuthor: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
    
//     removeComment: async (parent, { eventId, commentId }, context) => {
//       if (context.user) {
//         return Article.findOneAndUpdate(
//           { _id: eventId },
//           {
//             $pull: {
//               comments: {
//                 _id: commentId,
//                 // commentAuthor: context.user.username,
//               },
//             },
//           },
//           { new: true }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
  },
};

module.exports = resolvers;

// This is for future development, editComment etc

// deleteEventComment: async (parent, { commentId }, context) => {
    //   if (context.user) {
    //     return Event.findOneAndUpdate(
    //       { _id: commentId },
    //       {
    //         $pull: {
    //           comments: { commentId: commentId },
    //         },
    //       },
    //       {
    //         new: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    

    // removeThought: async (parent, { eventId }, context) => {
    //   if (context.user) {
    //     const event = await Event.findOneAndDelete({
    //       _id: eventId,
    //       eventTitle: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { events: event._id } }
    //     );

    //     return event;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
