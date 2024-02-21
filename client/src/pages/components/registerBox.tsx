import { useState } from "react";
import { useCookies } from "react-cookie";

import { TextInput } from "./textInput";
import { doRegister } from "../../api";
import { parseJwt } from "../../jwtDecode";

import "./box.css";

export function RegisterBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookie] = useCookies(["user"]);

  const onSubmit = (event: any) => {
    //this makes the user able to interact with this as a normal form.
    event.preventDefault();

    //use api methods and then generate session cookie
    doRegister(username, password, (result: any) => {
      console.log(result);
      if ("success" in result) {
        console.log(parseJwt(result.success.jwt));
        setCookie("user", result.success.jwt, { path: "/", sameSite: "none", secure: true });
        //redirect the user to the index
        window.location.href = "/pg6301-2024-konte-Slenderman00/";
      }
    });
  };

  return (
    <div className="loginBox">
      <form onSubmit={onSubmit}>
        <TextInput
          name="Username"
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
        />
        <TextInput
          name="Password"
          isPassword={true}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <input value={"Login"} type="submit" />
      </form>
    </div>
  );
}
