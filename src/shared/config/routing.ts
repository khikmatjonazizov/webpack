import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";

export const routes = {
  home: createRoute(),
  about: createRoute(),
  shop: createRoute(),
}

export const routesMap = [
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
]

export const routerControls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  controls: routerControls,
})