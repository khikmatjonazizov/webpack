import { StrictMode, useState } from "react";
import './style/global.scss';
import { Link, RouterProvider } from 'atomic-router-react';
import { router, routes } from "../shared/config/routing";
import { appStarted } from "../shared/config/system";
import { Routing } from "../pages/routing";
import './model';

appStarted()

export const App = () => {
  const [state, setState] = useState(0);
  const inc = () => setState(prev => prev + 1);
  return (
    <RouterProvider router={router}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.about}>About</Link>
      <Link to={routes.shop}>Shop</Link>
      <Routing />
    </RouterProvider>
  )
}