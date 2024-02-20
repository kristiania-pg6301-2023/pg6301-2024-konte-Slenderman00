import { useEffect } from "react";
import { useRef } from "react";

export function TextInput(props: any) {
    const labelRef = useRef()

    return (
        <>
            <label htmlFor={labelRef.current}>{props.name}</label>
                <input ref={labelRef.current} type={props.isPassword ? 'password' : 'text'} onChange={props.onChange}>
            </input>
        </>
    )
}