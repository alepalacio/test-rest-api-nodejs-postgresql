const express = require('express');
const { get, getUsers, newUser, singleUser, updateUser, deleteUser } = require('../controllers/controller');
const router = express.Router();

/* GET main request */
router.get('/', get);

/* GET request */
router.get('/users', getUsers);

/* GET single request */
router.get('/users/:id', singleUser);

/* POST request */
router.post('/users', newUser);

/* PUT request */
router.put('/users/:id', updateUser);

/* DELETE request */
router.delete('/users/:id', deleteUser);

module.exports = router;