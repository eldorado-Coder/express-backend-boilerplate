const userController = require('../../controllers/user.controller');

module.exports = async (req, res, next) => {
  const emailAvailable = await userController.findByEmail(req.body.email);

  if (!emailAvailable) {
    // email available
    next();
    // res.sendStatus(204);
  } else {
    // email already took
    res.status(200).send({ error: 'Email already took' });
  }
};
