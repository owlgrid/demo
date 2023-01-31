import returnToken from "./returnToken";
import moment from 'moment';

export default async function(login: string) {
    return `Hello ${login} : This is your token ${await returnToken()} valable until ${moment().add(24, 'h').format('LLLL')}`;
}