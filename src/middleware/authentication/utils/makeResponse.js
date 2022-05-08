// generate a session token with JWT
const generateAuthToken = require('./generateAuthToken');

module.exports = (userData) => {
  const { _id, name, email } = userData;

  // it is a reference to that object, so in order to remove the password
  // we should copy the information to another element
  return {
    user: {
      _id,
      name,
      email,
    },
    token: generateAuthToken(_id),
  };
};
