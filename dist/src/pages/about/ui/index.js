import { createRouteView } from "atomic-router-react";
import { routes } from "@/shared/config/routing";
import { createLazyPage } from "@/shared/lib/lazy-page";
import { withSuspense } from "@/shared/ui/with-suspense";
var load = function () { return import('./ui'); };
var Page = createLazyPage({
    load: load,
    route: routes.about,
});
export var AboutPage = createRouteView({
    view: withSuspense(Page),
    route: routes.about,
});
