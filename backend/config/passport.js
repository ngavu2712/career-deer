const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy(
  {
    //Updating username field to email rather than default "username" from LocalStrategy
    usernameField: 'email'
  },
  (username, password, done) => {
    db.User.findOne({
      username: username
    }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }

      return done(null, user);

    });

  }
));

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

module.exports = passport;

