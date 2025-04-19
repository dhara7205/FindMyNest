// userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Dummy route to test
router.get('/', (req, res) => {
  res.send('User route working!');
});

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
