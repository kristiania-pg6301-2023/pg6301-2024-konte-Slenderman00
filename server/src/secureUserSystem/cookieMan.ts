
export function cookieMan(req: any, res: any, next: any) {
    //if the user tries to reach a secured endpoint this module will verify the jwt token, then it will 
    //include the user role, and uuid with in the req. it might be a good idea to not trust the jwt entierly incase the token secret gets leaked.


    next();
} 