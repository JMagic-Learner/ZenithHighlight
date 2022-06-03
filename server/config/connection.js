const mongoose = require('mongoose');

mongoose.connect(
'mongodb://localhost/zenithhighlight' ||  process.env.MONGODB_URI ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
