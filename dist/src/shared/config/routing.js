import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
export var routes = {
    home: createRoute(),
    about: createRoute(),
    shop: createRoute(),
};
export var routesMap = [
    {
        path: '/',
        route: routes.home,
    },
    {
        path: '/about',
        route: routes.about,
    },
    {
        path: '/shop',
        route: routes.shop,
    }
];
export var routerControls = createRouterControls();
export var router = createHistoryRouter({
    routes: routesMap,
    controls: routerControls,
});
