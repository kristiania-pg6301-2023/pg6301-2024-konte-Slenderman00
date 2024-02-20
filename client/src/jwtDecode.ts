export function parseJwt(jwt: any) {
    try {
        jwt = jwt.split('.');
        let data: any = atob(jwt[1]);
        data = JSON.parse(data);
        return data;
    } catch {
        return false;
    }
}