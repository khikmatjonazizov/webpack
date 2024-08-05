import { createRoutesView } from 'atomic-router-react';
import { HomePage } from './home/ui';
import { routes } from '@/shared/config/routing';
import { AboutPage } from './about/ui';
import { ShopPage } from './shop/ui';
export var Routing = createRoutesView({
    routes: [
        {
            view: HomePage,
            route: routes.home,
        },
        {
            view: AboutPage,
            route: routes.about,
        },
        {
            view: ShopPage,
            route: routes.shop,
        }
    ]
});
