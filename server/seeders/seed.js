const db = require('../config/connection');
const { User, Article, Objectives } = require('../models');
const userSeeds = require('./userSeeds.json');
const articleSeeds = require('./articleSeeds.json');
const objectiveSeeds = require('./objectiveSeeds.json');

db.once('open', async () => {
  try {
    await Article.deleteMany({});
    await User.deleteMany({});
    await Objectives.deleteMany({});

    await User.create(userSeeds);
    await Objectives.create(objectiveSeeds);

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
