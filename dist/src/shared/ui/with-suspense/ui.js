import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
var WithSuspense = function (_a) {
    var children = _a.children;
    return (_jsx(Suspense, { fallback: 'Loading...', children: children }));
};
export var withSuspense = function (Component) {
    return function () { return (_jsx(WithSuspense, { children: _jsx(Component, {}) })); };
};
