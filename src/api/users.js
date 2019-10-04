import { ROUTE_NAME, routeTo } from '../routes';

export default class UsersApi {
    client;

    constructor(client) {
        this.client = client;
    }

    getProfile(userId) {
        const url = routeTo(ROUTE_NAME.USER.PROFILE, {id: userId});
        return this.client.get(url);
    }

    getLikes(userId) {
        const url = routeTo(ROUTE_NAME.USER.LIKES, {id: userId});
        return this.client.get(url);
    }
}