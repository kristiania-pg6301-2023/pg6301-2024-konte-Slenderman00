import { user } from "../models/user";

export function updateUser(uuid: string, bio: string, imgurl: string, callback: any) {
    user.updateOne({uuid: uuid}, {bio: bio, picture: imgurl}).then((res) => {
        callback({'success': 'updated user'});
    }).catch((err) => {
        callback({ 'error': 'Something went wrong.' });
    });


}