const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');
const express = require('express');
const http =require('http');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const PORT = process.env.PORT || 4000;

// Congigring dotenv to use my key for the NY times search form
require('dotenv').config();


async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });


  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/',
  });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



app.get('*', (req, res) => {
  if (req) {
    console.log("A request has been sent");
  }
  if (res) {
    console.log("A response has been generated");
  }
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// db.objectives.find().sort( { category: -1 } );

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

  // await new Promise(resolve => httpServer.listen({ PORT}, resolve));
  // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}


startApolloServer(typeDefs,resolvers);


