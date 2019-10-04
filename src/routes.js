import pathToRegexp from 'path-to-regexp';

// Define route names so we don't have to hardcode them
export const ROUTE_NAME = {
    AUTH: {
        REFRESH_TOKEN: 'auth.refresh.token'
    },
    USER: {
        PROFILE: 'user.profile',
        LIKES: 'user.likes'
    }
}

// Register routes
const routes = {
    [ROUTE_NAME.AUTH.REFRESH_TOKEN]: '/refresh',
    [ROUTE_NAME.USER.PROFILE]: '/users/:id',
    [ROUTE_NAME.USER.LIKES]: '/users/:id/likes',
}

export const routeTo = (name, params = {}) => pathToRegexp.compile(routes[name])(params);
