const LogModel = require('./model');

const logger = async(req, next) => {

  if(!req.user.username) next();
  const newLog = {
    user: req.user.username,
    url: req.url
  };
  await LogModel.create(newLog)
  next()
};

module.exports = logger