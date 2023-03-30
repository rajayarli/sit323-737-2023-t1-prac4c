const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
var key='your_jwt_secret';
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : key,
    },
    function (jwtPayload, cb) {
        let userInfo={
        id:jwtPayload.id,
        username:jwtPayload.username,
        };
        return cb(null,userInfo);
    }
));