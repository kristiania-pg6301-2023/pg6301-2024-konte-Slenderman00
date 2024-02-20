import { useState } from 'react';
import { TextInput } from "./textInput";

import { doLogin } from '../../api';

import './box.css'


export function LoginBox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: any) => {
        //this makes the user able to interact with this as a normal form.
        event.preventDefault()
        
        //use api methods and then generate session cookie
        doLogin(username, password, (result: any) => {
            console.log(result)
        })
    }

    return (
        <div className="loginBox">
            <form onSubmit={onSubmit}>
                <TextInput name="Username" onChange={(e: any) => {setUsername(e.target.value)}}/>
                <TextInput name="Password" isPassword={true} onChange={(e: any) => {setPassword(e.target.value)}}/>
                <input value={"Login"} type='submit'/>
            </form>
        </div>
    )
}