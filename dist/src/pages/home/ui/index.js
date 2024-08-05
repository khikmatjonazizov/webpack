import { createRouteView } from "atomic-router-react";
import { routes } from "@/shared/config/routing";
import { HomePageComponent } from "./ui";
export var HomePage = createRouteView({
    view: HomePageComponent,
    route: routes.home,
});
