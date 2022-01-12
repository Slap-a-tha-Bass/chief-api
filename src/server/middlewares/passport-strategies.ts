import * as passport from "passport";
import * as PassportLocal from "passport-local";
import * as PassportJWT from "passport-jwt";
import * as db from "../db";
import { jwtConfig } from "../config";
import { Users, Payload } from "../types";
import { security, isEmailValid } from "../utils";

passport.serializeUser((user: Users, done) => {
  user?.hashed && delete user.hashed;
  done(null, user);
});
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "email",
      session: false,
    },
    async (email, password, done) => {
      try {
        const isEmailValidated = isEmailValid(email);
        // const [user] = await db.users.search_by(isEmail ? "email" : "username", email);
        // if(!user.verified) {
        //     confirmation_email(user.id, user.email);
        //     throw new Error("Please check email link to verify account.")
        // }
        // const doPasswordsMatch = await security.verify(password, user.hashed);
        // if (user && doPasswordsMatch) {
        //   delete user.hashed;
        //   done(null, user);
        // } else {
        //   done(null, false);
        // }
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new PassportJWT.Strategy(
    {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secret,
    },
    (payload: Payload, done) => {
      try {
        done(null, payload);
      } catch (error) {
        done(error);
      }
    }
  )
);
