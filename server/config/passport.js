import dotenv from "dotenv";
dotenv.config();
import  {Strategy as JwtStrategy, ExtractJwt} from'passport-jwt';


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
export default (new JwtStrategy(opts, function(jwt_payload, done) {
    
            return done(null, jwt_payload);
}));