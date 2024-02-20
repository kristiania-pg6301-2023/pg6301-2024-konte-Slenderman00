import { user } from '../models/user'
import { generateToken } from './jwtUtils';

const bcrypt = require('bcrypt');


function registerUser(username: String, password: String, callback: any) {
    bcrypt.genSalt(10).then((salt: any) => {
        bcrypt.hash(password, salt, (err: any, hash: string) => {


            //create the user, generate a uid token and call the callback
            const uuid = crypto.randomUUID();
            const _jwt = generateToken(uuid, 0, username);

            const u1 = new user({
                name: username,
                hash: hash,
                uuid: uuid,
                role: 0,
            })

            u1.save().then(savedUser => {
                console.log('registered new user');
                //return a uid and a jwt
                callback({ 'success': { 'uuid': uuid, 'jwt': _jwt } });
            }).catch((err) => {
                //inform the user that 'Something went wrong'
                if(err.code == 11000) {
                    callback({ 'error': 'This username has allready been claimed.' });
                } else {
                    callback({ 'error': 'Something went wrong.' });
                }
                console.log('failed registering new user');
            })
        });
    })
}

export default registerUser;