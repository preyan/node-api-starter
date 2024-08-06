import jwt from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'your_jwt_secret',
};

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    // Find user by ID or other means
    // done(null, user);
    // done(null, false);
  }),
);

export const generateToken = (user: any) => {
  return jwt.sign(user, jwtOptions.secretOrKey, { expiresIn: '1h' });
};

export const authenticate = passport.authenticate('jwt', { session: false });
