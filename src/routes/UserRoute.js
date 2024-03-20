const express = require('express');
const router = express.Router();
const jwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/UserController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/user-details', jwtUtils.verifyToken, UserController.getUserDetails);
router.put('/update-user', jwtUtils.verifyToken, UserController.updateUser);
router.delete('/delete-user', jwtUtils.verifyToken, UserController.deleteUser);
router.post('/claim-ethereum', UserController.claimEthereum);

module.exports = router;
