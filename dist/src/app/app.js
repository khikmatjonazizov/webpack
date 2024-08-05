import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import './style/global.scss';
import { Link, RouterProvider } from 'atomic-router-react';
import { router, routes } from "@/shared/config/routing";
import { appStarted } from "@/shared/config/system";
import { Routing } from "@/pages/routing";
import './model';
appStarted();
var todo = function (msg) {
    console.log(msg);
};
export var App = function () {
    var _a = useState(0), state = _a[0], setState = _a[1];
    var inc = function () { return setState(function (prev) { return prev + 1; }); };
    todo('1');
    return (_jsxs(RouterProvider, { router: router, children: [__MODE__, _jsx(Link, { to: routes.home, children: "Home" }), _jsx(Link, { to: routes.about, children: "About" }), _jsx(Link, { to: routes.shop, children: "Shop" }), _jsx(Routing, {})] }));
};
