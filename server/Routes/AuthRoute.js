const { Signup, Login, verifyToken } = require('../Controllers/AuthController');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify-token', verifyToken);

module.exports = router;