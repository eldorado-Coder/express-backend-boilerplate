const userController = require('../../controllers/user.controller');
const makeResponse = require('./utils/makeResponse');
const validateUserPassword = require('./utils/validateUserPassword');

module.exports = async (req, res) => {
  const { email, password } = req.body.data;
  const userDoc = await userController.findByEmail(email);
  if (userDoc === null) {
    // handle error
    res.status(200).send({ error: 'trying to find user' });
  } else if (!userDoc) {
    res.status(200).send({ error: 'no user found' });
  } // ----------------------------------------
  else {
    // validate password from database with the one from request
    const correctPassword = await validateUserPassword(userDoc.password, password);

    if (correctPassword) {
      const bodyRes = makeResponse(userDoc);
      console.log(bodyRes)
      res.status(200).send(bodyRes);
    } else {
      res.status(200).send({ error: 'Incorrect Password' });
    }
  }
};
