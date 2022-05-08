const express = require('express');

const router = express.Router();
const {
  getParamUserId,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../middleware/users');

router.param('userId', getParamUserId);

/*
  get single element
  get all elements
  create new element
  update an element
  delete an element
*/

router.get('/pages/api/users', getAllUsers); // get all users
router.get('/pages/api/users/:userId', getUserById); // get single users
router.put('/pages/api/users/:userId', updateUser); // update an existing user
router.delete('/pages/api/users/:userId', deleteUser); // delete user passing user id

module.exports = router;
