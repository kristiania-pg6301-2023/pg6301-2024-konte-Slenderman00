

const ENDPOINT = "http://127.0.0.1:3000";

function postData(path: string, data: any, callback: any) {
    fetch(`${ENDPOINT}${path}`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((result: any) => {
        result.json().then((result: any) => {
            callback(result)
        })
    }).catch((err: any) => {
        callback(err)
    });
}

export function doLogin(username: string, password: string, callback: any) {
    postData("/api/login", {username: username, password: password}, (result: any) => {
        callback(result);
    })
}

export function doRegister(username: string, password: string, callback: any) {
    postData("/api/register", {username: username, password: password}, (result: any) => {
        callback(result);
    })
}