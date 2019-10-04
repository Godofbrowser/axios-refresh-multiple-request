import { ROUTE_NAME, routeTo } from '../routes';

export default class AuthApi {
    client;

    constructor(client) {
        this.client = client;
    }

    refresh(refreshToken) {
        // refreshToken is useful in reality for serverside auth
        const url = routeTo(ROUTE_NAME.AUTH.REFRESH_TOKEN);
        return this.client.get(url, { params: { refreshToken }});
    }
}
