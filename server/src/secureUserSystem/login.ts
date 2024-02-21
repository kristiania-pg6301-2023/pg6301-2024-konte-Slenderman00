import { user, getUserByName } from "../models/user";
import { generateToken } from "./jwtUtils";

const bcrypt = require("bcrypt");

// This namespace manages authentication and generation of new tokens

function loginUser(username: String, password: String, callback: any) {
  getUserByName(username)
    .then((user) => {
      //verify the hash
      bcrypt.compare(password, user.hash, (err: any, result: any) => {
        if (result) {
          const uuid = user.uuid;
          const _jwt = generateToken(uuid, user.role, user.name);

          //generate token and shit
          callback({ success: { uuid: uuid, jwt: _jwt } });
        } else {
          //generate error and shit
          callback({ error: "Something went wrong" });
          console.log(result);
        }
      });
    })
    .catch((err) => {
      //generate error and shit
      callback({ error: "Something went wrong" });
    });
}

export default loginUser;
