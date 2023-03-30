const db = require("./database");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
      if (err) { return cb(err); }
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        if (password!=row.password) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, row);
      });
    }));