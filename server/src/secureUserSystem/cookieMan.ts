import { verifyToken } from "./jwtUtils";

export function cookieMan(req: any, res: any, next: any) {
    //if the user tries to reach a secured endpoint this module will verify the jwt token, then it will 
    //include the user role, and uuid with in the req. it might be a good idea to not trust the jwt entierly incase the token secret gets leaked.

    //yeeting the user if there is no user cookie
    if(!('user' in req.cookies)) {
        res.send({error: 'invalid jwt'})
        return;
    }

    //yeeting the user if the token is invalid
    var token = verifyToken(req.cookies.user)
    if(!token) {
        res.send({error: 'invalid jwt'})
        return;
    }

    //passing the token data to the relevant paths
    req.user = token;
    next();
} 