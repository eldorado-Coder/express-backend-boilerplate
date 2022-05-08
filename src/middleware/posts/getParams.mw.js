const getParamsEmail = (req, res, next, email) => {
  req.email = email;
  next();
};

const getParamsPostId = (req, res, next, postId) => {
  req.postId = postId;
  next();
};

module.exports = { getParamsEmail, getParamsPostId };
