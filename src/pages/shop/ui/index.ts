import { createRouteView } from "atomic-router-react";
import { routes } from "../../../shared/config/routing";
import { createLazyPage } from "../../../shared/lib/lazy-page";
import { withSuspense } from "../../../shared/ui/with-suspense";

const load = () => import('./ui');

const Page = createLazyPage({
  load,
  route: routes.shop,
})

export const ShopPage = createRouteView({
  view: withSuspense(Page),
  route: routes.shop,
})