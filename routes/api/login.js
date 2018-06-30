const router = require('express').Router();
const passport = require('../../backend/controllers/passport');
const loginController = require('../../backend/controllers/loginController');

// Matching with "/api/user/login"
router.route('/login')
    .get(loginController.login)
    .post(passport.authenticate("local"), loginController.loggingIn)

router.route('/signup')
    .post(loginController.signUp)

router.route('/logout')
    .get(loginController.logout)

// router.route('/newuser')

module.exports = router;