import { createRouteView } from "atomic-router-react";
import { routes } from "@/shared/config/routing";
import { createLazyPage } from "@/shared/lib/lazy-page";
import { withSuspense } from "@/shared/ui/with-suspense";
var load = function () { return import('./ui'); };
var Page = createLazyPage({
    load: load,
    route: routes.shop,
});
export var ShopPage = createRouteView({
    view: withSuspense(Page),
    route: routes.shop,
});
