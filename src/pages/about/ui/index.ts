import { createRouteView } from "atomic-router-react";
import { routes } from "../../../shared/config/routing";
import { createLazyPage } from "../../../shared/lib/lazy-page";

const load = () => import('./ui')

const Page = createLazyPage({
  load,
  route: routes.about,
})

export const AboutPage = createRouteView({
  view: Page,
  route: routes.about,
})