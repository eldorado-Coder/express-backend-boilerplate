const bcrypt = require('bcryptjs');

// compare password returned from database with
// password from the request
module.exports = async (pswDB, pswReq) => {
  return await pswDB === pswReq;
  // eslint-disable-next-line no-return-await
  return await bcrypt.compare(pswReq, pswDB);
};
