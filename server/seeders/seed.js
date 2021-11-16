const db = require('../config/connection');
const { User, Article } = require('../models');
const userSeeds = require('./userSeeds.json');
const articleSeeds = require('./articleSeeds.json');

db.once('open', async () => {
  try {
    await Article.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < articleSeeds.length; i++) {
      const { _id, articleTitle } = await Article.create(articleSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: articleTitle },
        {
          $addToSet: {
            articles: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
