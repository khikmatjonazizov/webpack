var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.9a48500efceb2453218b.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n = { 481: function (e, t, n) { var r = n(758), a = n(896); function o(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var l = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            l.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {}; function h(e, t, n, r, a, o, l) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new h(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new h(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new h(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new h(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new h(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new h(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!f.call(m, e) || !f.call(p, e) && (d.test(e) ? m[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new h(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), R = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var L = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var j = Symbol.iterator; function M(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = j && e[j] || e["@@iterator"]) ? e : null; } var F, D = Object.assign; function $(e) { if (void 0 === F)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                F = t && t[1] || "";
            } return "\n" + F + e; } var I = !1; function A(e, t) { if (!e || I)
            return ""; I = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), o = r.stack.split("\n"), l = a.length - 1, i = o.length - 1; 1 <= l && 0 <= i && a[l] !== o[i];)
                    i--;
                for (; 1 <= l && 0 <= i; l--, i--)
                    if (a[l] !== o[i]) {
                        if (1 !== l || 1 !== i)
                            do {
                                if (l--, 0 > --i || a[l] !== o[i]) {
                                    var u = "\n" + a[l].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= l && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            I = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? $(e) : ""; } function U(e) { switch (e.tag) {
            case 5: return $(e.type);
            case 16: return $("Lazy");
            case 13: return $("Suspense");
            case 19: return $("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function q(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case x: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case E: return "StrictMode";
            case N: return "Suspense";
            case z: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case O:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case T: return null !== (t = e.displayName || null) ? t : q(e.type) || "Memo";
                case R:
                    t = e._payload, e = e._init;
                    try {
                        return q(e(t));
                    }
                    catch (e) { }
            } return null; } function V(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return q(t);
            case 8: return t === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function H(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function B(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function W(e) { e._valueTracker || (e._valueTracker = function (e) { var t = B(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, o = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, o.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function Q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = B(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = H(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function G(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function Z(e, t) { G(e, t); var n = H(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function J(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(o(91)); return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(o(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(o(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: H(n) }; } function oe(e, t) { var n = H(t.value), r = H(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function le(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce = function (e) { return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, a) { MSApp.execUnsafeLocalFunction((function () { return e(t, n); })); } : e; }((function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } })); function fe(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var de = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, pe = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || de.hasOwnProperty(e) && de[e] ? ("" + t).trim() : t + "px"; } function he(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(de).forEach((function (e) { pe.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), de[t] = de[e]; })); })); var ve = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ge(e, t) { if (t) {
            if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(o(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(o(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(o(62));
        } } function ye(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var be = null; function we(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var ke = null, Se = null, xe = null; function Ee(e) { if (e = ya(e)) {
            if ("function" != typeof ke)
                throw Error(o(280));
            var t = e.stateNode;
            t && (t = wa(t), ke(e.stateNode, e.type, t));
        } } function Ce(e) { Se ? xe ? xe.push(e) : xe = [e] : Se = e; } function _e() { if (Se) {
            var e = Se, t = xe;
            if (xe = Se = null, Ee(e), t)
                for (e = 0; e < t.length; e++)
                    Ee(t[e]);
        } } function Pe(e, t) { return e(t); } function Oe() { } var Ne = !1; function ze(e, t, n) { if (Ne)
            return e(t, n); Ne = !0; try {
            return Pe(e, t, n);
        }
        finally {
            Ne = !1, (null !== Se || null !== xe) && (Oe(), _e());
        } } function Te(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = wa(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(o(231, t, typeof n)); return n; } var Re = !1; if (c)
            try {
                var Le = {};
                Object.defineProperty(Le, "passive", { get: function () { Re = !0; } }), window.addEventListener("test", Le, Le), window.removeEventListener("test", Le, Le);
            }
            catch (e) {
                Re = !1;
            } function je(e, t, n, r, a, o, l, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Me = !1, Fe = null, De = !1, $e = null, Ie = { onError: function (e) { Me = !0, Fe = e; } }; function Ae(e, t, n, r, a, o, l, i, u) { Me = !1, Fe = null, je.apply(Ie, arguments); } function Ue(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                !!(4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function qe(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function Ve(e) { if (Ue(e) !== e)
            throw Error(o(188)); } function He(e) { return e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = Ue(e)))
                throw Error(o(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var l = a.alternate;
            if (null === l) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === l.child) {
                for (l = a.child; l;) {
                    if (l === n)
                        return Ve(a), e;
                    if (l === r)
                        return Ve(a), t;
                    l = l.sibling;
                }
                throw Error(o(188));
            }
            if (n.return !== r.return)
                n = a, r = l;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = l;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = l;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = l.child; u;) {
                        if (u === n) {
                            i = !0, n = l, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = l, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(o(189));
                }
            }
            if (n.alternate !== r)
                throw Error(o(190));
        } if (3 !== n.tag)
            throw Error(o(188)); return n.stateNode.current === n ? e : t; }(e), null !== e ? Be(e) : null; } function Be(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Be(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var We = a.unstable_scheduleCallback, Qe = a.unstable_cancelCallback, Ke = a.unstable_shouldYield, Ye = a.unstable_requestPaint, Xe = a.unstable_now, Ge = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, Je = a.unstable_UserBlockingPriority, et = a.unstable_NormalPriority, tt = a.unstable_LowPriority, nt = a.unstable_IdlePriority, rt = null, at = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / it | 0) | 0; }, lt = Math.log, it = Math.LN2, ut = 64, st = 4194304; function ct(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function ft(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, o = e.pingedLanes, l = 268435455 & n; if (0 !== l) {
            var i = l & ~a;
            0 !== i ? r = ct(i) : 0 != (o &= l) && (r = ct(o));
        }
        else
            0 != (l = n & ~a) ? r = ct(l) : 0 !== o && (r = ct(o)); if (0 === r)
            return 0; if (0 !== t && t !== r && !(t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 4194240 & o))
            return t; if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function dt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function pt(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = ut; return !(4194240 & (ut <<= 1)) && (ut = 64), e; } function ht(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function vt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function gt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var yt = 0; function bt(e) { return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1; } var wt, kt, St, xt, Et, Ct = !1, _t = [], Pt = null, Ot = null, Nt = null, zt = new Map, Tt = new Map, Rt = [], Lt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function jt(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Pt = null;
                break;
            case "dragenter":
            case "dragleave":
                Ot = null;
                break;
            case "mouseover":
            case "mouseout":
                Nt = null;
                break;
            case "pointerover":
            case "pointerout":
                zt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Tt.delete(t.pointerId);
        } } function Mt(e, t, n, r, a, o) { return null === e || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, null !== t && null !== (t = ya(t)) && kt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ft(e) { var t = ga(e.target); if (null !== t) {
            var n = Ue(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = qe(n)))
                        return e.blockedOn = t, void Et(e.priority, (function () { St(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function Dt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ya(n)) && kt(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            be = r, n.target.dispatchEvent(r), be = null, t.shift();
        } return !0; } function $t(e, t, n) { Dt(e) && n.delete(t); } function It() { Ct = !1, null !== Pt && Dt(Pt) && (Pt = null), null !== Ot && Dt(Ot) && (Ot = null), null !== Nt && Dt(Nt) && (Nt = null), zt.forEach($t), Tt.forEach($t); } function At(e, t) { e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, It))); } function Ut(e) { function t(t) { return At(t, e); } if (0 < _t.length) {
            At(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
                var r = _t[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Pt && At(Pt, e), null !== Ot && At(Ot, e), null !== Nt && At(Nt, e), zt.forEach(t), Tt.forEach(t), n = 0; n < Rt.length; n++)
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;)
            Ft(n), null === n.blockedOn && Rt.shift(); } var qt = w.ReactCurrentBatchConfig, Vt = !0; function Ht(e, t, n, r) { var a = yt, o = qt.transition; qt.transition = null; try {
            yt = 1, Wt(e, t, n, r);
        }
        finally {
            yt = a, qt.transition = o;
        } } function Bt(e, t, n, r) { var a = yt, o = qt.transition; qt.transition = null; try {
            yt = 4, Wt(e, t, n, r);
        }
        finally {
            yt = a, qt.transition = o;
        } } function Wt(e, t, n, r) { if (Vt) {
            var a = Kt(e, t, n, r);
            if (null === a)
                Vr(e, t, r, Qt, n), jt(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Pt = Mt(Pt, e, t, n, r, a), !0;
                case "dragenter": return Ot = Mt(Ot, e, t, n, r, a), !0;
                case "mouseover": return Nt = Mt(Nt, e, t, n, r, a), !0;
                case "pointerover":
                    var o = a.pointerId;
                    return zt.set(o, Mt(zt.get(o) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return o = a.pointerId, Tt.set(o, Mt(Tt.get(o) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (jt(e, r), 4 & t && -1 < Lt.indexOf(e)) {
                for (; null !== a;) {
                    var o = ya(a);
                    if (null !== o && wt(o), null === (o = Kt(e, t, n, r)) && Vr(e, t, r, Qt, n), o === a)
                        break;
                    a = o;
                }
                null !== a && r.stopPropagation();
            }
            else
                Vr(e, t, r, null, n);
        } } var Qt = null; function Kt(e, t, n, r) { if (Qt = null, null !== (e = ga(e = we(r))))
            if (null === (t = Ue(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = qe(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Qt = e, null; } function Yt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Ge()) {
                case Ze: return 1;
                case Je: return 4;
                case et:
                case tt: return 16;
                case nt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Xt = null, Gt = null, Zt = null; function Jt() { if (Zt)
            return Zt; var e, t, n = Gt, r = n.length, a = "value" in Xt ? Xt.value : Xt.textContent, o = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var l = r - e; for (t = 1; t <= l && n[r - t] === a[o - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function en(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function tn() { return !0; } function nn() { return !1; } function rn(e) { function t(t, n, r, a, o) { for (var l in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e)
            e.hasOwnProperty(l) && (t = e[l], this[l] = t ? t(a) : a[l]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? tn : nn, this.isPropagationStopped = nn, this; } return D(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = tn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = tn); }, persist: function () { }, isPersistent: tn }), t; } var an, on, ln, un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, sn = rn(un), cn = D({}, un, { view: 0, detail: 0 }), fn = rn(cn), dn = D({}, cn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: En, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (an = e.screenX - ln.screenX, on = e.screenY - ln.screenY) : on = an = 0, ln = e), an); }, movementY: function (e) { return "movementY" in e ? e.movementY : on; } }), pn = rn(dn), mn = rn(D({}, dn, { dataTransfer: 0 })), hn = rn(D({}, cn, { relatedTarget: 0 })), vn = rn(D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), gn = D({}, un, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), yn = rn(gn), bn = rn(D({}, un, { data: 0 })), wn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, kn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Sn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function xn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]; } function En() { return xn; } var Cn = D({}, cn, { key: function (e) { if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = en(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: En, charCode: function (e) { return "keypress" === e.type ? en(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? en(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), _n = rn(Cn), Pn = rn(D({}, dn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), On = rn(D({}, cn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: En })), Nn = rn(D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), zn = D({}, dn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Tn = rn(zn), Rn = [9, 13, 27, 32], Ln = c && "CompositionEvent" in window, jn = null; c && "documentMode" in document && (jn = document.documentMode); var Mn = c && "TextEvent" in window && !jn, Fn = c && (!Ln || jn && 8 < jn && 11 >= jn), Dn = String.fromCharCode(32), $n = !1; function In(e, t) { switch (e) {
            case "keyup": return -1 !== Rn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function An(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var Un = !1, qn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Vn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!qn[e.type] : "textarea" === t; } function Hn(e, t, n, r) { Ce(r), 0 < (t = Br(t, "onChange")).length && (n = new sn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Bn = null, Wn = null; function Qn(e) { Dr(e, 0); } function Kn(e) { if (Q(ba(e)))
            return e; } function Yn(e, t) { if ("change" === e)
            return t; } var Xn = !1; if (c) {
            var Gn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var Jn = document.createElement("div");
                    Jn.setAttribute("oninput", "return;"), Zn = "function" == typeof Jn.oninput;
                }
                Gn = Zn;
            }
            else
                Gn = !1;
            Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        } function er() { Bn && (Bn.detachEvent("onpropertychange", tr), Wn = Bn = null); } function tr(e) { if ("value" === e.propertyName && Kn(Wn)) {
            var t = [];
            Hn(t, Wn, e, we(e)), ze(Qn, t);
        } } function nr(e, t, n) { "focusin" === e ? (er(), Wn = n, (Bn = t).attachEvent("onpropertychange", tr)) : "focusout" === e && er(); } function rr(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Wn); } function ar(e, t) { if ("click" === e)
            return Kn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Kn(t); } var lr = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ir(e, t) { if (lr(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a]))
                return !1;
        } return !0; } function ur(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function sr(e, t) { var n, r = ur(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = ur(r);
        } } function cr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? cr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function fr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function dr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function pr(e) { var t = fr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && cr(n.ownerDocument.documentElement, n)) {
            if (null !== r && dr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, o = Math.min(r.start, a);
                    r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = sr(n, o);
                    var l = sr(n, r);
                    a && l && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, hr = null, vr = null, gr = null, yr = !1; function br(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; yr || null == hr || hr !== K(r) || (r = "selectionStart" in (r = hr) && dr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, gr && ir(gr, r) || (gr = r, 0 < (r = Br(vr, "onSelect")).length && (t = new sn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hr))); } function wr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var kr = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Sr = {}, xr = {}; function Er(e) { if (Sr[e])
            return Sr[e]; if (!kr[e])
            return e; var t, n = kr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in xr)
                return Sr[e] = n[t]; return e; } c && (xr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition); var Cr = Er("animationend"), _r = Er("animationiteration"), Pr = Er("animationstart"), Or = Er("transitionend"), Nr = new Map, zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function Tr(e, t) { Nr.set(e, t), u(t, [e]); } for (var Rr = 0; Rr < zr.length; Rr++) {
            var Lr = zr[Rr];
            Tr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        } Tr(Cr, "onAnimationEnd"), Tr(_r, "onAnimationIteration"), Tr(Pr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Or, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr)); function Fr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, l, i, u, s) { if (Ae.apply(this, arguments), Me) {
            if (!Me)
                throw Error(o(198));
            var c = Fe;
            Me = !1, Fe = null, De || (De = !0, $e = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function Dr(e, t) { t = !!(4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var l = r.length - 1; 0 <= l; l--) {
                        var i = r[l], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== o && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), o = u;
                    }
                else
                    for (l = 0; l < r.length; l++) {
                        if (u = (i = r[l]).instance, s = i.currentTarget, i = i.listener, u !== o && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), o = u;
                    }
            }
        } if (De)
            throw e = $e, De = !1, $e = null, e; } function $r(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || (qr(t, e, 2, !1), n.add(r)); } function Ir(e, t, n) { var r = 0; t && (r |= 4), qr(n, e, r, t); } var Ar = "_reactListening" + Math.random().toString(36).slice(2); function Ur(e) { if (!e[Ar]) {
            e[Ar] = !0, l.forEach((function (t) { "selectionchange" !== t && (Mr.has(t) || Ir(t, !1, e), Ir(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ar] || (t[Ar] = !0, Ir("selectionchange", !1, t));
        } } function qr(e, t, n, r) { switch (Yt(t)) {
            case 1:
                var a = Ht;
                break;
            case 4:
                a = Bt;
                break;
            default: a = Wt;
        } n = a.bind(null, t, n, e), a = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Vr(e, t, n, r, a) { var o = r; if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
                if (null === r)
                    return;
                var l = r.tag;
                if (3 === l || 4 === l) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === l)
                        for (l = r.return; null !== l;) {
                            var u = l.tag;
                            if ((3 === u || 4 === u) && ((u = l.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            l = l.return;
                        }
                    for (; null !== i;) {
                        if (null === (l = ga(i)))
                            return;
                        if (5 === (u = l.tag) || 6 === u) {
                            r = o = l;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } ze((function () { var r = o, a = we(n), l = []; e: {
            var i = Nr.get(e);
            if (void 0 !== i) {
                var u = sn, s = e;
                switch (e) {
                    case "keypress": if (0 === en(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = _n;
                        break;
                    case "focusin":
                        s = "focus", u = hn;
                        break;
                    case "focusout":
                        s = "blur", u = hn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = hn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = pn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = On;
                        break;
                    case Cr:
                    case _r:
                    case Pr:
                        u = vn;
                        break;
                    case Or:
                        u = Nn;
                        break;
                    case "scroll":
                        u = fn;
                        break;
                    case "wheel":
                        u = Tn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = yn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Pn;
                }
                var c = !!(4 & t), f = !c && "scroll" === e, d = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, m = r; null !== m;) {
                    var h = (p = m).stateNode;
                    if (5 === p.tag && null !== h && (p = h, null !== d && null != (h = Te(m, d)) && c.push(Hr(m, h, p))), f)
                        break;
                    m = m.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), l.push({ event: i, listeners: c }));
            }
        } if (!(7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === be || !(s = n.relatedTarget || n.fromElement) || !ga(s) && !s[pa]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ga(s) : null) && (s !== (f = Ue(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = pn, h = "onMouseLeave", d = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, h = "onPointerLeave", d = "onPointerEnter", m = "pointer"), f = null == u ? i : ba(u), p = null == s ? i : ba(s), (i = new c(h, m + "leave", u, n, a)).target = f, i.relatedTarget = p, h = null, ga(a) === r && ((c = new c(d, m + "enter", s, n, a)).target = p, c.relatedTarget = f, h = c), f = h, u && s)
                    e: {
                        for (d = s, m = 0, p = c = u; p; p = Wr(p))
                            m++;
                        for (p = 0, h = d; h; h = Wr(h))
                            p++;
                        for (; 0 < m - p;)
                            c = Wr(c), m--;
                        for (; 0 < p - m;)
                            d = Wr(d), p--;
                        for (; m--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = Wr(c), d = Wr(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Qr(l, i, u, c, !1), null !== s && null !== f && Qr(l, f, s, c, !0);
            }
            if ("select" === (u = (i = r ? ba(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Yn;
            else if (Vn(i))
                if (Xn)
                    v = or;
                else {
                    v = rr;
                    var g = nr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = ar);
            switch (v && (v = v(e, r)) ? Hn(l, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? ba(r) : window, e) {
                case "focusin":
                    (Vn(g) || "true" === g.contentEditable) && (hr = g, vr = r, gr = null);
                    break;
                case "focusout":
                    gr = vr = hr = null;
                    break;
                case "mousedown":
                    yr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    yr = !1, br(l, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": br(l, n, a);
            }
            var y;
            if (Ln)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Un ? In(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Fn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = Jt()) : (Gt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Un = !0)), 0 < (g = Br(r, b)).length && (b = new bn(b, e, null, n, a), l.push({ event: b, listeners: g }), (y || null !== (y = An(n))) && (b.data = y))), (y = Mn ? function (e, t) { switch (e) {
                case "compositionend": return An(t);
                case "keypress": return 32 !== t.which ? null : ($n = !0, Dn);
                case "textInput": return (e = t.data) === Dn && $n ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Un)
                return "compositionend" === e || !Ln && In(e, t) ? (e = Jt(), Zt = Gt = Xt = null, Un = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Fn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Br(r, "onBeforeInput")).length && (a = new bn("onBeforeInput", "beforeinput", null, n, a), l.push({ event: a, listeners: r }), a.data = y);
        } Dr(l, t); })); } function Hr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Br(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, o = a.stateNode;
            5 === a.tag && null !== o && (a = o, null != (o = Te(e, n)) && r.unshift(Hr(e, o, a)), null != (o = Te(e, t)) && r.push(Hr(e, o, a))), e = e.return;
        } return r; } function Wr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Qr(e, t, n, r, a) { for (var o = t._reactName, l = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = Te(n, o)) && l.unshift(Hr(n, u, i)) : a || null != (u = Te(n, o)) && l.push(Hr(n, u, i))), n = n.return;
        } 0 !== l.length && e.push({ event: t, listeners: l }); } var Kr = /\r\n?/g, Yr = /\u0000|\uFFFD/g; function Xr(e) { return ("string" == typeof e ? e : "" + e).replace(Kr, "\n").replace(Yr, ""); } function Gr(e, t, n) { if (t = Xr(t), Xr(e) !== t && n)
            throw Error(o(425)); } function Zr() { } var Jr = null, ea = null; function ta(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var na = "function" == typeof setTimeout ? setTimeout : void 0, ra = "function" == typeof clearTimeout ? clearTimeout : void 0, aa = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== aa ? function (e) { return aa.resolve(null).then(e).catch(la); } : na; function la(e) { setTimeout((function () { throw e; })); } function ia(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void Ut(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); Ut(t); } function ua(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function sa(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var ca = Math.random().toString(36).slice(2), fa = "__reactFiber$" + ca, da = "__reactProps$" + ca, pa = "__reactContainer$" + ca, ma = "__reactEvents$" + ca, ha = "__reactListeners$" + ca, va = "__reactHandles$" + ca; function ga(e) { var t = e[fa]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[pa] || n[fa]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = sa(e); null !== e;) {
                        if (n = e[fa])
                            return n;
                        e = sa(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ya(e) { return !(e = e[fa] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function ba(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(o(33)); } function wa(e) { return e[da] || null; } var ka = [], Sa = -1; function xa(e) { return { current: e }; } function Ea(e) { 0 > Sa || (e.current = ka[Sa], ka[Sa] = null, Sa--); } function Ca(e, t) { Sa++, ka[Sa] = e.current, e.current = t; } var _a = {}, Pa = xa(_a), Oa = xa(!1), Na = _a; function za(e, t) { var n = e.type.contextTypes; if (!n)
            return _a; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, o = {}; for (a in n)
            o[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; } function Ta(e) { return null != e.childContextTypes; } function Ra() { Ea(Oa), Ea(Pa); } function La(e, t, n) { if (Pa.current !== _a)
            throw Error(o(168)); Ca(Pa, t), Ca(Oa, n); } function ja(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(o(108, V(e) || "Unknown", a)); return D({}, n, r); } function Ma(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _a, Na = Pa.current, Ca(Pa, e), Ca(Oa, Oa.current), !0; } function Fa(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(o(169)); n ? (e = ja(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, Ea(Oa), Ea(Pa), Ca(Pa, e)) : Ea(Oa), Ca(Oa, n); } var Da = null, $a = !1, Ia = !1; function Aa(e) { null === Da ? Da = [e] : Da.push(e); } function Ua() { if (!Ia && null !== Da) {
            Ia = !0;
            var e = 0, t = yt;
            try {
                var n = Da;
                for (yt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                Da = null, $a = !1;
            }
            catch (t) {
                throw null !== Da && (Da = Da.slice(e + 1)), We(Ze, Ua), t;
            }
            finally {
                yt = t, Ia = !1;
            }
        } return null; } var qa = [], Va = 0, Ha = null, Ba = 0, Wa = [], Qa = 0, Ka = null, Ya = 1, Xa = ""; function Ga(e, t) { qa[Va++] = Ba, qa[Va++] = Ha, Ha = e, Ba = t; } function Za(e, t, n) { Wa[Qa++] = Ya, Wa[Qa++] = Xa, Wa[Qa++] = Ka, Ka = e; var r = Ya; e = Xa; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var o = 32 - ot(t) + a; if (30 < o) {
            var l = a - a % 5;
            o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, Ya = 1 << 32 - ot(t) + a | n << a | r, Xa = o + e;
        }
        else
            Ya = 1 << o | n << a | r, Xa = e; } function Ja(e) { null !== e.return && (Ga(e, 1), Za(e, 1, 0)); } function eo(e) { for (; e === Ha;)
            Ha = qa[--Va], qa[Va] = null, Ba = qa[--Va], qa[Va] = null; for (; e === Ka;)
            Ka = Wa[--Qa], Wa[Qa] = null, Xa = Wa[--Qa], Wa[Qa] = null, Ya = Wa[--Qa], Wa[Qa] = null; } var to = null, no = null, ro = !1, ao = null; function oo(e, t) { var n = zs(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function lo(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, to = e, no = ua(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, to = e, no = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ka ? { id: Ya, overflow: Xa } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, to = e, no = null, !0);
            default: return !1;
        } } function io(e) { return !(!(1 & e.mode) || 128 & e.flags); } function uo(e) { if (ro) {
            var t = no;
            if (t) {
                var n = t;
                if (!lo(e, t)) {
                    if (io(e))
                        throw Error(o(418));
                    t = ua(n.nextSibling);
                    var r = to;
                    t && lo(e, t) ? oo(r, n) : (e.flags = -4097 & e.flags | 2, ro = !1, to = e);
                }
            }
            else {
                if (io(e))
                    throw Error(o(418));
                e.flags = -4097 & e.flags | 2, ro = !1, to = e;
            }
        } } function so(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; to = e; } function co(e) { if (e !== to)
            return !1; if (!ro)
            return so(e), ro = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ta(e.type, e.memoizedProps)), t && (t = no)) {
            if (io(e))
                throw fo(), Error(o(418));
            for (; t;)
                oo(e, t), t = ua(t.nextSibling);
        } if (so(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                no = ua(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                no = null;
            }
        }
        else
            no = to ? ua(e.stateNode.nextSibling) : null; return !0; } function fo() { for (var e = no; e;)
            e = ua(e.nextSibling); } function po() { no = to = null, ro = !1; } function mo(e) { null === ao ? ao = [e] : ao.push(e); } var ho = w.ReactCurrentBatchConfig; function vo(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(o(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(o(147, e));
                var a = r, l = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === l ? t.ref : (t = function (e) { var t = a.refs; null === e ? delete t[l] : t[l] = e; }, t._stringRef = l, t);
            }
            if ("string" != typeof e)
                throw Error(o(284));
            if (!n._owner)
                throw Error(o(290, e));
        } return e; } function go(e, t) { throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function yo(e) { return (0, e._init)(e._payload); } function bo(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Rs(e, t)).index = 0, e.sibling = null, e; } function l(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Fs(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var o = n.type; return o === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === R && yo(o) === t.type) ? ((r = a(t, n.props)).ref = vo(e, t, n), r.return = e, r) : ((r = Ls(n.type, n.key, n.props, null, e.mode, r)).ref = vo(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ds(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function f(e, t, n, r, o) { return null === t || 7 !== t.tag ? ((t = js(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t); } function d(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = Fs("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Ls(t.type, t.key, t.props, null, e.mode, n)).ref = vo(e, null, t), n.return = e, n;
                case S: return (t = Ds(t, e.mode, n)).return = e, t;
                case R: return d(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || M(t))
                return (t = js(t, e.mode, n, null)).return = e, t;
            go(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case R: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || M(n))
                return null !== a ? null : f(e, t, n, r, null);
            go(e, n);
        } return null; } function m(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case R: return m(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || M(r))
                return f(t, e = e.get(n) || null, r, a, null);
            go(t, r);
        } return null; } function h(a, o, i, u) { for (var s = null, c = null, f = o, h = o = 0, v = null; null !== f && h < i.length; h++) {
            f.index > h ? (v = f, f = null) : v = f.sibling;
            var g = p(a, f, i[h], u);
            if (null === g) {
                null === f && (f = v);
                break;
            }
            e && f && null === g.alternate && t(a, f), o = l(g, o, h), null === c ? s = g : c.sibling = g, c = g, f = v;
        } if (h === i.length)
            return n(a, f), ro && Ga(a, h), s; if (null === f) {
            for (; h < i.length; h++)
                null !== (f = d(a, i[h], u)) && (o = l(f, o, h), null === c ? s = f : c.sibling = f, c = f);
            return ro && Ga(a, h), s;
        } for (f = r(a, f); h < i.length; h++)
            null !== (v = m(f, a, h, i[h], u)) && (e && null !== v.alternate && f.delete(null === v.key ? h : v.key), o = l(v, o, h), null === c ? s = v : c.sibling = v, c = v); return e && f.forEach((function (e) { return t(a, e); })), ro && Ga(a, h), s; } function v(a, i, u, s) { var c = M(u); if ("function" != typeof c)
            throw Error(o(150)); if (null == (u = c.call(u)))
            throw Error(o(151)); for (var f = c = null, h = i, v = i = 0, g = null, y = u.next(); null !== h && !y.done; v++, y = u.next()) {
            h.index > v ? (g = h, h = null) : g = h.sibling;
            var b = p(a, h, y.value, s);
            if (null === b) {
                null === h && (h = g);
                break;
            }
            e && h && null === b.alternate && t(a, h), i = l(b, i, v), null === f ? c = b : f.sibling = b, f = b, h = g;
        } if (y.done)
            return n(a, h), ro && Ga(a, v), c; if (null === h) {
            for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) && (i = l(y, i, v), null === f ? c = y : f.sibling = y, f = y);
            return ro && Ga(a, v), c;
        } for (h = r(a, h); !y.done; v++, y = u.next())
            null !== (y = m(h, a, v, y.value, s)) && (e && null !== y.alternate && h.delete(null === y.key ? v : y.key), i = l(y, i, v), null === f ? c = y : f.sibling = y, f = y); return e && h.forEach((function (e) { return t(a, e); })), ro && Ga(a, v), c; } return function e(r, o, l, u) { if ("object" == typeof l && null !== l && l.type === x && null === l.key && (l = l.props.children), "object" == typeof l && null !== l) {
            switch (l.$$typeof) {
                case k:
                    e: {
                        for (var s = l.key, c = o; null !== c;) {
                            if (c.key === s) {
                                if ((s = l.type) === x) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (o = a(c, l.props.children)).return = r, r = o;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === R && yo(s) === c.type) {
                                    n(r, c.sibling), (o = a(c, l.props)).ref = vo(r, c, l), o.return = r, r = o;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        l.type === x ? ((o = js(l.props.children, r.mode, u, l.key)).return = r, r = o) : ((u = Ls(l.type, l.key, l.props, null, r.mode, u)).ref = vo(r, o, l), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = l.key; null !== o;) {
                            if (o.key === c) {
                                if (4 === o.tag && o.stateNode.containerInfo === l.containerInfo && o.stateNode.implementation === l.implementation) {
                                    n(r, o.sibling), (o = a(o, l.children || [])).return = r, r = o;
                                    break e;
                                }
                                n(r, o);
                                break;
                            }
                            t(r, o), o = o.sibling;
                        }
                        (o = Ds(l, r.mode, u)).return = r, r = o;
                    }
                    return i(r);
                case R: return e(r, o, (c = l._init)(l._payload), u);
            }
            if (te(l))
                return h(r, o, l, u);
            if (M(l))
                return v(r, o, l, u);
            go(r, l);
        } return "string" == typeof l && "" !== l || "number" == typeof l ? (l = "" + l, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, l)).return = r, r = o) : (n(r, o), (o = Fs(l, r.mode, u)).return = r, r = o), i(r)) : n(r, o); }; } var wo = bo(!0), ko = bo(!1), So = xa(null), xo = null, Eo = null, Co = null; function _o() { Co = Eo = xo = null; } function Po(e) { var t = So.current; Ea(So), e._currentValue = t; } function Oo(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function No(e, t) { xo = e, Co = Eo = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (yi = !0), e.firstContext = null); } function zo(e) { var t = e._currentValue; if (Co !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === Eo) {
                if (null === xo)
                    throw Error(o(308));
                Eo = e, xo.dependencies = { lanes: 0, firstContext: e };
            }
            else
                Eo = Eo.next = e; return t; } var To = null; function Ro(e) { null === To ? To = [e] : To.push(e); } function Lo(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Ro(t)) : (n.next = a.next, a.next = n), t.interleaved = n, jo(e, r); } function jo(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Mo = !1; function Fo(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function Do(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function $o(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Io(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 2 & Pu) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, jo(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Ro(r)) : (t.next = a.next, a.next = t), r.interleaved = t, jo(e, n); } function Ao(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, gt(e, n);
        } } function Uo(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, o = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === o ? a = o = l : o = o.next = l, n = n.next;
                } while (null !== n);
                null === o ? a = o = t : o = o.next = t;
            }
            else
                a = o = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function qo(e, t, n, r) { var a = e.updateQueue; Mo = !1; var o = a.firstBaseUpdate, l = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === l ? o = s : l.next = s, l = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== l && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== o) {
            var f = a.baseState;
            for (l = 0, c = s = u = null, i = o;;) {
                var d = i.lane, p = i.eventTime;
                if ((r & d) === d) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var m = e, h = i;
                        switch (d = t, p = n, h.tag) {
                            case 1:
                                if ("function" == typeof (m = h.payload)) {
                                    f = m.call(p, f, d);
                                    break e;
                                }
                                f = m;
                                break e;
                            case 3: m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (d = "function" == typeof (m = h.payload) ? m.call(p, f, d) : m))
                                    break e;
                                f = D({}, f, d);
                                break e;
                            case 2: Mo = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [i] : d.push(i));
                }
                else
                    p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = f) : c = c.next = p, l |= d;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (d = i).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
                }
            }
            if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    l |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === o && (a.shared.lanes = 0);
            Mu |= l, e.lanes = l, e.memoizedState = f;
        } } function Vo(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(o(191, a));
                    a.call(r);
                }
            } } var Ho = {}, Bo = xa(Ho), Wo = xa(Ho), Qo = xa(Ho); function Ko(e) { if (e === Ho)
            throw Error(o(174)); return e; } function Yo(e, t) { switch (Ca(Qo, t), Ca(Wo, e), Ca(Bo, Ho), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ea(Bo), Ca(Bo, t); } function Xo() { Ea(Bo), Ea(Wo), Ea(Qo); } function Go(e) { Ko(Qo.current); var t = Ko(Bo.current), n = ue(t, e.type); t !== n && (Ca(Wo, e), Ca(Bo, n)); } function Zo(e) { Wo.current === e && (Ea(Bo), Ea(Wo)); } var Jo = xa(0); function el(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (128 & t.flags)
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var tl = []; function nl() { for (var e = 0; e < tl.length; e++)
            tl[e]._workInProgressVersionPrimary = null; tl.length = 0; } var rl = w.ReactCurrentDispatcher, al = w.ReactCurrentBatchConfig, ol = 0, ll = null, il = null, ul = null, sl = !1, cl = !1, fl = 0, dl = 0; function pl() { throw Error(o(321)); } function ml(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n]))
                return !1; return !0; } function hl(e, t, n, r, a, l) { if (ol = l, ll = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = null === e || null === e.memoizedState ? Zl : Jl, e = n(r, a), cl) {
            l = 0;
            do {
                if (cl = !1, fl = 0, 25 <= l)
                    throw Error(o(301));
                l += 1, ul = il = null, t.updateQueue = null, rl.current = ei, e = n(r, a);
            } while (cl);
        } if (rl.current = Gl, t = null !== il && null !== il.next, ol = 0, ul = il = ll = null, sl = !1, t)
            throw Error(o(300)); return e; } function vl() { var e = 0 !== fl; return fl = 0, e; } function gl() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ul ? ll.memoizedState = ul = e : ul = ul.next = e, ul; } function yl() { if (null === il) {
            var e = ll.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = il.next; var t = null === ul ? ll.memoizedState : ul.next; if (null !== t)
            ul = t, il = e;
        else {
            if (null === e)
                throw Error(o(310));
            e = { memoizedState: (il = e).memoizedState, baseState: il.baseState, baseQueue: il.baseQueue, queue: il.queue, next: null }, null === ul ? ll.memoizedState = ul = e : ul = ul.next = e;
        } return ul; } function bl(e, t) { return "function" == typeof t ? t(e) : t; } function wl(e) { var t = yl(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = il, a = r.baseQueue, l = n.pending; if (null !== l) {
            if (null !== a) {
                var i = a.next;
                a.next = l.next, l.next = i;
            }
            r.baseQueue = a = l, n.pending = null;
        } if (null !== a) {
            l = a.next, r = r.baseState;
            var u = i = null, s = null, c = l;
            do {
                var f = c.lane;
                if ((ol & f) === f)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = d, i = r) : s = s.next = d, ll.lanes |= f, Mu |= f;
                }
                c = c.next;
            } while (null !== c && c !== l);
            null === s ? i = r : s.next = u, lr(r, t.memoizedState) || (yi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                l = a.lane, ll.lanes |= l, Mu |= l, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function kl(e) { var t = yl(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, l = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                l = e(l, i.action), i = i.next;
            } while (i !== a);
            lr(l, t.memoizedState) || (yi = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l;
        } return [l, r]; } function Sl() { } function xl(e, t) { var n = ll, r = yl(), a = t(), l = !lr(r.memoizedState, a); if (l && (r.memoizedState = a, yi = !0), r = r.queue, Ml(_l.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== ul && 1 & ul.memoizedState.tag) {
            if (n.flags |= 2048, zl(9, Cl.bind(null, n, r, a, t), void 0, null), null === Ou)
                throw Error(o(349));
            30 & ol || El(n, t, a);
        } return a; } function El(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = ll.updateQueue) ? (t = { lastEffect: null, stores: null }, ll.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Cl(e, t, n, r) { t.value = n, t.getSnapshot = r, Pl(t) && Ol(e); } function _l(e, t, n) { return n((function () { Pl(t) && Ol(e); })); } function Pl(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !lr(e, n);
        }
        catch (e) {
            return !0;
        } } function Ol(e) { var t = jo(e, 1); null !== t && ts(t, e, 1, -1); } function Nl(e) { var t = gl(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bl, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ql.bind(null, ll, e), [t.memoizedState, e]; } function zl(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = ll.updateQueue) ? (t = { lastEffect: null, stores: null }, ll.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Tl() { return yl().memoizedState; } function Rl(e, t, n, r) { var a = gl(); ll.flags |= e, a.memoizedState = zl(1 | t, n, void 0, void 0 === r ? null : r); } function Ll(e, t, n, r) { var a = yl(); r = void 0 === r ? null : r; var o = void 0; if (null !== il) {
            var l = il.memoizedState;
            if (o = l.destroy, null !== r && ml(r, l.deps))
                return void (a.memoizedState = zl(t, n, o, r));
        } ll.flags |= e, a.memoizedState = zl(1 | t, n, o, r); } function jl(e, t) { return Rl(8390656, 8, e, t); } function Ml(e, t) { return Ll(2048, 8, e, t); } function Fl(e, t) { return Ll(4, 2, e, t); } function Dl(e, t) { return Ll(4, 4, e, t); } function $l(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Il(e, t, n) { return n = null != n ? n.concat([e]) : null, Ll(4, 4, $l.bind(null, t, e), n); } function Al() { } function Ul(e, t) { var n = yl(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && ml(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function ql(e, t) { var n = yl(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && ml(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Vl(e, t, n) { return 21 & ol ? (lr(n, t) || (n = mt(), ll.lanes |= n, Mu |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, yi = !0), e.memoizedState = n); } function Hl(e, t) { var n = yt; yt = 0 !== n && 4 > n ? n : 4, e(!0); var r = al.transition; al.transition = {}; try {
            e(!1), t();
        }
        finally {
            yt = n, al.transition = r;
        } } function Bl() { return yl().memoizedState; } function Wl(e, t, n) { var r = es(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kl(e) ? Yl(t, n) : null !== (n = Lo(e, t, n, r)) && (ts(n, e, r, Ju()), Xl(n, t, r)); } function Ql(e, t, n) { var r = es(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Kl(e))
            Yl(t, a);
        else {
            var o = e.alternate;
            if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                try {
                    var l = t.lastRenderedState, i = o(l, n);
                    if (a.hasEagerState = !0, a.eagerState = i, lr(i, l)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Ro(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Lo(e, t, a, r)) && (ts(n, e, r, a = Ju()), Xl(n, t, r));
        } } function Kl(e) { var t = e.alternate; return e === ll || null !== t && t === ll; } function Yl(e, t) { cl = sl = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function Xl(e, t, n) { if (4194240 & n) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, gt(e, n);
        } } var Gl = { readContext: zo, useCallback: pl, useContext: pl, useEffect: pl, useImperativeHandle: pl, useInsertionEffect: pl, useLayoutEffect: pl, useMemo: pl, useReducer: pl, useRef: pl, useState: pl, useDebugValue: pl, useDeferredValue: pl, useTransition: pl, useMutableSource: pl, useSyncExternalStore: pl, useId: pl, unstable_isNewReconciler: !1 }, Zl = { readContext: zo, useCallback: function (e, t) { return gl().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: zo, useEffect: jl, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Rl(4194308, 4, $l.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Rl(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Rl(4, 2, e, t); }, useMemo: function (e, t) { var n = gl(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = gl(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wl.bind(null, ll, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, gl().memoizedState = e; }, useState: Nl, useDebugValue: Al, useDeferredValue: function (e) { return gl().memoizedState = e; }, useTransition: function () { var e = Nl(!1), t = e[0]; return e = Hl.bind(null, e[1]), gl().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = ll, a = gl(); if (ro) {
                if (void 0 === n)
                    throw Error(o(407));
                n = n();
            }
            else {
                if (n = t(), null === Ou)
                    throw Error(o(349));
                30 & ol || El(r, t, n);
            } a.memoizedState = n; var l = { value: n, getSnapshot: t }; return a.queue = l, jl(_l.bind(null, r, l, e), [e]), r.flags |= 2048, zl(9, Cl.bind(null, r, l, n, t), void 0, null), n; }, useId: function () { var e = gl(), t = Ou.identifierPrefix; if (ro) {
                var n = Xa;
                t = ":" + t + "R" + (n = (Ya & ~(1 << 32 - ot(Ya) - 1)).toString(32) + n), 0 < (n = fl++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = dl++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, Jl = { readContext: zo, useCallback: Ul, useContext: zo, useEffect: Ml, useImperativeHandle: Il, useInsertionEffect: Fl, useLayoutEffect: Dl, useMemo: ql, useReducer: wl, useRef: Tl, useState: function () { return wl(bl); }, useDebugValue: Al, useDeferredValue: function (e) { return Vl(yl(), il.memoizedState, e); }, useTransition: function () { return [wl(bl)[0], yl().memoizedState]; }, useMutableSource: Sl, useSyncExternalStore: xl, useId: Bl, unstable_isNewReconciler: !1 }, ei = { readContext: zo, useCallback: Ul, useContext: zo, useEffect: Ml, useImperativeHandle: Il, useInsertionEffect: Fl, useLayoutEffect: Dl, useMemo: ql, useReducer: kl, useRef: Tl, useState: function () { return kl(bl); }, useDebugValue: Al, useDeferredValue: function (e) { var t = yl(); return null === il ? t.memoizedState = e : Vl(t, il.memoizedState, e); }, useTransition: function () { return [kl(bl)[0], yl().memoizedState]; }, useMutableSource: Sl, useSyncExternalStore: xl, useId: Bl, unstable_isNewReconciler: !1 }; function ti(e, t) { if (e && e.defaultProps) {
            for (var n in t = D({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } function ni(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : D({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var ri = { isMounted: function (e) { return !!(e = e._reactInternals) && Ue(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Ju(), a = es(e), o = $o(r, a); o.payload = t, null != n && (o.callback = n), null !== (t = Io(e, o, a)) && (ts(t, e, a, r), Ao(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Ju(), a = es(e), o = $o(r, a); o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = Io(e, o, a)) && (ts(t, e, a, r), Ao(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Ju(), r = es(e), a = $o(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Io(e, a, r)) && (ts(t, e, r, n), Ao(t, e, r)); } }; function ai(e, t, n, r, a, o, l) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, l) : !(t.prototype && t.prototype.isPureReactComponent && ir(n, r) && ir(a, o)); } function oi(e, t, n) { var r = !1, a = _a, o = t.contextType; return "object" == typeof o && null !== o ? o = zo(o) : (a = Ta(t) ? Na : Pa.current, o = (r = null != (r = t.contextTypes)) ? za(e, a) : _a), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ri, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t; } function li(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ri.enqueueReplaceState(t, t.state, null); } function ii(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = {}, Fo(e); var o = t.contextType; "object" == typeof o && null !== o ? a.context = zo(o) : (o = Ta(t) ? Na : Pa.current, a.context = za(e, o)), a.state = e.memoizedState, "function" == typeof (o = t.getDerivedStateFromProps) && (ni(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && ri.enqueueReplaceState(a, a.state, null), qo(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function ui(e, t) { try {
            var n = "", r = t;
            do {
                n += U(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function si(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function ci(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var fi = "function" == typeof WeakMap ? WeakMap : Map; function di(e, t, n) { (n = $o(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Vu || (Vu = !0, Hu = r), ci(0, t); }, n; } function pi(e, t, n) { (n = $o(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { ci(0, t); };
        } var o = e.stateNode; return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function () { ci(0, t), "function" != typeof r && (null === Bu ? Bu = new Set([this]) : Bu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function mi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new fi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = Es.bind(null, e, t, n), t.then(e, e)); } function hi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function vi(e, t, n, r, a) { return 1 & e.mode ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = $o(-1, 1)).tag = 2, Io(n, t, 1))), n.lanes |= 1), e); } var gi = w.ReactCurrentOwner, yi = !1; function bi(e, t, n, r) { t.child = null === e ? ko(t, null, n, r) : wo(t, e.child, n, r); } function wi(e, t, n, r, a) { n = n.render; var o = t.ref; return No(t, a), r = hl(e, t, n, r, o, a), n = vl(), null === e || yi ? (ro && n && Ja(t), t.flags |= 1, bi(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a)); } function ki(e, t, n, r, a) { if (null === e) {
            var o = n.type;
            return "function" != typeof o || Ts(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ls(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Si(e, t, o, r, a));
        } if (o = e.child, !(e.lanes & a)) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ir)(l, r) && e.ref === t.ref)
                return Vi(e, t, a);
        } return t.flags |= 1, (e = Rs(o, r)).ref = t.ref, e.return = t, t.child = e; } function Si(e, t, n, r, a) { if (null !== e) {
            var o = e.memoizedProps;
            if (ir(o, r) && e.ref === t.ref) {
                if (yi = !1, t.pendingProps = r = o, !(e.lanes & a))
                    return t.lanes = e.lanes, Vi(e, t, a);
                131072 & e.flags && (yi = !0);
            }
        } return Ci(e, t, n, r, a); } function xi(e, t, n) { var r = t.pendingProps, a = r.children, o = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (1 & t.mode) {
                if (!(1073741824 & n))
                    return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ca(Ru, Tu), Tu |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== o ? o.baseLanes : n, Ca(Ru, Tu), Tu |= r;
            }
            else
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ca(Ru, Tu), Tu |= n;
        else
            null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ca(Ru, Tu), Tu |= r; return bi(e, t, a, n), t.child; } function Ei(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Ci(e, t, n, r, a) { var o = Ta(n) ? Na : Pa.current; return o = za(t, o), No(t, a), n = hl(e, t, n, r, o, a), r = vl(), null === e || yi ? (ro && r && Ja(t), t.flags |= 1, bi(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vi(e, t, a)); } function _i(e, t, n, r, a) { if (Ta(n)) {
            var o = !0;
            Ma(t);
        }
        else
            o = !1; if (No(t, a), null === t.stateNode)
            qi(e, t), oi(t, n, r), ii(t, n, r, a), r = !0;
        else if (null === e) {
            var l = t.stateNode, i = t.memoizedProps;
            l.props = i;
            var u = l.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? zo(s) : za(t, s = Ta(n) ? Na : Pa.current);
            var c = n.getDerivedStateFromProps, f = "function" == typeof c || "function" == typeof l.getSnapshotBeforeUpdate;
            f || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i !== r || u !== s) && li(t, l, r, s), Mo = !1;
            var d = t.memoizedState;
            l.state = d, qo(t, r, l, a), u = t.memoizedState, i !== r || d !== u || Oa.current || Mo ? ("function" == typeof c && (ni(t, n, c, r), u = t.memoizedState), (i = Mo || ai(t, n, i, r, d, u, s)) ? (f || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = i) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            l = t.stateNode, Do(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : ti(t.type, i), l.props = s, f = t.pendingProps, d = l.context, u = "object" == typeof (u = n.contextType) && null !== u ? zo(u) : za(t, u = Ta(n) ? Na : Pa.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i !== f || d !== u) && li(t, l, r, u), Mo = !1, d = t.memoizedState, l.state = d, qo(t, r, l, a);
            var m = t.memoizedState;
            i !== f || d !== m || Oa.current || Mo ? ("function" == typeof p && (ni(t, n, p, r), m = t.memoizedState), (s = Mo || ai(t, n, s, r, d, m, u) || !1) ? (c || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, m, u), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, m, u)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), l.props = r, l.state = m, l.context = u, r = s) : ("function" != typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Pi(e, t, n, r, o, a); } function Pi(e, t, n, r, a, o) { Ei(e, t); var l = !!(128 & t.flags); if (!r && !l)
            return a && Fa(t, n, !1), Vi(e, t, o); r = t.stateNode, gi.current = t; var i = l && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && l ? (t.child = wo(t, e.child, null, o), t.child = wo(t, null, i, o)) : bi(e, t, i, o), t.memoizedState = r.state, a && Fa(t, n, !0), t.child; } function Oi(e) { var t = e.stateNode; t.pendingContext ? La(0, t.pendingContext, t.pendingContext !== t.context) : t.context && La(0, t.context, !1), Yo(e, t.containerInfo); } function Ni(e, t, n, r, a) { return po(), mo(a), t.flags |= 256, bi(e, t, n, r), t.child; } var zi, Ti, Ri, Li, ji = { dehydrated: null, treeContext: null, retryLane: 0 }; function Mi(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function Fi(e, t, n) { var r, a = t.pendingProps, l = Jo.current, i = !1, u = !!(128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && !!(2 & l)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (l |= 1), Ca(Jo, 1 & l), null === e)
            return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 1 & a || null === i ? i = Ms(u, a, 0, null) : (i.childLanes = 0, i.pendingProps = u), e = js(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mi(n), t.memoizedState = ji, e) : Di(t, u)); if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return function (e, t, n, r, a, l, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, $i(e, t, i, r = si(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, a = t.mode, r = Ms({ mode: "visible", children: r.children }, a, 0, null), (l = js(l, a, i, null)).flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, 1 & t.mode && wo(t, e.child, null, i), t.child.memoizedState = Mi(i), t.memoizedState = ji, l); if (!(1 & t.mode))
                return $i(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, $i(e, t, i, r = si(l = Error(o(419)), r, void 0));
            } if (u = !!(i & e.childLanes), yi || u) {
                if (null !== (r = Ou)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = a & (r.suspendedLanes | i) ? 0 : a) && a !== l.retryLane && (l.retryLane = a, jo(e, a), ts(r, e, a, -1));
                }
                return ms(), $i(e, t, i, r = si(Error(o(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = _s.bind(null, e), a._reactRetry = t, null) : (e = l.treeContext, no = ua(a.nextSibling), to = t, ro = !0, ao = null, null !== e && (Wa[Qa++] = Ya, Wa[Qa++] = Xa, Wa[Qa++] = Ka, Ya = e.id, Xa = e.overflow, Ka = t), (t = Di(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, l, n); if (i) {
            i = a.fallback, u = t.mode, r = (l = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 1 & u || t.child === l ? (a = Rs(l, s)).subtreeFlags = 14680064 & l.subtreeFlags : ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null), null !== r ? i = Rs(r, i) : (i = js(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Mi(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = ji, a;
        } return e = (i = e.child).sibling, a = Rs(i, { mode: "visible", children: a.children }), !(1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Di(e, t) { return (t = Ms({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function $i(e, t, n, r) { return null !== r && mo(r), wo(t, e.child, null, n), (e = Di(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Ii(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), Oo(e.return, t, n); } function Ai(e, t, n, r, a) { var o = e.memoizedState; null === o ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a); } function Ui(e, t, n) { var r = t.pendingProps, a = r.revealOrder, o = r.tail; if (bi(e, t, r.children, n), 2 & (r = Jo.current))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 128 & e.flags)
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Ii(e, n, t);
                    else if (19 === e.tag)
                        Ii(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (Ca(Jo, r), 1 & t.mode)
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === el(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ai(t, !1, a, n, o);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === el(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    Ai(t, !0, n, null, o);
                    break;
                case "together":
                    Ai(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            }
        else
            t.memoizedState = null; return t.child; } function qi(e, t) { !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Vi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Mu |= t.lanes, !(n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(o(153)); if (null !== t.child) {
            for (n = Rs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Rs(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Hi(e, t) { if (!ro)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function Bi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Wi(e, t, n) { var r = t.pendingProps; switch (eo(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return Bi(t), null;
            case 1:
            case 17: return Ta(t.type) && Ra(), Bi(t), null;
            case 3: return r = t.stateNode, Xo(), Ea(Oa), Ea(Pa), nl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (co(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== ao && (os(ao), ao = null))), Ti(e, t), Bi(t), null;
            case 5:
                Zo(t);
                var a = Ko(Qo.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Ri(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return Bi(t), null;
                    }
                    if (e = Ko(Bo.current), co(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch (r[fa] = t, r[da] = l, e = !!(1 & t.mode), n) {
                            case "dialog":
                                $r("cancel", r), $r("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $r("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < jr.length; a++)
                                    $r(jr[a], r);
                                break;
                            case "source":
                                $r("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $r("error", r), $r("load", r);
                                break;
                            case "details":
                                $r("toggle", r);
                                break;
                            case "input":
                                X(r, l), $r("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!l.multiple }, $r("invalid", r);
                                break;
                            case "textarea": ae(r, l), $r("invalid", r);
                        }
                        for (var u in ge(n, l), a = null, l)
                            if (l.hasOwnProperty(u)) {
                                var s = l[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && $r("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                W(r), J(r, l, !0);
                                break;
                            case "textarea":
                                W(r), le(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof l.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[fa] = t, e[da] = r, zi(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = ye(n, r), n) {
                                case "dialog":
                                    $r("cancel", e), $r("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    $r("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < jr.length; a++)
                                        $r(jr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    $r("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    $r("error", e), $r("load", e), a = r;
                                    break;
                                case "details":
                                    $r("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), $r("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = D({}, r, { value: void 0 }), $r("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), $r("invalid", e);
                            }
                            for (l in ge(n, a), s = a)
                                if (s.hasOwnProperty(l)) {
                                    var c = s[l];
                                    "style" === l ? he(e, c) : "dangerouslySetInnerHTML" === l ? null != (c = c ? c.__html : void 0) && ce(e, c) : "children" === l ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (i.hasOwnProperty(l) ? null != c && "onScroll" === l && $r("scroll", e) : null != c && b(e, l, c, u));
                                }
                            switch (n) {
                                case "input":
                                    W(e), J(e, r, !1);
                                    break;
                                case "textarea":
                                    W(e), le(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + H(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (l = r.value) ? ne(e, !!r.multiple, l, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return Bi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Li(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(o(166));
                    if (n = Ko(Qo.current), Ko(Bo.current), co(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (l = r.nodeValue !== n) && null !== (e = to))
                            switch (e.tag) {
                                case 3:
                                    Gr(r.nodeValue, n, !!(1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, !!(1 & e.mode));
                            }
                        l && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r;
                }
                return Bi(t), null;
            case 13:
                if (Ea(Jo), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (ro && null !== no && 1 & t.mode && !(128 & t.flags))
                        fo(), po(), t.flags |= 98560, l = !1;
                    else if (l = co(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!l)
                                throw Error(o(318));
                            if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                                throw Error(o(317));
                            l[fa] = t;
                        }
                        else
                            po(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        Bi(t), l = !1;
                    }
                    else
                        null !== ao && (os(ao), ao = null), l = !0;
                    if (!l)
                        return 65536 & t.flags ? t : null;
                }
                return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & Jo.current ? 0 === Lu && (Lu = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), Bi(t), null);
            case 4: return Xo(), Ti(e, t), null === e && Ur(t.stateNode.containerInfo), Bi(t), null;
            case 10: return Po(t.type._context), Bi(t), null;
            case 19:
                if (Ea(Jo), null === (l = t.memoizedState))
                    return Bi(t), null;
                if (r = !!(128 & t.flags), null === (u = l.rendering))
                    if (r)
                        Hi(l, !1);
                    else {
                        if (0 !== Lu || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e;) {
                                if (null !== (u = el(e))) {
                                    for (t.flags |= 128, Hi(l, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (l = n).flags &= 14680066, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return Ca(Jo, 1 & Jo.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== l.tail && Xe() > Uu && (t.flags |= 128, r = !0, Hi(l, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = el(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Hi(l, !0), null === l.tail && "hidden" === l.tailMode && !u.alternate && !ro)
                                return Bi(t), null;
                        }
                        else
                            2 * Xe() - l.renderingStartTime > Uu && 1073741824 !== n && (t.flags |= 128, r = !0, Hi(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = l.last) ? n.sibling = u : t.child = u, l.last = u);
                }
                return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Xe(), t.sibling = null, n = Jo.current, Ca(Jo, r ? 1 & n | 2 : 1 & n), t) : (Bi(t), null);
            case 22:
            case 23: return cs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & Tu) && (Bi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Bi(t), null;
            case 24:
            case 25: return null;
        } throw Error(o(156, t.tag)); } function Qi(e, t) { switch (eo(t), t.tag) {
            case 1: return Ta(t.type) && Ra(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return Xo(), Ea(Oa), Ea(Pa), nl(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return Zo(t), null;
            case 13:
                if (Ea(Jo), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(o(340));
                    po();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ea(Jo), null;
            case 4: return Xo(), null;
            case 10: return Po(t.type._context), null;
            case 22:
            case 23: return cs(), null;
            default: return null;
        } } zi = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Ti = function () { }, Ri = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, Ko(Bo.current);
            var o, l = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), l = [];
                    break;
                case "select":
                    a = D({}, a, { value: void 0 }), r = D({}, r, { value: void 0 }), l = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), l = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ge(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (o in u)
                            u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (o in u)
                                !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                            for (o in s)
                                s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
                        }
                        else
                            n || (l || (l = []), l.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (l = l || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (l = l || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && $r("scroll", e), l || u === s || (l = [])) : (l = l || []).push(c, s));
            }
            n && (l = l || []).push("style", n);
            var c = l;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Li = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Ki = !1, Yi = !1, Xi = "function" == typeof WeakSet ? WeakSet : Set, Gi = null; function Zi(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    xs(e, t, n);
                }
            else
                n.current = null; } function Ji(e, t, n) { try {
            n();
        }
        catch (n) {
            xs(e, t, n);
        } } var eu = !1; function tu(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var o = a.destroy;
                    a.destroy = void 0, void 0 !== o && Ji(t, n, o);
                }
                a = a.next;
            } while (a !== r);
        } } function nu(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function ru(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function au(e) { var t = e.alternate; null !== t && (e.alternate = null, au(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fa], delete t[da], delete t[ma], delete t[ha], delete t[va]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function ou(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function lu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || ou(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function iu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (iu(e, t, n), e = e.sibling; null !== e;)
                iu(e, t, n), e = e.sibling; } function uu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e;)
                uu(e, t, n), e = e.sibling; } var su = null, cu = !1; function fu(e, t, n) { for (n = n.child; null !== n;)
            du(e, t, n), n = n.sibling; } function du(e, t, n) { if (at && "function" == typeof at.onCommitFiberUnmount)
            try {
                at.onCommitFiberUnmount(rt, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Yi || Zi(n, t);
            case 6:
                var r = su, a = cu;
                su = null, fu(e, t, n), cu = a, null !== (su = r) && (cu ? (e = su, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : su.removeChild(n.stateNode));
                break;
            case 18:
                null !== su && (cu ? (e = su, n = n.stateNode, 8 === e.nodeType ? ia(e.parentNode, n) : 1 === e.nodeType && ia(e, n), Ut(e)) : ia(su, n.stateNode));
                break;
            case 4:
                r = su, a = cu, su = n.stateNode.containerInfo, cu = !0, fu(e, t, n), su = r, cu = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Yi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var o = a, l = o.destroy;
                        o = o.tag, void 0 !== l && (2 & o || 4 & o) && Ji(n, t, l), a = a.next;
                    } while (a !== r);
                }
                fu(e, t, n);
                break;
            case 1:
                if (!Yi && (Zi(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        xs(n, t, e);
                    }
                fu(e, t, n);
                break;
            case 21:
                fu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Yi = (r = Yi) || null !== n.memoizedState, fu(e, t, n), Yi = r) : fu(e, t, n);
                break;
            default: fu(e, t, n);
        } } function pu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi), t.forEach((function (t) { var r = Ps.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function mu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var l = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                su = u.stateNode, cu = !1;
                                break e;
                            case 3:
                            case 4:
                                su = u.stateNode.containerInfo, cu = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === su)
                        throw Error(o(160));
                    du(l, i, a), su = null, cu = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    xs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                hu(t, e), t = t.sibling; } function hu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (mu(t, e), vu(e), 4 & r) {
                    try {
                        tu(3, e, e.return), nu(3, e);
                    }
                    catch (t) {
                        xs(e, e.return, t);
                    }
                    try {
                        tu(5, e, e.return);
                    }
                    catch (t) {
                        xs(e, e.return, t);
                    }
                }
                break;
            case 1:
                mu(t, e), vu(e), 512 & r && null !== n && Zi(n, n.return);
                break;
            case 5:
                if (mu(t, e), vu(e), 512 & r && null !== n && Zi(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        fe(a, "");
                    }
                    catch (t) {
                        xs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var l = e.memoizedProps, i = null !== n ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === l.type && null != l.name && G(a, l), ye(u, i);
                            var c = ye(u, l);
                            for (i = 0; i < s.length; i += 2) {
                                var f = s[i], d = s[i + 1];
                                "style" === f ? he(a, d) : "dangerouslySetInnerHTML" === f ? ce(a, d) : "children" === f ? fe(a, d) : b(a, f, d, c);
                            }
                            switch (u) {
                                case "input":
                                    Z(a, l);
                                    break;
                                case "textarea":
                                    oe(a, l);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!l.multiple;
                                    var m = l.value;
                                    null != m ? ne(a, !!l.multiple, m, !1) : p !== !!l.multiple && (null != l.defaultValue ? ne(a, !!l.multiple, l.defaultValue, !0) : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                            }
                            a[da] = l;
                        }
                        catch (t) {
                            xs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (mu(t, e), vu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(o(162));
                    a = e.stateNode, l = e.memoizedProps;
                    try {
                        a.nodeValue = l;
                    }
                    catch (t) {
                        xs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (mu(t, e), vu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        Ut(t.containerInfo);
                    }
                    catch (t) {
                        xs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                mu(t, e), vu(e);
                break;
            case 13:
                mu(t, e), vu(e), 8192 & (a = e.child).flags && (l = null !== a.memoizedState, a.stateNode.isHidden = l, !l || null !== a.alternate && null !== a.alternate.memoizedState || (Au = Xe())), 4 & r && pu(e);
                break;
            case 22:
                if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Yi = (c = Yi) || f, mu(t, e), Yi = c) : mu(t, e), vu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 1 & e.mode)
                        for (Gi = e, f = e.child; null !== f;) {
                            for (d = Gi = f; null !== Gi;) {
                                switch (m = (p = Gi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        tu(4, p, p.return);
                                        break;
                                    case 1:
                                        Zi(p, p.return);
                                        var h = p.stateNode;
                                        if ("function" == typeof h.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                                            }
                                            catch (e) {
                                                xs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Zi(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        wu(d);
                                        continue;
                                    }
                                }
                                null !== m ? (m.return = p, Gi = m) : wu(d);
                            }
                            f = f.sibling;
                        }
                    e: for (f = null, d = e;;) {
                        if (5 === d.tag) {
                            if (null === f) {
                                f = d;
                                try {
                                    a = d.stateNode, c ? "function" == typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (u = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    xs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === d.tag) {
                            if (null === f)
                                try {
                                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                                }
                                catch (t) {
                                    xs(e, e.return, t);
                                }
                        }
                        else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e)
                            break e;
                        for (; null === d.sibling;) {
                            if (null === d.return || d.return === e)
                                break e;
                            f === d && (f = null), d = d.return;
                        }
                        f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19: mu(t, e), vu(e), 4 & r && pu(e);
            case 21:
        } } function vu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (ou(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(o(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), uu(e, lu(e), a);
                        break;
                    case 3:
                    case 4:
                        var l = r.stateNode.containerInfo;
                        iu(e, lu(e), l);
                        break;
                    default: throw Error(o(161));
                }
            }
            catch (t) {
                xs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function gu(e, t, n) { Gi = e, yu(e, t, n); } function yu(e, t, n) { for (var r = !!(1 & e.mode); null !== Gi;) {
            var a = Gi, o = a.child;
            if (22 === a.tag && r) {
                var l = null !== a.memoizedState || Ki;
                if (!l) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Yi;
                    i = Ki;
                    var s = Yi;
                    if (Ki = l, (Yi = u) && !s)
                        for (Gi = a; null !== Gi;)
                            u = (l = Gi).child, 22 === l.tag && null !== l.memoizedState ? ku(a) : null !== u ? (u.return = l, Gi = u) : ku(a);
                    for (; null !== o;)
                        Gi = o, yu(o, t, n), o = o.sibling;
                    Gi = a, Ki = i, Yi = s;
                }
                bu(e);
            }
            else
                8772 & a.subtreeFlags && null !== o ? (o.return = a, Gi = o) : bu(e);
        } } function bu(e) { for (; null !== Gi;) {
            var t = Gi;
            if (8772 & t.flags) {
                var n = t.alternate;
                try {
                    if (8772 & t.flags)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Yi || nu(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Yi)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : ti(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var l = t.updateQueue;
                                null !== l && Vo(t, l, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    Vo(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var f = c.memoizedState;
                                        if (null !== f) {
                                            var d = f.dehydrated;
                                            null !== d && Ut(d);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(o(163));
                        }
                    Yi || 512 & t.flags && ru(t);
                }
                catch (e) {
                    xs(t, t.return, e);
                }
            }
            if (t === e) {
                Gi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Gi = n;
                break;
            }
            Gi = t.return;
        } } function wu(e) { for (; null !== Gi;) {
            var t = Gi;
            if (t === e) {
                Gi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Gi = n;
                break;
            }
            Gi = t.return;
        } } function ku(e) { for (; null !== Gi;) {
            var t = Gi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            nu(4, t);
                        }
                        catch (e) {
                            xs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                xs(t, a, e);
                            }
                        }
                        var o = t.return;
                        try {
                            ru(t);
                        }
                        catch (e) {
                            xs(t, o, e);
                        }
                        break;
                    case 5:
                        var l = t.return;
                        try {
                            ru(t);
                        }
                        catch (e) {
                            xs(t, l, e);
                        }
                }
            }
            catch (e) {
                xs(t, t.return, e);
            }
            if (t === e) {
                Gi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Gi = i;
                break;
            }
            Gi = t.return;
        } } var Su, xu = Math.ceil, Eu = w.ReactCurrentDispatcher, Cu = w.ReactCurrentOwner, _u = w.ReactCurrentBatchConfig, Pu = 0, Ou = null, Nu = null, zu = 0, Tu = 0, Ru = xa(0), Lu = 0, ju = null, Mu = 0, Fu = 0, Du = 0, $u = null, Iu = null, Au = 0, Uu = 1 / 0, qu = null, Vu = !1, Hu = null, Bu = null, Wu = !1, Qu = null, Ku = 0, Yu = 0, Xu = null, Gu = -1, Zu = 0; function Ju() { return 6 & Pu ? Xe() : -1 !== Gu ? Gu : Gu = Xe(); } function es(e) { return 1 & e.mode ? 2 & Pu && 0 !== zu ? zu & -zu : null !== ho.transition ? (0 === Zu && (Zu = mt()), Zu) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type) : 1; } function ts(e, t, n, r) { if (50 < Yu)
            throw Yu = 0, Xu = null, Error(o(185)); vt(e, n, r), 2 & Pu && e === Ou || (e === Ou && (!(2 & Pu) && (Fu |= n), 4 === Lu && ls(e, zu)), ns(e, r), 1 === n && 0 === Pu && !(1 & t.mode) && (Uu = Xe() + 500, $a && Ua())); } function ns(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var l = 31 - ot(o), i = 1 << l, u = a[l];
            -1 === u ? i & n && !(i & r) || (a[l] = dt(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
        } }(e, t); var r = ft(e, e === Ou ? zu : 0); if (0 === r)
            null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Qe(n), 1 === t)
                0 === e.tag ? function (e) { $a = !0, Aa(e); }(is.bind(null, e)) : Aa(is.bind(null, e)), oa((function () { !(6 & Pu) && Ua(); })), n = null;
            else {
                switch (bt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = Je;
                        break;
                    case 16:
                    default:
                        n = et;
                        break;
                    case 536870912: n = nt;
                }
                n = Os(n, rs.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function rs(e, t) { if (Gu = -1, Zu = 0, 6 & Pu)
            throw Error(o(327)); var n = e.callbackNode; if (ks() && e.callbackNode !== n)
            return null; var r = ft(e, e === Ou ? zu : 0); if (0 === r)
            return null; if (30 & r || r & e.expiredLanes || t)
            t = hs(e, r);
        else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var l = ps();
            for (Ou === e && zu === t || (qu = null, Uu = Xe() + 500, fs(e, t));;)
                try {
                    gs();
                    break;
                }
                catch (t) {
                    ds(e, t);
                }
            _o(), Eu.current = l, Pu = a, null !== Nu ? t = 0 : (Ou = null, zu = 0, t = Lu);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = pt(e)) && (r = a, t = as(e, a)), 1 === t)
                throw n = ju, fs(e, 0), ls(e, r), ns(e, Xe()), n;
            if (6 === t)
                ls(e, r);
            else {
                if (a = e.current.alternate, !(30 & r || function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], o = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!lr(o(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) || (t = hs(e, r), 2 === t && (l = pt(e), 0 !== l && (r = l, t = as(e, l))), 1 !== t)))
                    throw n = ju, fs(e, 0), ls(e, r), ns(e, Xe()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(o(345));
                    case 2:
                    case 5:
                        ws(e, Iu, qu);
                        break;
                    case 3:
                        if (ls(e, r), (130023424 & r) === r && 10 < (t = Au + 500 - Xe())) {
                            if (0 !== ft(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                Ju(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = na(ws.bind(null, e, Iu, qu), t);
                            break;
                        }
                        ws(e, Iu, qu);
                        break;
                    case 4:
                        if (ls(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - ot(r);
                            l = 1 << i, (i = t[i]) > a && (a = i), r &= ~l;
                        }
                        if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xu(r / 1960)) - r)) {
                            e.timeoutHandle = na(ws.bind(null, e, Iu, qu), r);
                            break;
                        }
                        ws(e, Iu, qu);
                        break;
                    default: throw Error(o(329));
                }
            }
        } return ns(e, Xe()), e.callbackNode === n ? rs.bind(null, e) : null; } function as(e, t) { var n = $u; return e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256), 2 !== (e = hs(e, t)) && (t = Iu, Iu = n, null !== t && os(t)), e; } function os(e) { null === Iu ? Iu = e : Iu.push.apply(Iu, e); } function ls(e, t) { for (t &= ~Du, t &= ~Fu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function is(e) { if (6 & Pu)
            throw Error(o(327)); ks(); var t = ft(e, 0); if (!(1 & t))
            return ns(e, Xe()), null; var n = hs(e, t); if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && (t = r, n = as(e, r));
        } if (1 === n)
            throw n = ju, fs(e, 0), ls(e, t), ns(e, Xe()), n; if (6 === n)
            throw Error(o(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, ws(e, Iu, qu), ns(e, Xe()), null; } function us(e, t) { var n = Pu; Pu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Pu = n) && (Uu = Xe() + 500, $a && Ua());
        } } function ss(e) { null !== Qu && 0 === Qu.tag && !(6 & Pu) && ks(); var t = Pu; Pu |= 1; var n = _u.transition, r = yt; try {
            if (_u.transition = null, yt = 1, e)
                return e();
        }
        finally {
            yt = r, _u.transition = n, !(6 & (Pu = t)) && Ua();
        } } function cs() { Tu = Ru.current, Ea(Ru); } function fs(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, ra(n)), null !== Nu)
            for (n = Nu.return; null !== n;) {
                var r = n;
                switch (eo(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Ra();
                        break;
                    case 3:
                        Xo(), Ea(Oa), Ea(Pa), nl();
                        break;
                    case 5:
                        Zo(r);
                        break;
                    case 4:
                        Xo();
                        break;
                    case 13:
                    case 19:
                        Ea(Jo);
                        break;
                    case 10:
                        Po(r.type._context);
                        break;
                    case 22:
                    case 23: cs();
                }
                n = n.return;
            } if (Ou = e, Nu = e = Rs(e.current, null), zu = Tu = t, Lu = 0, ju = null, Du = Fu = Mu = 0, Iu = $u = null, null !== To) {
            for (t = 0; t < To.length; t++)
                if (null !== (r = (n = To[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, o = n.pending;
                    if (null !== o) {
                        var l = o.next;
                        o.next = a, r.next = l;
                    }
                    n.pending = r;
                }
            To = null;
        } return e; } function ds(e, t) { for (;;) {
            var n = Nu;
            try {
                if (_o(), rl.current = Gl, sl) {
                    for (var r = ll.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    sl = !1;
                }
                if (ol = 0, ul = il = ll = null, cl = !1, fl = 0, Cu.current = null, null === n || null === n.return) {
                    Lu = 1, ju = t, Nu = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, u = n, s = t;
                    if (t = zu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, f = u, d = f.tag;
                        if (!(1 & f.mode || 0 !== d && 11 !== d && 15 !== d)) {
                            var p = f.alternate;
                            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
                        }
                        var m = hi(i);
                        if (null !== m) {
                            m.flags &= -257, vi(m, i, u, 0, t), 1 & m.mode && mi(l, c, t), s = c;
                            var h = (t = m).updateQueue;
                            if (null === h) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                h.add(s);
                            break e;
                        }
                        if (!(1 & t)) {
                            mi(l, c, t), ms();
                            break e;
                        }
                        s = Error(o(426));
                    }
                    else if (ro && 1 & u.mode) {
                        var g = hi(i);
                        if (null !== g) {
                            !(65536 & g.flags) && (g.flags |= 256), vi(g, i, u, 0, t), mo(ui(s, u));
                            break e;
                        }
                    }
                    l = s = ui(s, u), 4 !== Lu && (Lu = 2), null === $u ? $u = [l] : $u.push(l), l = i;
                    do {
                        switch (l.tag) {
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t, Uo(l, di(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = l.type, b = l.stateNode;
                                if (!(128 & l.flags || "function" != typeof y.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Bu && Bu.has(b)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t, Uo(l, pi(l, u, t));
                                    break e;
                                }
                        }
                        l = l.return;
                    } while (null !== l);
                }
                bs(n);
            }
            catch (e) {
                t = e, Nu === n && null !== n && (Nu = n = n.return);
                continue;
            }
            break;
        } } function ps() { var e = Eu.current; return Eu.current = Gl, null === e ? Gl : e; } function ms() { 0 !== Lu && 3 !== Lu && 2 !== Lu || (Lu = 4), null === Ou || !(268435455 & Mu) && !(268435455 & Fu) || ls(Ou, zu); } function hs(e, t) { var n = Pu; Pu |= 2; var r = ps(); for (Ou === e && zu === t || (qu = null, fs(e, t));;)
            try {
                vs();
                break;
            }
            catch (t) {
                ds(e, t);
            } if (_o(), Pu = n, Eu.current = r, null !== Nu)
            throw Error(o(261)); return Ou = null, zu = 0, Lu; } function vs() { for (; null !== Nu;)
            ys(Nu); } function gs() { for (; null !== Nu && !Ke();)
            ys(Nu); } function ys(e) { var t = Su(e.alternate, e, Tu); e.memoizedProps = e.pendingProps, null === t ? bs(e) : Nu = t, Cu.current = null; } function bs(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 32768 & t.flags) {
                if (null !== (n = Qi(n, t)))
                    return n.flags &= 32767, void (Nu = n);
                if (null === e)
                    return Lu = 6, void (Nu = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            else if (null !== (n = Wi(n, t, Tu)))
                return void (Nu = n);
            if (null !== (t = t.sibling))
                return void (Nu = t);
            Nu = t = e;
        } while (null !== t); 0 === Lu && (Lu = 5); } function ws(e, t, n) { var r = yt, a = _u.transition; try {
            _u.transition = null, yt = 1, function (e, t, n, r) { do {
                ks();
            } while (null !== Qu); if (6 & Pu)
                throw Error(o(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(o(177)); e.callbackNode = null, e.callbackPriority = 0; var l = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), o = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
            } }(e, l), e === Ou && (Nu = Ou = null, zu = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Wu || (Wu = !0, Os(et, (function () { return ks(), null; }))), l = !!(15990 & n.flags), 15990 & n.subtreeFlags || l) {
                l = _u.transition, _u.transition = null;
                var i = yt;
                yt = 1;
                var u = Pu;
                Pu |= 4, Cu.current = null, function (e, t) { if (Jr = Vt, dr(e = fr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, l.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                t: for (;;) {
                                    for (var m; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== l || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (m = d.firstChild);)
                                        p = d, d = m;
                                    for (;;) {
                                        if (d === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === l && ++f === r && (s = i), null !== (m = d.nextSibling))
                                            break;
                                        p = (d = p).parentNode;
                                    }
                                    d = m;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ea = { focusedElem: e, selectionRange: n }, Vt = !1, Gi = t; null !== Gi;)
                    if (e = (t = Gi).child, 1028 & t.subtreeFlags && null !== e)
                        e.return = t, Gi = e;
                    else
                        for (; null !== Gi;) {
                            t = Gi;
                            try {
                                var h = t.alternate;
                                if (1024 & t.flags)
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== h) {
                                                var v = h.memoizedProps, g = h.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ti(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(o(163));
                                    }
                            }
                            catch (e) {
                                xs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Gi = e;
                                break;
                            }
                            Gi = t.return;
                        } h = eu, eu = !1; }(e, n), hu(n, e), pr(ea), Vt = !!Jr, ea = Jr = null, e.current = n, gu(n, e, a), Ye(), Pu = u, yt = i, _u.transition = l;
            }
            else
                e.current = n; if (Wu && (Wu = !1, Qu = e, Ku = a), 0 === (l = e.pendingLanes) && (Bu = null), function (e) { if (at && "function" == typeof at.onCommitFiberRoot)
                try {
                    at.onCommitFiberRoot(rt, e, void 0, !(128 & ~e.current.flags));
                }
                catch (e) { } }(n.stateNode), ns(e, Xe()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Vu)
                throw Vu = !1, e = Hu, Hu = null, e; !!(1 & Ku) && 0 !== e.tag && ks(), 1 & (l = e.pendingLanes) ? e === Xu ? Yu++ : (Yu = 0, Xu = e) : Yu = 0, Ua(); }(e, t, n, r);
        }
        finally {
            _u.transition = a, yt = r;
        } return null; } function ks() { if (null !== Qu) {
            var e = bt(Ku), t = _u.transition, n = yt;
            try {
                if (_u.transition = null, yt = 16 > e ? 16 : e, null === Qu)
                    var r = !1;
                else {
                    if (e = Qu, Qu = null, Ku = 0, 6 & Pu)
                        throw Error(o(331));
                    var a = Pu;
                    for (Pu |= 4, Gi = e.current; null !== Gi;) {
                        var l = Gi, i = l.child;
                        if (16 & Gi.flags) {
                            var u = l.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Gi = c; null !== Gi;) {
                                        var f = Gi;
                                        switch (f.tag) {
                                            case 0:
                                            case 11:
                                            case 15: tu(8, f, l);
                                        }
                                        var d = f.child;
                                        if (null !== d)
                                            d.return = f, Gi = d;
                                        else
                                            for (; null !== Gi;) {
                                                var p = (f = Gi).sibling, m = f.return;
                                                if (au(f), f === c) {
                                                    Gi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = m, Gi = p;
                                                    break;
                                                }
                                                Gi = m;
                                            }
                                    }
                                }
                                var h = l.alternate;
                                if (null !== h) {
                                    var v = h.child;
                                    if (null !== v) {
                                        h.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Gi = l;
                            }
                        }
                        if (2064 & l.subtreeFlags && null !== i)
                            i.return = l, Gi = i;
                        else
                            e: for (; null !== Gi;) {
                                if (2048 & (l = Gi).flags)
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15: tu(9, l, l.return);
                                    }
                                var y = l.sibling;
                                if (null !== y) {
                                    y.return = l.return, Gi = y;
                                    break e;
                                }
                                Gi = l.return;
                            }
                    }
                    var b = e.current;
                    for (Gi = b; null !== Gi;) {
                        var w = (i = Gi).child;
                        if (2064 & i.subtreeFlags && null !== w)
                            w.return = i, Gi = w;
                        else
                            e: for (i = b; null !== Gi;) {
                                if (2048 & (u = Gi).flags)
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: nu(9, u);
                                        }
                                    }
                                    catch (e) {
                                        xs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Gi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Gi = k;
                                    break e;
                                }
                                Gi = u.return;
                            }
                    }
                    if (Pu = a, Ua(), at && "function" == typeof at.onPostCommitFiberRoot)
                        try {
                            at.onPostCommitFiberRoot(rt, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                yt = n, _u.transition = t;
            }
        } return !1; } function Ss(e, t, n) { e = Io(e, t = di(0, t = ui(n, t), 1), 1), t = Ju(), null !== e && (vt(e, 1, t), ns(e, t)); } function xs(e, t, n) { if (3 === e.tag)
            Ss(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Ss(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Bu || !Bu.has(r))) {
                        t = Io(t, e = pi(t, e = ui(n, e), 1), 1), e = Ju(), null !== t && (vt(t, 1, e), ns(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function Es(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = Ju(), e.pingedLanes |= e.suspendedLanes & n, Ou === e && (zu & n) === n && (4 === Lu || 3 === Lu && (130023424 & zu) === zu && 500 > Xe() - Au ? fs(e, 0) : Du |= n), ns(e, t); } function Cs(e, t) { 0 === t && (1 & e.mode ? (t = st, !(130023424 & (st <<= 1)) && (st = 4194304)) : t = 1); var n = Ju(); null !== (e = jo(e, t)) && (vt(e, t, n), ns(e, n)); } function _s(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Cs(e, n); } function Ps(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(o(314));
        } null !== r && r.delete(t), Cs(e, n); } function Os(e, t) { return We(e, t); } function Ns(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function zs(e, t, n, r) { return new Ns(e, t, n, r); } function Ts(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Rs(e, t) { var n = e.alternate; return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Ls(e, t, n, r, a, l) { var i = 2; if (r = e, "function" == typeof e)
            Ts(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case x: return js(n.children, a, l, t);
                case E:
                    i = 8, a |= 8;
                    break;
                case C: return (e = zs(12, n, t, 2 | a)).elementType = C, e.lanes = l, e;
                case N: return (e = zs(13, n, t, a)).elementType = N, e.lanes = l, e;
                case z: return (e = zs(19, n, t, a)).elementType = z, e.lanes = l, e;
                case L: return Ms(n, a, l, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case O:
                                i = 11;
                                break e;
                            case T:
                                i = 14;
                                break e;
                            case R:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(o(130, null == e ? e : typeof e, ""));
            } return (t = zs(i, n, t, a)).elementType = e, t.type = r, t.lanes = l, t; } function js(e, t, n, r) { return (e = zs(7, e, r, t)).lanes = n, e; } function Ms(e, t, n, r) { return (e = zs(22, e, r, t)).elementType = L, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function Fs(e, t, n) { return (e = zs(6, e, null, t)).lanes = n, e; } function Ds(e, t, n) { return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function $s(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ht(0), this.expirationTimes = ht(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ht(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Is(e, t, n, r, a, o, l, i, u) { return e = new $s(e, t, n, i, u), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = zs(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fo(o), e; } function As(e) { if (!e)
            return _a; e: {
            if (Ue(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(o(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (Ta(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(o(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (Ta(n))
                return ja(e, n, t);
        } return t; } function Us(e, t, n, r, a, o, l, i, u) { return (e = Is(n, r, !0, e, 0, o, 0, i, u)).context = As(null), n = e.current, (o = $o(r = Ju(), a = es(n))).callback = null != t ? t : null, Io(n, o, a), e.current.lanes = a, vt(e, a, r), ns(e, r), e; } function qs(e, t, n, r) { var a = t.current, o = Ju(), l = es(a); return n = As(n), null === t.context ? t.context = n : t.pendingContext = n, (t = $o(o, l)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Io(a, t, l)) && (ts(e, a, l, o), Ao(e, a, l)), l; } function Vs(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Hs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function Bs(e, t) { Hs(e, t), (e = e.alternate) && Hs(e, t); } Su = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current)
                yi = !0;
            else {
                if (!(e.lanes & n || 128 & t.flags))
                    return yi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Oi(t), po();
                            break;
                        case 5:
                            Go(t);
                            break;
                        case 1:
                            Ta(t.type) && Ma(t);
                            break;
                        case 4:
                            Yo(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            Ca(So, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (Ca(Jo, 1 & Jo.current), t.flags |= 128, null) : n & t.child.childLanes ? Fi(e, t, n) : (Ca(Jo, 1 & Jo.current), null !== (e = Vi(e, t, n)) ? e.sibling : null);
                            Ca(Jo, 1 & Jo.current);
                            break;
                        case 19:
                            if (r = !!(n & t.childLanes), 128 & e.flags) {
                                if (r)
                                    return Ui(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(Jo, Jo.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, xi(e, t, n);
                    } return Vi(e, t, n); }(e, t, n);
                yi = !!(131072 & e.flags);
            }
        else
            yi = !1, ro && 1048576 & t.flags && Za(t, Ba, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                qi(e, t), e = t.pendingProps;
                var a = za(t, Pa.current);
                No(t, n), a = hl(null, t, r, e, a, n);
                var l = vl();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ta(r) ? (l = !0, Ma(t)) : l = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Fo(t), a.updater = ri, t.stateNode = a, a._reactInternals = t, ii(t, r, e, n), t = Pi(null, t, r, !0, l, n)) : (t.tag = 0, ro && l && Ja(t), bi(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (qi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ts(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === O)
                            return 11;
                        if (e === T)
                            return 14;
                    } return 2; }(r), e = ti(r, e), a) {
                        case 0:
                            t = Ci(null, t, r, e, n);
                            break e;
                        case 1:
                            t = _i(null, t, r, e, n);
                            break e;
                        case 11:
                            t = wi(null, t, r, e, n);
                            break e;
                        case 14:
                            t = ki(null, t, r, ti(r.type, e), n);
                            break e;
                    }
                    throw Error(o(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Ci(e, t, r, a = t.elementType === r ? a : ti(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, _i(e, t, r, a = t.elementType === r ? a : ti(r, a), n);
            case 3:
                e: {
                    if (Oi(t), null === e)
                        throw Error(o(387));
                    r = t.pendingProps, a = (l = t.memoizedState).element, Do(e, t), qo(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) {
                        if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                            t = Ni(e, t, r, n, a = ui(Error(o(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Ni(e, t, r, n, a = ui(Error(o(424)), t));
                            break e;
                        }
                        for (no = ua(t.stateNode.containerInfo.firstChild), to = t, ro = !0, ao = null, n = ko(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (po(), r === a) {
                            t = Vi(e, t, n);
                            break e;
                        }
                        bi(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return Go(t), null === e && uo(t), r = t.type, a = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = a.children, ta(r, a) ? i = null : null !== l && ta(r, l) && (t.flags |= 32), Ei(e, t), bi(e, t, i, n), t.child;
            case 6: return null === e && uo(t), null;
            case 13: return Fi(e, t, n);
            case 4: return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = wo(t, null, r, n) : bi(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, wi(e, t, r, a = t.elementType === r ? a : ti(r, a), n);
            case 7: return bi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return bi(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, i = a.value, Ca(So, r._currentValue), r._currentValue = i, null !== l)
                        if (lr(l.value, i)) {
                            if (l.children === a.children && !Oa.current) {
                                t = Vi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var u = l.dependencies;
                                if (null !== u) {
                                    i = l.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === l.tag) {
                                                (s = $o(-1, n & -n)).tag = 2;
                                                var c = l.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s;
                                                }
                                            }
                                            l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Oo(l.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === l.tag)
                                    i = l.type === t.type ? null : l.child;
                                else if (18 === l.tag) {
                                    if (null === (i = l.return))
                                        throw Error(o(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Oo(i, n, t), i = l.sibling;
                                }
                                else
                                    i = l.child;
                                if (null !== i)
                                    i.return = l;
                                else
                                    for (i = l; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (l = i.sibling)) {
                                            l.return = i.return, i = l;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                l = i;
                            }
                    bi(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, No(t, n), r = r(a = zo(a)), t.flags |= 1, bi(e, t, r, n), t.child;
            case 14: return a = ti(r = t.type, t.pendingProps), ki(e, t, r, a = ti(r.type, a), n);
            case 15: return Si(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ti(r, a), qi(e, t), t.tag = 1, Ta(r) ? (e = !0, Ma(t)) : e = !1, No(t, n), oi(t, r, a), ii(t, r, a, n), Pi(null, t, r, !0, e, n);
            case 19: return Ui(e, t, n);
            case 22: return xi(e, t, n);
        } throw Error(o(156, t.tag)); }; var Ws = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Qs(e) { this._internalRoot = e; } function Ks(e) { this._internalRoot = e; } function Ys(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Xs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Gs() { } function Zs(e, t, n, r, a) { var o = n._reactRootContainer; if (o) {
            var l = o;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Vs(l); i.call(e); };
            }
            qs(t, l, e, a);
        }
        else
            l = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var o = r;
                    r = function () { var e = Vs(l); o.call(e); };
                }
                var l = Us(t, r, e, 0, null, !1, 0, "", Gs);
                return e._reactRootContainer = l, e[pa] = l.current, Ur(8 === e.nodeType ? e.parentNode : e), ss(), l;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Vs(u); i.call(e); };
            } var u = Is(e, 0, !1, null, 0, !1, 0, "", Gs); return e._reactRootContainer = u, e[pa] = u.current, Ur(8 === e.nodeType ? e.parentNode : e), ss((function () { qs(t, u, n, r); })), u; }(n, t, e, a, r); return Vs(l); } Ks.prototype.render = Qs.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(o(409)); qs(e, t, null, null); }, Ks.prototype.unmount = Qs.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ss((function () { qs(null, e, null, null); })), t[pa] = null;
        } }, Ks.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = xt();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++)
                ;
            Rt.splice(n, 0, e), 0 === n && Ft(e);
        } }, wt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ct(t.pendingLanes);
                    0 !== n && (gt(t, 1 | n), ns(t, Xe()), !(6 & Pu) && (Uu = Xe() + 500, Ua()));
                }
                break;
            case 13: ss((function () { var t = jo(e, 1); if (null !== t) {
                var n = Ju();
                ts(t, e, 1, n);
            } })), Bs(e, 1);
        } }, kt = function (e) { if (13 === e.tag) {
            var t = jo(e, 134217728);
            null !== t && ts(t, e, 134217728, Ju()), Bs(e, 134217728);
        } }, St = function (e) { if (13 === e.tag) {
            var t = es(e), n = jo(e, t);
            null !== n && ts(n, e, t, Ju()), Bs(e, t);
        } }, xt = function () { return yt; }, Et = function (e, t) { var n = yt; try {
            return yt = e, t();
        }
        finally {
            yt = n;
        } }, ke = function (e, t, n) { switch (t) {
            case "input":
                if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = wa(r);
                            if (!a)
                                throw Error(o(90));
                            Q(r), Z(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                oe(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Pe = us, Oe = ss; var Js = { usingClientEntryPoint: !1, Events: [ya, ba, wa, Ce, _e, us] }, ec = { findFiberByHostInstance: ga, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tc = { bundleType: ec.bundleType, version: ec.version, rendererPackageName: ec.rendererPackageName, rendererConfig: ec.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = He(e)) ? null : e.stateNode; }, findFiberByHostInstance: ec.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!nc.isDisabled && nc.supportsFiber)
                try {
                    rt = nc.inject(tc), at = nc;
                }
                catch (e) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Js, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Ys(t))
            throw Error(o(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Ys(e))
            throw Error(o(299)); var n = !1, r = "", a = Ws; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Is(e, 1, !1, null, 0, n, 0, r, a), e[pa] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new Qs(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(o(188));
            throw e = Object.keys(e).join(","), Error(o(268, e));
        } return null === (e = He(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return ss(e); }, t.hydrate = function (e, t, n) { if (!Xs(t))
            throw Error(o(200)); return Zs(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Ys(e))
            throw Error(o(405)); var r = null != n && n.hydratedSources || null, a = !1, l = "", i = Ws; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Us(t, null, e, 1, null != n ? n : null, a, 0, l, i), e[pa] = t.current, Ur(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Ks(t); }, t.render = function (e, t, n) { if (!Xs(t))
            throw Error(o(200)); return Zs(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Xs(e))
            throw Error(o(40)); return !!e._reactRootContainer && (ss((function () { Zs(null, null, e, !1, (function () { e._reactRootContainer = null, e[pa] = null; })); })), !0); }, t.unstable_batchedUpdates = us, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Xs(n))
            throw Error(o(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(o(38)); return Zs(e, t, n, !1, r); }, t.version = "18.3.1-next-f1338f8080-20240426"; }, 576: function (e, t, n) { var r = n(143); t.H = r.createRoot, r.hydrateRoot; }, 143: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(481); }, 462: function (e, t, n) { var r = n(758), a = Symbol.for("react.element"), o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 }; function u(e, t, n) { var r, u = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            o.call(t, r) && !i.hasOwnProperty(r) && (u[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === u[r] && (u[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: u, _owner: l.current }; } t.jsx = u, t.jsxs = u; }, 713: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, m = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, h = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || m; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || m; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, h(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, x = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, o = {}, l = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t)
                S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            o.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            o.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === o[a] && (o[a] = u[a]); return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: x.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function O(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function N(e, t, a, o, l) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return l = l(u = e), e = "" === o ? "." + O(u, 0) : o, k(l) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), N(l, t, a, "", (function (e) { return e; }))) : null != l && (_(l) && (l = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(l, a + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(P, "$&/") + "/") + e)), t.push(l)), 1; if (u = 0, o = "" === o ? "." : o + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = o + O(i = e[s], s);
                u += N(i, t, a, c, l);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += N(i = i.value, t, a, c = o + O(i, s++), l);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function z(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return N(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function T(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var R = { current: null }, L = { transition: null }, j = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: L, ReactCurrentOwner: x }; function M() { throw Error("act(...) is not supported in production builds of React."); } t.Children = { map: z, forEach: function (e, t, n) { z(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return z(e, (function () { t++; })), t; }, toArray: function (e) { return z(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = l, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.act = M, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = h({}, e.props), o = e.key, l = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (l = t.ref, i = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: T }; }, t.memo = function (e, t) { return { $$typeof: f, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = L.transition; L.transition = {}; try {
            e();
        }
        finally {
            L.transition = t;
        } }, t.unstable_act = M, t.useCallback = function (e, t) { return R.current.useCallback(e, t); }, t.useContext = function (e) { return R.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return R.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return R.current.useEffect(e, t); }, t.useId = function () { return R.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return R.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return R.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return R.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return R.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return R.current.useReducer(e, t, n); }, t.useRef = function (e) { return R.current.useRef(e); }, t.useState = function (e) { return R.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return R.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return R.current.useTransition(); }, t.version = "18.3.1"; }, 758: function (e, t, n) { e.exports = n(713); }, 70: function (e, t, n) { e.exports = n(462); }, 733: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < o(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > o(u, n))
                    s < a && 0 > o(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > o(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function o(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var l = performance;
            t.unstable_now = function () { return l.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], f = 1, d = null, p = 3, m = !1, h = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !h)
            if (null !== r(s))
                h = !0, L(S);
            else {
                var t = r(c);
                null !== t && j(k, t.startTime - e);
            } } function S(e, n) { h = !1, v && (v = !1, y(_), _ = -1), m = !0; var o = p; try {
            for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !N());) {
                var l = d.callback;
                if ("function" == typeof l) {
                    d.callback = null, p = d.priorityLevel;
                    var i = l(d.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? d.callback = i : d === r(s) && a(s), w(n);
                }
                else
                    a(s);
                d = r(s);
            }
            if (null !== d)
                var u = !0;
            else {
                var f = r(c);
                null !== f && j(k, f.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            d = null, p = o, m = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, E = !1, C = null, _ = -1, P = 5, O = -1; function N() { return !(t.unstable_now() - O < P); } function z() { if (null !== C) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? x() : (E = !1, C = null);
            }
        }
        else
            E = !1; } if ("function" == typeof b)
            x = function () { b(z); };
        else if ("undefined" != typeof MessageChannel) {
            var T = new MessageChannel, R = T.port2;
            T.port1.onmessage = z, x = function () { R.postMessage(null); };
        }
        else
            x = function () { g(z, 0); }; function L(e) { C = e, E || (E = !0, x()); } function j(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { h || m || (h = !0, L(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, o) { var l = t.unstable_now(); switch (o = "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o ? l + o : l, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: f++, callback: a, priorityLevel: e, startTime: o, expirationTime: i = o + i, sortIndex: -1 }, o > l ? (e.sortIndex = o, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, j(k, o - l))) : (e.sortIndex = i, n(s, e), h || m || (h = !0, L(S))), e; }, t.unstable_shouldYield = N, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 896: function (e, t, n) { e.exports = n(733); }, 878: function (e, t, n) { var r = n(758), a = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }, o = r.useState, l = r.useEffect, i = r.useLayoutEffect, u = r.useDebugValue; function s(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !a(e, n);
        }
        catch (e) {
            return !0;
        } } var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) { return t(); } : function (e, t) { var n = t(), r = o({ inst: { value: n, getSnapshot: t } }), a = r[0].inst, c = r[1]; return i((function () { a.value = n, a.getSnapshot = t, s(a) && c({ inst: a }); }), [e, n, t]), l((function () { return s(a) && c({ inst: a }), e((function () { s(a) && c({ inst: a }); })); }), [e]), u(n), n; }; t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c; }, 81: function (e, t, n) { var r = n(758), a = n(524), o = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }, l = a.useSyncExternalStore, i = r.useRef, u = r.useEffect, s = r.useMemo, c = r.useDebugValue; t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) { var f = i(null); if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
        }
        else
            d = f.current; f = s((function () { function e(e) { if (!u) {
            if (u = !0, l = e, e = r(e), void 0 !== a && d.hasValue) {
                var t = d.value;
                if (a(t, e))
                    return i = t;
            }
            return i = e;
        } if (t = i, o(l, e))
            return t; var n = r(e); return void 0 !== a && a(t, n) ? t : (l = e, i = n); } var l, i, u = !1, s = void 0 === n ? null : n; return [function () { return e(t()); }, null === s ? void 0 : function () { return e(s()); }]; }), [t, n, r, a]); var p = l(e, f[0], f[1]); return u((function () { d.hasValue = !0, d.value = p; }), [p]), c(p), p; }; }, 524: function (e, t, n) { e.exports = n(878); }, 741: function (e, t, n) { e.exports = n(81); } }, r = {};
    function a(e) { var t = r[e]; if (void 0 !== t)
        return t.exports; var o = r[e] = { exports: {} }; return n[e](o, o.exports, a), o.exports; }
    a.m = n, a.d = function (e, t) { for (var n in t)
        a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, a.f = {}, a.e = function (e) { return Promise.all(Object.keys(a.f).reduce((function (t, n) { return (a.f[n](e, t), t); }), [])); }, a.u = function (e) { return e + "." + { 150: "e22c68c538de1c06d44d", 875: "e17a634f057e0bd4204a" }[e] + ".js"; }, a.miniCssF = function (e) { }, a.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), a.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, e = {}, t = "webpack:", a.l = function (n, r, o, l) { if (e[n])
        e[n].push(r);
    else {
        var i, u;
        if (void 0 !== o)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == t + o) {
                    i = f;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.setAttribute("data-webpack", t + o), i.src = n), e[n] = [r];
        var d = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = e[n]; if (delete e[n], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
    } }, a.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; a.g.importScripts && (e = a.g.location + ""); var t = a.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e; })(), (function () { var e = { 792: 0 }; a.f.j = function (t, n) { var r = a.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var o = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = o);
            var l = a.p + a.u(t), i = new Error;
            a.l(l, (function (n) { if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var o = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + l + ")", i.name = "ChunkLoadError", i.type = o, i.request = l, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, o, l = n[0], i = n[1], u = n[2], s = 0; if (l.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            a.o(i, r) && (a.m[r] = i[r]);
        u && u(a);
    } for (t && t(n); s < l.length; s++)
        o = l[s], a.o(e, o) && e[o] && e[o][0](), e[o] = 0; }, n = self.webpackChunkwebpack = self.webpackChunkwebpack || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })();
    var o = a(70), l = a(576), i = a(758);
    function u(e, t) { for (var n_1 in e)
        t(e[n_1], n_1); }
    function s(e, t) { e.forEach(t); }
    function c(e, t, n) { if (!e)
        throw Error("".concat(n ? n + ": " : "").concat(t)); }
    function f(_b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.node, e = _d === void 0 ? [] : _d, t = _c.from, n = _c.source, _f = _c.parent, r = _f === void 0 ? t || n : _f, a = _c.to, o = _c.target, _g = _c.child, l = _g === void 0 ? a || o : _g, _h = _c.scope, i = _h === void 0 ? {} : _h, _j = _c.meta, u = _j === void 0 ? {} : _j, _k = _c.family, c = _k === void 0 ? { type: "regular" } : _k, f = _c.regional;
        var d = pe(r), p = pe(c.links), m = pe(c.owners), h = [];
        s(e, (function (e) { return e && ee(h, e); }));
        var v = { id: oe(), seq: h, next: pe(l), meta: u, scope: i, family: { type: c.type || "crosslink", links: p, owners: m } };
        return s(p, (function (e) { return ee(j(e), v); })), s(m, (function (e) { return ee(M(e), v); })), s(d, (function (e) { return ee(e.next, v); })), f && ie && de(D(ie), [v]), v;
    }
    function d(e, t, n) { var r, a = Ye, o = null, l = Be; if (e.target && (t = e.params, n = e.defer, r = e.meta, a = "page" in e ? e.page : a, e.stack && (o = e.stack), l = A(e) || l, e = e.target), l && Be && l !== Be && (Be = null), Array.isArray(e))
        for (var n_2 = 0; n_2 < e.length; n_2++)
            Ue("pure", a, L(e[n_2]), o, t[n_2], l, r);
    else
        Ue("pure", a, L(e), o, t, l, r); if (n && !We)
        return; var i = { isRoot: We, currentPage: Ye, scope: Be, isWatch: Qe, isPure: Ke }; var u, c, f, d, p, m; We = 0; var _loop_1 = function () {
        var e_1 = d.idx, t_1 = d.stack, n_3 = d.type;
        f = t_1.node, Ye = p = t_1.page, Be = A(t_1), p ? m = p.reg : Be && (m = Be.reg);
        var r_1 = !!p, a_1 = !!Be, o_1 = { fail: 0, scope: f.scope };
        u = c = 0;
        for (var l_1 = e_1; l_1 < f.seq.length && !u; l_1++) {
            var s_1 = f.seq[l_1];
            if (s_1.order) {
                var _b = s_1.order, r_2 = _b.priority, a_2 = _b.barrierID, o_2 = a_2 ? p ? "".concat(p.fullID, "_").concat(a_2) : a_2 : 0;
                if (l_1 !== e_1 || n_3 !== r_2) {
                    a_2 ? He.has(o_2) || (He.add(o_2), qe(l_1, t_1, r_2, a_2)) : qe(l_1, t_1, r_2, 0);
                    return "continue-e";
                }
                a_2 && He.delete(o_2);
            }
            switch (s_1.type) {
                case "mov": {
                    var e_2 = s_1.data;
                    var n_4 = void 0;
                    switch (e_2.from) {
                        case "stack":
                            n_4 = D(t_1);
                            break;
                        case "a":
                        case "b":
                            n_4 = t_1[e_2.from];
                            break;
                        case "value":
                            n_4 = e_2.store;
                            break;
                        case "store":
                            if (m && !m[e_2.store.id])
                                if (r_1) {
                                    var n_5 = Ze(p, e_2.store.id);
                                    t_1.page = p = n_5, n_5 ? m = n_5.reg : a_1 ? (nt(Be, e_2.store, 0, 1, e_2.softRead), m = Be.reg) : m = void 0;
                                }
                                else
                                    a_1 && nt(Be, e_2.store, 0, 1, e_2.softRead);
                            n_4 = je(m && m[e_2.store.id] || e_2.store);
                    }
                    switch (e_2.to) {
                        case "stack":
                            t_1.value = n_4;
                            break;
                        case "a":
                        case "b":
                            t_1[e_2.to] = n_4;
                            break;
                        case "store": Je(p, Be, e_2.target, 0).current = n_4;
                    }
                    break;
                }
                case "compute":
                    var e_3 = s_1.data;
                    if (e_3.fn) {
                        Qe = "watch" === f.meta.op, Ke = e_3.pure;
                        var n_6 = e_3.safe ? (0, e_3.fn)(D(t_1), o_1.scope, t_1) : rt(o_1, e_3.fn, t_1);
                        e_3.filter ? c = !n_6 : t_1.value = n_6, Qe = i.isWatch, Ke = i.isPure;
                    }
            }
            u = o_1.fail || c;
        }
        if (et && et(t_1, o_1), !u) {
            var e_4 = D(t_1), n_7 = A(t_1);
            if (s(f.next, (function (r) { Ue("child", p, r, t_1, e_4, n_7); })), n_7) {
                f.meta.needFxCounter && Ue("child", p, n_7.fxCount, t_1, e_4, n_7), f.meta.storeChange && Ue("child", p, n_7.storeChange, t_1, e_4, n_7), f.meta.warnSerialize && Ue("child", p, n_7.warnSerializeNode, t_1, e_4, n_7);
                var r_3 = n_7.additionalLinks[f.id];
                r_3 && s(r_3, (function (r) { Ue("child", p, r, t_1, e_4, n_7); }));
            }
        }
    }; e: for (; d = Ae();) {
        var state_1 = _loop_1();
        switch (state_1) {
            case "continue-e": continue e;
        }
    } We = i.isRoot, Ye = i.currentPage, Be = A(i); }
    function p(e, t) {
        if (t === void 0) { t = "combine"; }
        var n = t + "(", r = "", a = 0;
        return u(e, (function (e) { a < 25 && (null != e && (n += r, n += H(e) ? V(e).fullName : e.toString()), a += 1, r = ", "); })), n + ")";
    }
    function m(e, t) { var n, r; var a = e; if (t) {
        var a_3 = V(t);
        0 === e.length ? (n = a_3.path, r = a_3.fullName) : (n = a_3.path.concat([e]), r = 0 === a_3.fullName.length ? e : a_3.fullName + "/" + e);
    }
    else
        n = 0 === e.length ? [] : [e], r = e; return { shortName: a, fullName: r, path: n }; }
    function h(e, t) { if (!t)
        return e; if (!t.name && !t.named && !t.loc)
        return e; var n = "[".concat(e, "]"); var r = t.named || t.name; r && (n += " unit '".concat(r, "'")); var a = t.loc; return !r && a && (n += " (".concat(a.file, ":").concat(a.line, ":").concat(a.column, ")")), n; }
    function v(e, t) { var n = t ? e : e[0]; ge(n); var r = n.or; var a = n.and; if (a) {
        var n_8 = t ? a : a[0];
        if (me(n_8) && "and" in n_8) {
            var n_9 = v(a, t);
            e = n_9[0], r = __assign(__assign({}, r), n_9[1]);
        }
        else
            e = a;
    } return [e, r]; }
    function g(e) { var t = function () { return e(); }; return t.unsubscribe = function () { return e(); }, t; }
    function y(e) {
        var t = [];
        for (var _b = 1; _b < arguments.length; _b++) {
            t[_b - 1] = arguments[_b];
        }
        var n = se();
        if (n) {
            var r_4 = n.handlers[e];
            if (r_4)
                return r_4.apply(void 0, __spreadArray([n], t, false));
        }
    }
    function b(e, t) { var n = at({ or: t, and: "string" == typeof e ? { name: e } : e }), r = h("event", n), a = function (e) {
        var t = [];
        for (var _b = 1; _b < arguments.length; _b++) {
            t[_b - 1] = arguments[_b];
        }
        return (c(!U(a, "derived"), "call of derived event is not supported, use createEvent instead", r), c(!Ke, "unit call from pure function is not supported, use operators like sample instead", r), Ye ? (function (e, t, n, r) { var a = Ye; var o = null; if (t)
            for (o = Ye; o && o.template !== t;)
                o = I(o); Ge(o); var l = e.create(n, r); return Ge(a), l; })(a, o, e, t) : a.create(e, t));
    }, o = se(), l = Object.assign(a, { graphite: f({ meta: pt(n.actualOp || "event", a, n), regional: 1 }), create: function (e) { return (d({ target: a, params: e, scope: Be }), e); }, watch: function (e) { return ft(a, e); }, map: function (e) { return mt(a, "map", e, [Te()]); }, filter: function (e) { return mt(a, "filter", e.fn ? e : e.fn, [Te(xe, 1)]); }, filterMap: function (e) { return mt(a, "filterMap", e, [Te(), Ne((function (e) { return !ve(e); }), 1)]); }, prepend: function (e) { c(a.targetable, ".prepend of derived event is not supported, call source event instead", r); var t = b("* → " + a.shortName, { parent: I(a) }); return y("eventPrepend", L(t)), ct(t, a, [Te()], "prepend", e), dt(a, t), t; } }); return null != n && n.domain && n.domain.hooks.event(l), q(l, "id", l.graphite.id), ue(l.graphite), l; }
    function w(e, t, n, r, a) { return be(n, "".concat(a, " ").concat(t), "first argument"), c(he(r), "second argument should be a function", a), te(!U(e, "derived"), "".concat(t, " in derived store"), "".concat(t, " in store created via createStore"), a), s(Array.isArray(n) ? n : [n], (function (t) { e.off(t), $(e).set(t, st(vt(t, e, "on", Se, r))); })), e; }
    function k(e, t) { var n = at(t), r = Le(e), a = h("store", n), o = b({ named: "updates", derived: 1 }); y("storeBase", r); var l = r.id, i = "skipVoid" in n, u = i && !n.skipVoid; te(!(i && n.skipVoid), "{skipVoid: true}", "updateFilter", a); var p = { subscribers: new Map, updates: o, defaultState: e, stateRef: r, getState: function () { var e, t = r; if (Ye) {
            var t_2 = Ye;
            for (; t_2 && !t_2.reg[l];)
                t_2 = I(t_2);
            t_2 && (e = t_2);
        } return !e && Be && (nt(Be, r, 1), e = Be), e && (t = e.reg[l]), je(t); }, setState: function (e) { return d({ target: p, params: e, defer: 1, scope: Be }); }, reset: function () {
            var e = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                e[_b] = arguments[_b];
            }
            return (c(p.targetable, ".reset of derived store is not supported", a), s(e, (function (e) { return w(p, ".reset", e, (function () { return p.defaultState; }), a); })), p);
        }, on: function (e, t) { return (c(p.targetable, ".on of derived store is not supported", a), w(p, ".on", e, t, a)); }, off: function (e) { var t = $(p).get(e); return t && (t(), $(p).delete(e)), p; }, map: function (e, t) { var n, a; me(e) && (n = e, e = e.fn); var o = p.getState(), l = ve(o); se() ? a = null : (!l || l && u) && (a = e(o)); var i = k(a, __assign(__assign({ name: "".concat(p.shortName, " \u2192 *"), derived: 1 }, t), { and: n })), s = vt(p, i, "map", xe, e); return Me(F(i), { type: "map", fn: e, from: r }), F(i).noInit = 1, y("storeMap", r, s), i; }, watch: function (e, t) { if (te(!t, "watch second argument", "sample", a), !t || !H(e)) {
            var t_3 = ft(p, e);
            return y("storeWatch", r, e) || e(p.getState()), t_3;
        } return c(he(t), "second argument should be a function", a), e.watch((function (e) { return t(p.getState(), e); })); } }, m = pt("store", p, n), v = p.defaultConfig.updateFilter; p.graphite = f({ scope: { state: r, fn: v }, node: [Ne((function (e, t, n) { return (n.scope && !n.scope.reg[r.id] && (n.b = 1), e); })), ze(r), Ne((function (e, t, _b) {
                var n = _b.a, r = _b.b;
                var o = ve(e);
                return o && !i && console.error("".concat(a, ": ").concat(ht)), (o && u || !o) && (e !== n || r);
            }), 1), v && Te(ke, 1), _e({ from: "stack", target: r })], child: o, meta: __assign(__assign({}, m), { defaultState: e }), regional: 1 }), q(p, "id", p.graphite.id), q(p, "rootStateRefId", l); var g = U(p, "serialize"), S = U(p, "derived"), x = "ignore" === g, E = U(p, "sid"); E && (q(p, "storeChange", 1), r.sid = E), E || x || S || q(p, "warnSerialize", 1); var C = ve(e); return c(S || !C || C && u, ht, a), S && C && !i && console.error("".concat(a, ": ").concat(ht)), de(p, [o]), null != n && n.domain && n.domain.hooks.store(p), S || (p.reinit = b({ named: "reinit" }), p.reset(p.reinit)), r.meta = p.graphite.meta, ue(p.graphite), p; }
    function S() {
        var _b;
        var e = [];
        for (var _c = 0; _c < arguments.length; _c++) {
            e[_c] = arguments[_c];
        }
        var t, n, r;
        _b = v(e), e = _b[0], r = _b[1];
        var a = h("combine", r), o = e[e.length - 1], l = e.length > 1 && !W(o) && me(o), i = l && o, u = l ? e[e.length - 2] : o;
        var s, f, d;
        if (he(u) ? (n = e.slice(0, l ? -2 : -1), t = u) : n = e, 1 === n.length) {
            var e_5 = n[0];
            W(e_5) || (s = e_5, f = 1);
        }
        if (!f && (s = n, t)) {
            d = 1;
            var e_6 = t;
            t = function (t) { return e_6.apply(void 0, t); };
        }
        return c(me(s), "".concat(a, ": shape should be an object")), gt(Array.isArray(s), !d, s, r, t, i);
    }
    function x(e, t) {
        if (t === void 0) { t = {}; }
        var n = at(he(e) ? { handler: e } : e, t), r = h("effect", n), a = b(he(e) ? { handler: e } : e, __assign(__assign({}, t), { actualOp: "effect" })), o = L(a);
        q(o, "op", a.kind = "effect"), a.use = function (e) { return (c(he(e), ".use argument should be a function", r), m.scope.handler = e, a); }, a.use.getCurrent = function () { return m.scope.handler; };
        var l = a.finally = b({ named: "finally", derived: 1 }), i = a.done = l.filterMap({ named: "done", fn: function (_b) {
                var e = _b.status, t = _b.params, n = _b.result;
                if ("done" === e)
                    return { params: t, result: n };
            } }), u = a.fail = l.filterMap({ named: "fail", fn: function (_b) {
                var e = _b.status, t = _b.params, n = _b.error;
                if ("fail" === e)
                    return { params: t, error: n };
            } }), s = a.doneData = i.map({ named: "doneData", fn: function (_b) {
                var e = _b.result;
                return e;
            } }), p = a.failData = u.map({ named: "failData", fn: function (_b) {
                var e = _b.error;
                return e;
            } }), m = f({ scope: { handler: a.defaultConfig.handler || (function () { return c(0, "no handler used in ".concat(a.compositeName.fullName)); }) }, node: [Ne((function (e, t, n) { var r = t.handler; var o = A(n); if (o) {
                    var e_7 = o.handlers.unitMap.get(a) || o.handlers.sidMap[a.sid];
                    e_7 && (r = e_7);
                } return e.handler = r, e; }), 0, 1), Ne((function (e, t, n) { if (t.runnerFn && !t.runnerFn(e, null, n))
                    return; var r = e.params, a = e.req, o = e.handler, _b = e.args, i = _b === void 0 ? [r] : _b, u = bt(r, a, 1, l, n), s = bt(r, a, 0, l, n), _c = yt(o, s, i), c = _c[0], f = _c[1]; c && (me(f) && he(f.then) ? f.then(u, s) : u(f)); }), 0, 1)], meta: { op: "fx", fx: "runner" } });
        o.scope.runner = m, ee(o.seq, Ne((function (e, _b, n) {
            var t = _b.runner;
            var r = I(n) ? { params: e, req: { rs: function (e) { }, rj: function (e) { } } } : e;
            return n.meta || (n.meta = { fxID: le() }), d({ target: t, params: r, defer: 1, scope: A(n), meta: n.meta }), r.params;
        }))), a.create = function (e) { var t = function () { var e = {}; return e.req = new Promise((function (t, n) { e.rs = t, e.rj = n; })), e.req.catch((function () { })), e; }(), n = { params: e, req: t }; if (Be && !Qe) {
            var e_8 = Be;
            t.req.finally((function () { Xe(e_8); })).catch((function () { }));
        } return d({ target: a, params: n, scope: Be }), t.req; };
        var v = a.inFlight = k(0, { serialize: "ignore", named: (U(a, "name") || a.graphite.id) + ".inFlight" }).on(a, (function (e) { return e + 1; })).on(l, (function (e) { return e - 1; })).map({ fn: function (e) { return e; }, named: "inFlight" });
        q(l, "needFxCounter", "dec"), q(a, "needFxCounter", 1);
        var g = a.pending = v.map({ fn: function (e) { return e > 0; }, named: "pending" });
        return de(a, [l, i, u, s, p, g, v]), null != n && n.domain && n.domain.hooks.effect(a), a;
    }
    function E(e) {
        var _b, _c;
        var t;
        _b = v(e, 1), e = _b[0], t = _b[1];
        var n = h("attach", t);
        var r = e.source, a = e.effect, o = e.mapParams, l = e.domain;
        K(a) && c(ve(l), "`domain` can only be used with a plain function", n);
        var i = x(e, t);
        q(i, "attached", 1);
        var u = L(i).scope.runner;
        var s;
        var f = function (e, t, n) {
            var _b;
            var a = e.params, l = e.req, u = e.handler, s = i.finally, c = bt(a, l, 0, s, n), f = n.a, p = K(u);
            var m, h = 1;
            if (o ? (_b = yt(o, c, [a, f]), h = _b[0], m = _b[1], _b) : m = r && p ? f : a, h) {
                if (!p)
                    return e.args = [f, m], 1;
                d({ target: u, params: { params: m, req: { rs: bt(a, l, 1, s, n), rj: c } }, page: n.page, defer: 1, meta: n.meta });
            }
        };
        if (r) {
            var e_9;
            u.scope.runnerFn = f, W(r) ? (e_9 = r, de(e_9, [i])) : (e_9 = S(r), de(i, [e_9])), s = [Ne((function (e) { return e; }), 0, 1), ze(F(e_9))], delete u.seq[1].order;
        }
        else
            s = [Ne(f, 1, 1)];
        (_c = u.seq).splice.apply(_c, __spreadArray([1, 0], s, false)), i.use(a);
        var p = I(a);
        return p && (Object.assign(V(i), m(i.shortName, p)), i.defaultConfig.parent = p), dt(a, i, "effect"), i;
    }
    function C(e, t) { var n = h("merge", t); be(e, n, "first argument"); var r = b({ name: p(e, "merge"), derived: 1, and: t }); return ct(e, r, [], "merge"), r; }
    function _(e, t) { var n = 0; return s(kt, (function (r) { r in e && (c(null != e[r], St(t, r)), n = 1); })), n; }
    function P() {
        var e = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            e[_b] = arguments[_b];
        }
        var t, n, r, a, _c = v(e), _d = _c[0], o = _d[0], l = _d[1], i = _d[2], u = _c[1], s = 1;
        var c = h("sample", u);
        return ve(l) && me(o) && _(o, c) && (l = o.clock, i = o.fn, "batch" in o ? s = o.batch : (te(!("greedy" in o), "greedy in sample", "batch", c), s = !o.greedy), a = o.filter, t = o.target, n = o.name, r = o.sid, o = o.source), xt("sample", l, o, a, t, i, n, u, s, 1, 0, r);
    }
    function O() {
        var e = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            e[_b] = arguments[_b];
        }
        var t = "split";
        var n, r, _c = v(e), _d = _c[0], a = _d[0], o = _d[1], l = _c[1];
        var i = h(t, l), s = !o;
        s && (n = a.cases, o = a.match, r = a.clock, a = a.source);
        var d = W(o), p = !H(o) && he(o), m = !d && !p && me(o);
        c(H(a), "source must be a unit", i), n || (n = {}), s ? u(n, (function (e, t) { return we(i, e, "cases.".concat(t)); })) : (c(m, "match should be an object", i), u(o, (function (e, t) { return n[t] = b({ derived: 1, named: "cases.".concat(t), and: l }); })), n.__ = b({ derived: 1, named: "cases.__", and: l }));
        var g = new Set([].concat(a, r || [], Object.values(n))), w = Object.keys(d || p ? n : o);
        var k;
        if (d || p)
            d && g.add(o), k = [d && ze(F(o), 0, 1), Pe({ safe: d, filter: 1, pure: !d, fn: function (e, t, n) { var r = String(d ? n.a : o(e)); _t(t, Z(w, r) ? r : "__", e, n); } })];
        else if (m) {
            var e_10 = Le({});
            e_10.type = "shape";
            var t_4 = [];
            var n_10;
            u(o, (function (r, a) { if (H(r)) {
                n_10 = 1, ee(t_4, a), g.add(r);
                var o_3 = ct(r, [], [ze(e_10), Ne((function (e, t, _b) {
                        var n = _b.a;
                        return n[a] = e;
                    }))]);
                if (W(r)) {
                    e_10.current[a] = r.getState();
                    var t_5 = F(r);
                    Me(e_10, { from: t_5, field: a, type: "field" }), y("splitMatchStore", t_5, o_3);
                }
            } })), n_10 && y("splitBase", e_10), k = [n_10 && ze(e_10, 0, 1), Te((function (e, n, r) { for (var a_4 = 0; a_4 < w.length; a_4++) {
                    var l_2 = w[a_4];
                    if (Z(t_4, l_2) ? r.a[l_2] : o[l_2](e))
                        return void _t(n, l_2, e, r);
                } _t(n, "__", e, r); }), 1)];
        }
        else
            c(0, "expect match to be unit, function or object");
        var S = f({ meta: { op: t }, parent: r ? [] : a, scope: n, node: k, family: { owners: Array.from(g) }, regional: 1 });
        if (r && xt(t, r, a, null, S, null, t, l, 0, 0, 0), !s)
            return n;
    }
    function N(e, _b) {
        var _c = _b === void 0 ? {} : _b, t = _c.scope, n = _c.safe;
        c(t || Be || n, "scopeBind: scope not found");
        var r = t || Be;
        return function (t) { function n() { Xe(l); } var a, o = 0; var l = Be; Xe(r); try {
            a = e(t);
        }
        catch (e) {
            a = e, o = 1;
        } if (n(), o)
            throw a; return a instanceof Promise && a.then(n, n), a; };
    }
    function z(_b) {
        var e = _b.unit, t = _b.fn, n = _b.scope, r = _b.batch;
        var a = [Re.run({ fn: function (e) { return t(e); } })];
        r && a.unshift(Re.compute({ priority: "sampler", batch: 1 })), W(e) && a.unshift(Re.mov({ store: e.stateRef, to: "stack" }));
        var o = Array.isArray(e) ? e : [e];
        if (n) {
            var e_11 = [], t_6 = n.additionalLinks;
            return o.forEach((function (n) { var r = t_6[n.graphite.id] || []; t_6[n.graphite.id] = r; var o = f({ node: T(a, n), meta: { watchOp: n.kind } }); r.push(o), e_11.push((function () { var e = r.indexOf(o); -1 !== e && r.splice(e, 1), ut(o); })); })), g((function () { e_11.forEach((function (e) { return e(); })); }));
        }
        {
            var e_12 = f({ node: a, parent: o, family: { owners: o } });
            return g((function () { ut(e_12); }));
        }
    }
    function T(e, t) { return W(t) ? __spreadArray([Re.mov({ store: t.stateRef, to: "stack" })], e, true) : e; }
    var R = "undefined" != typeof Symbol && Symbol.observable || "@@observable", L = function (e) { return e.graphite || e; }, j = function (e) { return e.family.owners; }, M = function (e) { return e.family.links; }, F = function (e) { return e.stateRef; }, D = function (e) { return e.value; }, $ = function (e) { return e.subscribers; }, I = function (e) { return e.parent; }, A = function (e) { return e.scope; }, U = function (e, t) { return L(e).meta[t]; }, q = function (e, t, n) { return L(e).meta[t] = n; }, V = function (e) { return e.compositeName; }, H = function (e) { return (he(e) || me(e)) && "kind" in e; }, B = function (e) { return function (t) { return H(t) && t.kind === e; }; }, W = B("store"), Q = B("event"), K = B("effect"), Y = B("domain"), X = B("scope");
    var G = { __proto__: null, unit: H, store: W, event: Q, effect: K, targetable: function (e) { return H(e) && !!e.targetable; }, domain: Y, scope: X, attached: function (e) { return K(e) && 1 == U(e, "attached"); } };
    var Z = function (e, t) { return e.includes(t); }, J = function (e, t) { var n = e.indexOf(t); -1 !== n && e.splice(n, 1); }, ee = function (e, t) { return e.push(t); }, te = function (e, t, n, r) { return !e && console.error("".concat(r ? r + ": " : "").concat(t, " is deprecated").concat(n ? ", use ".concat(n, " instead") : "")); }, ne = function () { var e = 0; return function () { return "" + ++e; }; }, re = ne(), ae = ne(), oe = ne(), le = ne();
    var ie = null;
    var ue = function (e) { }, se = function () { return ie && ie.template; }, ce = function (e) { return (e && ie && ie.sidRoot && (e = "".concat(ie.sidRoot, "|").concat(e)), e); }, fe = function (_b) {
        var e = _b.sid, t = _b.name, n = _b.loc, r = _b.method, a = _b.fn;
        return function (e, t) { var n = L(e).meta || {}; ie = { id: L(e).id, parent: ie, value: e, template: n.template || se(), sidRoot: n.sidRoot || ie && ie.sidRoot, meta: n }; try {
            return t();
        }
        finally {
            ue("region"), ie = I(ie);
        } }(f({ meta: { sidRoot: ce(e), sid: e, name: t, loc: n, method: r, type: "factory" } }), a);
    }, de = function (e, t) { var n = L(e); s(t, (function (e) { var t = L(e); "domain" !== n.family.type && (t.family.type = "crosslink"), ee(j(t), n), ee(M(n), t); })); }, pe = function (e) {
        if (e === void 0) { e = []; }
        return (Array.isArray(e) ? e : [e]).flat().map(L);
    }, me = function (e) { return "object" == typeof e && null !== e; }, he = function (e) { return "function" == typeof e; }, ve = function (e) { return void 0 === e; }, ge = function (e) { return c(me(e) || he(e), "expect first argument be an object"); }, ye = function (e, t, n, r) { return c(!(!me(e) && !he(e) || !("family" in e) && !("graphite" in e)), "".concat(t, ": expect ").concat(n, " to be a unit (store, event or effect)").concat(r)); }, be = function (e, t, n) { Array.isArray(e) ? s(e, (function (e, r) { return ye(e, t, "".concat(r, " item of ").concat(n), ""); })) : ye(e, t, n, " or array of units"); }, we = function (e, t, n) {
        if (n === void 0) { n = "target"; }
        return s(pe(t), (function (t) { return c(!U(t, "derived"), "".concat(e, ": derived unit in \"").concat(n, "\" is not supported, use createStore/createEvent instead\"")); }));
    }, ke = function (e, _b, _c) {
        var t = _b.fn;
        var n = _c.a;
        return t(e, n);
    }, Se = function (e, _b, _c) {
        var t = _b.fn;
        var n = _c.a;
        return t(n, e);
    }, xe = function (e, _b) {
        var t = _b.fn;
        return t(e);
    }, Ee = function (e, t, n, r) { var a = { id: ae(), type: e, data: t }; return n && (a.order = { priority: n }, r && (a.order.barrierID = ++Ce)), a; };
    var Ce = 0;
    var _e = function (_b) {
        var _c = _b.from, e = _c === void 0 ? "store" : _c, t = _b.store, n = _b.target, _d = _b.to, r = _d === void 0 ? (n ? "store" : "stack") : _d, a = _b.batch, o = _b.priority;
        return Ee("mov", { from: e, store: t, to: r, target: n }, o, a);
    }, Pe = function (_b) {
        var e = _b.fn, t = _b.batch, n = _b.priority, _c = _b.safe, r = _c === void 0 ? 0 : _c, _d = _b.filter, a = _d === void 0 ? 0 : _d, _f = _b.pure, o = _f === void 0 ? 0 : _f;
        return Ee("compute", { fn: e, safe: r, filter: a, pure: o }, n, t);
    }, Oe = function (_b) {
        var e = _b.fn;
        return Pe({ fn: e, priority: "effect" });
    }, Ne = function (e, t, n) { return Pe({ fn: e, safe: 1, filter: t, priority: n && "effect" }); }, ze = function (e, t, n) { return _e({ store: e, to: t ? "stack" : "a", priority: n && "sampler", batch: 1 }); }, Te = function (e, t) {
        if (e === void 0) { e = xe; }
        return Pe({ fn: e, pure: 1, filter: t });
    }, Re = { mov: _e, compute: Pe, filter: function (_b) {
            var e = _b.fn, t = _b.pure;
            return Pe({ fn: e, filter: 1, pure: t });
        }, run: Oe }, Le = function (e) { return ({ id: ae(), current: e, initial: e }); }, je = function (_b) {
        var e = _b.current;
        return e;
    }, Me = function (e, t) { e.before || (e.before = []), ee(e.before, t); };
    var Fe = null;
    var De = function (e, t) { if (!e)
        return t; if (!t)
        return e; var n; return (e.v.type === t.v.type && e.v.id > t.v.id || Ve(e.v.type) > Ve(t.v.type)) && (n = e, e = t, t = n), n = De(e.r, t), e.r = e.l, e.l = n, e; }, $e = [];
    var Ie = 0;
    for (; Ie < 6;)
        ee($e, { first: null, last: null, size: 0 }), Ie += 1;
    var Ae = function () { for (var e_13 = 0; e_13 < 6; e_13++) {
        var t_7 = $e[e_13];
        if (t_7.size > 0) {
            if (3 === e_13 || 4 === e_13) {
                t_7.size -= 1;
                var e_14 = Fe.v;
                return Fe = De(Fe.l, Fe.r), e_14;
            }
            1 === t_7.size && (t_7.last = null);
            var n_11 = t_7.first;
            return t_7.first = n_11.r, t_7.size -= 1, n_11.v;
        }
    } }, Ue = function (e, t, n, r, a, o, l) { return qe(0, { a: null, b: null, node: n, parent: r, value: a, page: t, scope: o, meta: l }, e, 0); }, qe = function (e, t, n, r) { var a = Ve(n), o = $e[a], l = { v: { idx: e, stack: t, type: n, id: r }, l: null, r: null }; 3 === a || 4 === a ? Fe = De(Fe, l) : (0 === o.size ? o.first = l : o.last.r = l, o.last = l), o.size += 1; }, Ve = function (e) { switch (e) {
        case "child": return 0;
        case "pure": return 1;
        case "read": return 2;
        case "barrier": return 3;
        case "sampler": return 4;
        case "effect": return 5;
        default: return -1;
    } }, He = new Set;
    var Be, We = 1, Qe = 0, Ke = 0, Ye = null;
    var Xe = function (e) { Be = e; }, Ge = function (e) { Ye = e; }, Ze = function (e, t) { if (e) {
        for (; e && !e.reg[t];)
            e = e.parent;
        if (e)
            return e;
    } return null; }, Je = function (e, t, n, r) { var a = Ze(e, n.id); return a ? a.reg[n.id] : t ? (nt(t, n, r), t.reg[n.id]) : n; };
    var et;
    var tt = function (e) { return e; }, nt = function (e, t, n, r, a) { var o = e.reg; if (o[t.id])
        return; var l = t.sid, i = { id: t.id, current: t.initial, meta: t.meta }; if (i.id in e.values.idMap)
        i.current = e.values.idMap[i.id];
    else if (l && l in e.values.sidMap && !(l in e.sidIdMap)) {
        var u;
        var n_12 = null == t || null === (u = t.meta) || void 0 === u ? void 0 : u.serialize;
        i.current = (e.fromSerialize && "ignore" !== n_12 && (null == n_12 ? void 0 : n_12.read) || tt)(e.values.sidMap[l]);
    }
    else if (t.before && !a) {
        var a_5 = 0;
        var l_3 = n || !t.noInit || r;
        s(t.before, (function (t) { switch (t.type) {
            case "map": {
                var a_6 = t.from;
                if ((a_6 || t.fn) && (a_6 && nt(e, a_6, n, r), l_3)) {
                    var e_15 = a_6 && o[a_6.id].current;
                    i.current = t.fn ? t.fn(e_15) : e_15;
                }
                break;
            }
            case "field": nt(e, t.from, n, r), a_5 || (a_5 = 1, i.current = Array.isArray(i.current) ? __spreadArray([], i.current, true) : __assign({}, i.current)), l_3 && (i.current[t.field] = o[o[t.from.id].id].current);
        } }));
    } l && (e.sidIdMap[l] = t.id), o[t.id] = i; }, rt = function (e, t, n) { try {
        return t(D(n), e.scope, n);
    }
    catch (t) {
        console.error(t), e.fail = 1, e.failReason = t;
    } }, at = function (e, t) {
        if (t === void 0) { t = {}; }
        return (me(e) && (at(e.or, t), u(e, (function (e, n) { ve(e) || "or" === n || "and" === n || (t[n] = e); })), at(e.and, t)), t);
    }, ot = function (e, t) { J(e.next, t), J(j(e), t), J(M(e), t); }, lt = function (e, t, n) { var r; e.next.length = 0, e.seq.length = 0, e.scope = null; var a = M(e); for (; r = a.pop();)
        ot(r, e), (t || n && "sample" !== e.meta.op || "crosslink" === r.family.type) && lt(r, t, "on" !== r.meta.op && n); for (a = j(e); r = a.pop();)
        ot(r, e), n && "crosslink" === r.family.type && lt(r, t, "on" !== r.meta.op && n); }, it = function (e) { return e.clear(); }, ut = function (e, _b) {
        var _c = _b === void 0 ? {} : _b, t = _c.deep;
        var n = 0;
        if (e.ownerSet && e.ownerSet.delete(e), W(e))
            it($(e));
        else if (Y(e)) {
            n = 1;
            var t_8 = e.history;
            it(t_8.events), it(t_8.effects), it(t_8.stores), it(t_8.domains);
        }
        lt(L(e), !!t, n);
    }, st = function (e) { return g((function () { return ut(e); })); }, ct = function (e, t, n, r, a) { return f({ node: n, parent: e, child: t, scope: { fn: a }, meta: { op: r }, family: { owners: [e, t], links: t }, regional: 1 }); }, ft = function (e, t) { return (c(he(t), ".watch argument should be a function"), st(f({ scope: { fn: t }, node: [Oe({ fn: xe })], parent: e, meta: { op: "watch" }, family: { owners: e }, regional: 1 }))); }, dt = function (e, t, n) {
        if (n === void 0) { n = "event"; }
        I(e) && I(e).hooks[n](t);
    }, pt = function (e, t, n) { var r = at(n), a = "domain" === e, o = re(), _b = r.sid, l = _b === void 0 ? null : _b, _c = r.named, i = _c === void 0 ? null : _c, _d = r.domain, u = _d === void 0 ? null : _d, _f = r.parent, s = _f === void 0 ? u : _f, c = i || r.name || (a ? "" : o), f = m(c, s), d = { op: t.kind = e, name: t.shortName = c, sid: t.sid = ce(l), named: i, unitId: t.id = o, serialize: r.serialize, derived: r.derived, config: r }; if (t.targetable = !r.derived, t.parent = s, t.compositeName = f, t.defaultConfig = r, t.getType = function () { return (te(0, "getType", "compositeName.fullName"), f.fullName); }, !a) {
        t.subscribe = function (e) { return (ge(e), t.watch(he(e) ? e : function (t) { return e.next && e.next(t); })); }, t[R] = function () { return t; };
        var e_16 = se();
        e_16 && (d.nativeTemplate = e_16);
    } return d; }, mt = function (e, t, n, r) { var a; me(n) && (a = n, n = n.fn); var o = b({ name: "".concat(e.shortName, " \u2192 *"), derived: 1, and: a }); return ct(e, o, r, t, n), o; }, ht = "undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option", vt = function (e, t, n, r, a) { var o = F(t), l = _e({ store: o, to: "a", priority: "read" }); "map" === n && (l.data.softRead = 1); var i = [l, Te(r)]; return y("storeOnMap", o, i, W(e) && F(e)), ct(e, t, i, n, a); }, gt = function (e, t, n, r, a, o) { var l = h("combine", r), i = e ? function (e) { return __spreadArray([], e, true); } : function (e) { return (__assign({}, e)); }, s = e ? [] : {}, f = i(s), d = Le(f), m = Le(1); d.type = e ? "list" : "shape", d.noInit = 1, y("combineBase", d, m); var v = k(f, __assign(__assign({ name: p(n), derived: 1 }, o), { and: r })), g = F(v); g.noInit = 1, q(v, "isCombine", 1); var b = ze(d); b.order = { priority: "barrier" }; var w = _e({ store: g, to: "b", priority: "read" }); w.data.softRead = 1; var S = [Ne((function (e, t, n) { return (n.scope && !n.scope.reg[d.id] && (n.c = 1), e); })), b, _e({ store: m, to: "b" }), Ne((function (e, _b, r) {
            var n = _b.key;
            if (r.c || e !== r.a[n])
                return t && r.b && (r.a = i(r.a)), r.a[n] = e, 1;
        }), 1), _e({ from: "a", target: d }), _e({ from: "value", store: 0, target: m }), _e({ from: "value", store: 1, target: m, priority: "barrier", batch: 1 }), ze(d, 1, 1), a && Te(), w]; if (u(n, (function (e, t) { if (!W(e))
        return c(!H(e) && !ve(e), "combine expects a store in a field ".concat(t), l), void (f[t] = s[t] = e); s[t] = e.defaultState, f[t] = e.getState(); var n = ct(e, v, S, "combine", a); n.scope.key = t; var r = F(e); Me(d, { type: "field", field: t, from: r }), y("combineField", r, n); })), v.defaultShape = n, Me(g, { type: "map", from: d, fn: a }), !se())
        if (a) {
            var e_17 = a(f);
            !ve(e_17) || o && "skipVoid" in o || console.error("".concat(l, ": ").concat(ht)), g.current = e_17, g.initial = e_17, v.defaultState = e_17;
        }
        else
            v.defaultState = s; return v; }, yt = function (e, t, n) { try {
        return [1, e.apply(void 0, n)];
    }
    catch (e) {
        return t(e), [0, null];
    } }, bt = function (e, t, n, r, a) { return function (o) { d({ target: [r, wt], params: [n ? { status: "done", params: e, result: o } : { status: "fail", params: e, error: o }, { value: o, fn: n ? t.rs : t.rj }], defer: 1, page: a.page, scope: a.scope, meta: a.meta }); }; }, wt = f({ node: [Oe({ fn: function (_b) {
                    var e = _b.fn, t = _b.value;
                    return e(t);
                } })], meta: { op: "fx", fx: "sidechain" } }), kt = ["source", "clock", "target"], St = function (e, t) { return e + ": ".concat(t, " should be defined"); }, xt = function (e, t, n, r, a, o, l, i, u, s, f, d) { var p = h(e, i), m = !!a; c(!ve(n) || !ve(t), St(p, "either source or clock")); var v = 0; ve(n) ? v = 1 : H(n) || (n = S(n)), ve(t) ? t = n : (be(t, p, "clock"), Array.isArray(t) && (t = C(t))), v && (n = t), i || l || (l = n.shortName); var g = "none"; (f || r) && (H(r) ? g = "unit" : (c(he(r), "`filter` should be function or unit"), g = "fn")), a ? (be(a, p, "target"), we(p, a)) : "none" === g && s && W(n) && W(t) ? a = k(o ? o(je(F(n)), je(F(t))) : je(F(n)), { name: l, sid: d, or: i }) : (a = b({ name: l, derived: 1, or: i }), y("sampleTarget", L(a))); var w = Le(); var x = []; if ("unit" === g) {
        var _b = Ct(r, a, t, w, e), n_13 = _b[0], o_4 = _b[1], l_4 = _b[2];
        l_4 || x.push.apply(x, Et(o_4)), x.push.apply(x, Et(n_13));
    } var E = []; if (v)
        u && E.push(ze(w, 1, 1));
    else {
        var _c = Ct(n, a, t, w, e), r_5 = _c[0], o_5 = _c[1], l_5 = _c[2];
        l_5 || E.push.apply(E, Et(o_5)), E.push(ze(r_5, 1, u));
    } var _ = ct(t, a, __spreadArray(__spreadArray(__spreadArray([y("sampleSourceLoader"), _e({ from: "stack", target: w })], E, true), x, true), [ze(w), "fn" === g && Te((function (e, t, _b) {
            var n = _b.a;
            return r(e, n);
        }), 1), o && Te(ke), y("sampleSourceUpward", m)], false), e, o); return de(n, [_]), Object.assign(_.meta, i, { joint: 1 }), a; }, Et = function (e) { return [ze(e), Ne((function (e, t, _b) {
            var n = _b.a;
            return n;
        }), 1)]; }, Ct = function (e, t, n, r, a) { var o = W(e), l = o ? F(e) : Le(), i = Le(o); return o || f({ parent: e, node: [_e({ from: "stack", target: l }), _e({ from: "value", store: 1, target: i })], family: { owners: [e, t, n], links: t }, meta: { op: a }, regional: 1 }), y("sampleSource", i, l, r), [l, i, o]; }, _t = function (e, t, n, r) { var a = e[t]; a && d({ target: a, params: Array.isArray(a) ? a.map((function () { return n; })) : n, defer: 1, stack: r }); };
    var Pt = a(741), Ot = a(524);
    function Nt(e, t) { return function (e, t) { var n = G.unit(e); var r = {}; n ? r = { unit: e } : "@@unitShape" in e ? "function" == typeof e["@@unitShape"] ? r = e["@@unitShape"]() : zt("expect @@unitShape to be a function") : r = e; var a = Array.isArray(r), o = i.useRef({ stale: 1, justSubscribed: 0, scope: t }), _b = i.useMemo((function () { o.current.stale = 1; var e = Array.isArray(r) ? [] : {}, a = [], l = [], i = [], u = []; for (var o_6 in r) {
        if (!{}.hasOwnProperty.call(r, o_6))
            continue;
        var s_2 = r[o_6];
        G.unit(s_2) || zt("expect useUnit ".concat(n ? "argument" : "value in key \"".concat(o_6, "\""), " to be a unit")), G.event(s_2) || G.effect(s_2) ? (e[o_6] = t ? N(s_2, { scope: t }) : s_2, i.push(o_6), u.push(s_2)) : (e[o_6] = null, a.push(o_6), l.push(s_2));
    } return [e, a, l, i, u]; }), __spreadArray(__spreadArray([o, t], Object.keys(r), true), Object.values(r), true)), l = _b[0], u = _b[1], s = _b[2], c = _b[3], f = _b[4], d = i.useRef({ value: l, storeKeys: u, eventKeys: c, eventValues: f }), p = i.useCallback((function (e) { var n = o.current; return n.justSubscribed = 1, z({ unit: s, fn: function () { n.stale || (n.stale = 1, e()); }, scope: t, batch: 1 }); }), [s, t, d, o]), m = i.useCallback((function () { var e = d.current, r = o.current; var i, p = 0; var m = e.value, h = e.storeKeys, v = e.eventKeys, g = e.eventValues, y = t !== r.scope; if (r.stale || r.justSubscribed || y) {
        p = !r.justSubscribed || y, i = a ? __spreadArray([], l, true) : __assign({}, l), h.length === u.length && v.length === c.length || (p = 1);
        for (var e_18 = 0; e_18 < u.length; e_18++) {
            var n_14 = Lt(s[e_18], t), r_6 = u[e_18];
            p || (p = h.includes(r_6) ? m[r_6] !== n_14 : 1), i[r_6] = n_14;
        }
        for (var e_19 = 0; e_19 < c.length; e_19++) {
            var t_9 = f[e_19], n_15 = c[e_19];
            p || (p = v.includes(n_15) ? g[v.indexOf(n_15)] !== t_9 : 1);
        }
    } return p && (e.value = i), e.storeKeys = u, e.eventKeys = c, e.eventValues = f, r.stale = 0, r.justSubscribed = !p, r.scope = t, n ? e.value.unit : e.value; }), [p, s, f, t, d, o]); return Tt(p, m, m); }(e, function (e) { var t = i.useContext(jt); return e && !t && zt("No scope found, consider adding <Provider> to app root"), t; }(null == t ? void 0 : t.forceScope)); }
    var zt = function (e) { throw Error(e); }, Tt = ("undefined" != typeof window ? i.useLayoutEffect : i.useEffect, Ot).useSyncExternalStore, Rt = Pt.useSyncExternalStoreWithSelector, Lt = function (e, t) { return t ? t.getState(e) : e.getState(); }, jt = i.createContext(null), Mt = jt.Provider;
    function Ft(e, t) { void 0 === t && (t = {}); for (var n = function (e) { for (var t = [], n = 0; n < e.length;) {
        var r = e[n];
        if ("*" !== r && "+" !== r && "?" !== r)
            if ("\\" !== r)
                if ("{" !== r)
                    if ("}" !== r)
                        if (":" !== r)
                            if ("(" !== r)
                                t.push({ type: "CHAR", index: n, value: e[n++] });
                            else {
                                var a = 1, o = "";
                                if ("?" === e[i = n + 1])
                                    throw new TypeError('Pattern cannot start with "?" at '.concat(i));
                                for (; i < e.length;)
                                    if ("\\" !== e[i]) {
                                        if (")" === e[i]) {
                                            if (0 == --a) {
                                                i++;
                                                break;
                                            }
                                        }
                                        else if ("(" === e[i] && (a++, "?" !== e[i + 1]))
                                            throw new TypeError("Capturing groups are not allowed at ".concat(i));
                                        o += e[i++];
                                    }
                                    else
                                        o += e[i++] + e[i++];
                                if (a)
                                    throw new TypeError("Unbalanced pattern at ".concat(n));
                                if (!o)
                                    throw new TypeError("Missing pattern at ".concat(n));
                                t.push({ type: "PATTERN", index: n, value: o }), n = i;
                            }
                        else {
                            for (var l = "", i = n + 1; i < e.length;) {
                                var u = e.charCodeAt(i);
                                if (!(u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || 95 === u))
                                    break;
                                l += e[i++];
                            }
                            if (!l)
                                throw new TypeError("Missing parameter name at ".concat(n));
                            t.push({ type: "NAME", index: n, value: l }), n = i;
                        }
                    else
                        t.push({ type: "CLOSE", index: n, value: e[n++] });
                else
                    t.push({ type: "OPEN", index: n, value: e[n++] });
            else
                t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
        else
            t.push({ type: "MODIFIER", index: n, value: e[n++] });
    } return t.push({ type: "END", index: n, value: "" }), t; }(e), r = t.prefixes, a = void 0 === r ? "./" : r, o = "[^".concat($t(t.delimiter || "/#?"), "]+?"), l = [], i = 0, u = 0, s = "", c = function (e) { if (u < n.length && n[u].type === e)
        return n[u++].value; }, f = function (e) { var t = c(e); if (void 0 !== t)
        return t; var r = n[u], a = r.type, o = r.index; throw new TypeError("Unexpected ".concat(a, " at ").concat(o, ", expected ").concat(e)); }, d = function () { for (var e, t = ""; e = c("CHAR") || c("ESCAPED_CHAR");)
        t += e; return t; }; u < n.length;) {
        var p = c("CHAR"), m = c("NAME"), h = c("PATTERN");
        if (m || h) {
            var v = p || "";
            -1 === a.indexOf(v) && (s += v, v = ""), s && (l.push(s), s = ""), l.push({ name: m || i++, prefix: v, suffix: "", pattern: h || o, modifier: c("MODIFIER") || "" });
        }
        else {
            var g = p || c("ESCAPED_CHAR");
            if (g)
                s += g;
            else if (s && (l.push(s), s = ""), c("OPEN")) {
                v = d();
                var y = c("NAME") || "", b = c("PATTERN") || "", w = d();
                f("CLOSE"), l.push({ name: y || (b ? i++ : ""), pattern: y && !b ? o : b, prefix: v, suffix: w, modifier: c("MODIFIER") || "" });
            }
            else
                f("END");
        }
    } return l; }
    function Dt(e, t) { var n = []; return function (e, t, n) { void 0 === n && (n = {}); var r = n.decode, a = void 0 === r ? function (e) { return e; } : r; return function (n) { var r = e.exec(n); if (!r)
        return !1; for (var o = r[0], l = r.index, i = Object.create(null), u = function (e) { if (void 0 === r[e])
        return "continue"; var n = t[e - 1]; "*" === n.modifier || "+" === n.modifier ? i[n.name] = r[e].split(n.prefix + n.suffix).map((function (e) { return a(e, n); })) : i[n.name] = a(r[e], n); }, s = 1; s < r.length; s++)
        u(s); return { path: o, index: l, params: i }; }; }(At(e, n, t), n, t); }
    function $t(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); }
    function It(e) { return e && e.sensitive ? "" : "i"; }
    function At(e, t, n) { return e instanceof RegExp ? function (e, t) { if (!t)
        return e; for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, a = n.exec(e.source); a;)
        t.push({ name: a[1] || r++, prefix: "", suffix: "", modifier: "", pattern: "" }), a = n.exec(e.source); return e; }(e, t) : Array.isArray(e) ? function (e, t, n) { var r = e.map((function (e) { return At(e, t, n).source; })); return new RegExp("(?:".concat(r.join("|"), ")"), It(n)); }(e, t, n) : function (e, t, n) { return function (e, t, n) { void 0 === n && (n = {}); for (var r = n.strict, a = void 0 !== r && r, o = n.start, l = void 0 === o || o, i = n.end, u = void 0 === i || i, s = n.encode, c = void 0 === s ? function (e) { return e; } : s, f = n.delimiter, d = void 0 === f ? "/#?" : f, p = n.endsWith, m = "[".concat($t(void 0 === p ? "" : p), "]|$"), h = "[".concat($t(d), "]"), v = l ? "^" : "", g = 0, y = e; g < y.length; g++) {
        var b = y[g];
        if ("string" == typeof b)
            v += $t(c(b));
        else {
            var w = $t(c(b.prefix)), k = $t(c(b.suffix));
            if (b.pattern)
                if (t && t.push(b), w || k)
                    if ("+" === b.modifier || "*" === b.modifier) {
                        var S = "*" === b.modifier ? "?" : "";
                        v += "(?:".concat(w, "((?:").concat(b.pattern, ")(?:").concat(k).concat(w, "(?:").concat(b.pattern, "))*)").concat(k, ")").concat(S);
                    }
                    else
                        v += "(?:".concat(w, "(").concat(b.pattern, ")").concat(k, ")").concat(b.modifier);
                else
                    "+" === b.modifier || "*" === b.modifier ? v += "((?:".concat(b.pattern, ")").concat(b.modifier, ")") : v += "(".concat(b.pattern, ")").concat(b.modifier);
            else
                v += "(?:".concat(w).concat(k, ")").concat(b.modifier);
        }
    } if (u)
        a || (v += "".concat(h, "?")), v += n.endsWith ? "(?=".concat(m, ")") : "$";
    else {
        var x = e[e.length - 1], E = "string" == typeof x ? h.indexOf(x[x.length - 1]) > -1 : void 0 === x;
        a || (v += "(?:".concat(h, "(?=").concat(m, "))?")), E || (v += "(?=".concat(h, "|").concat(m, ")"));
    } return new RegExp(v, It(n)); }(Ft(e, n), t, n); }(e, t, n); }
    function Ut(e) { void 0 === e && (e = {}); var t = x((function (e) { var t = e.replace; return { params: e.params || {}, query: e.query || {}, replace: void 0 !== t && t }; }), { name: "navigateFx", sid: "-16itqs" }), n = E({ and: { effect: t, mapParams: function (e) { return ({ params: e || {}, query: {} }); } }, or: { name: "openFx", sid: "-34ax4v" } }), r = k(!1, { name: "$isOpened", sid: "-mkdat5" }), a = k({}, { name: "$params", sid: "-dji428" }), o = k({}, { name: "$query", sid: "g8ahyi" }), l = b({ name: "opened", sid: "1k4p4d" }), i = b({ name: "updated", sid: "2eisw8" }), u = b({ name: "closed", sid: "yx116h" }); return r.on(l, (function () { return !0; })).on(u, (function () { return !1; })), a.on(l, (function (e, t) { return t.params; })).on(i, (function (e, t) { return t.params; })), o.on(l, (function (e, t) { return t.query; })).on(i, (function (e, t) { return t.query; })), O({ and: [{ source: t.doneData, match: r.map((function (e) { return e ? "updated" : "opened"; })), cases: { opened: l, updated: i } }], or: { sid: "2pgafx" } }), { $isOpened: r, $params: a, $query: o, opened: l, updated: i, closed: u, navigate: t, open: n, kind: Jt.ROUTE, settings: { derived: Boolean(e.filter) } }; }
    function qt(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function Vt(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? qt(Object(n), !0).forEach((function (t) { var r, a, o; r = e, o = n[t], (a = (function (e) { var t = (function (e) { if ("object" != typeof e || !e)
            return e; var t = e[Symbol.toPrimitive]; if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n)
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        } return String(e); })(e); return "symbol" == typeof t ? t : String(t); })(a = t)) in r ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[a] = o; })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    function Ht(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function Bt(e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (n)
        return (n = n.call(e)).next.bind(n); if (Array.isArray(e) || (n = (function (e, t) { if (e) {
        if ("string" == typeof e)
            return Ht(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ht(e, t) : void 0;
    } })(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; };
    } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function Wt(e, t) { if (Object.keys(e).length !== Object.keys(t).length)
        return !1; for (var n in e)
        if ("" + e[n] != "" + t[n])
            return !1; return !0; }
    function Qt() { return { $query: k({}, { and: { updateFilter: function (e, t) { return !Wt(t, e); } }, name: "$query", sid: "-6fm59b" }), back: b({ name: "back", sid: "m7e58l" }), forward: b({ name: "forward", sid: "-4wdrfl" }) }; }
    function Kt(e) { var t, n, r = e.params, a = e.query, o = e.serialize, l = function (e, t) { void 0 === t && (t = {}); var n = It(t), r = t.encode, a = void 0 === r ? function (e) { return e; } : r, o = t.validate, l = void 0 === o || o, i = e.map((function (e) { if ("object" == typeof e)
        return new RegExp("^(?:".concat(e.pattern, ")$"), n); })); return function (t) { for (var n = "", r = 0; r < e.length; r++) {
        var o = e[r];
        if ("string" != typeof o) {
            var u = t ? t[o.name] : void 0, s = "?" === o.modifier || "*" === o.modifier, c = "*" === o.modifier || "+" === o.modifier;
            if (Array.isArray(u)) {
                if (!c)
                    throw new TypeError('Expected "'.concat(o.name, '" to not repeat, but got an array'));
                if (0 === u.length) {
                    if (s)
                        continue;
                    throw new TypeError('Expected "'.concat(o.name, '" to not be empty'));
                }
                for (var f = 0; f < u.length; f++) {
                    var d = a(u[f], o);
                    if (l && !i[r].test(d))
                        throw new TypeError('Expected all "'.concat(o.name, '" to match "').concat(o.pattern, '", but got "').concat(d, '"'));
                    n += o.prefix + d + o.suffix;
                }
            }
            else if ("string" != typeof u && "number" != typeof u) {
                if (!s) {
                    var p = c ? "an array" : "a string";
                    throw new TypeError('Expected "'.concat(o.name, '" to be ').concat(p));
                }
            }
            else {
                if (d = a(String(u), o), l && !i[r].test(d))
                    throw new TypeError('Expected "'.concat(o.name, '" to match "').concat(o.pattern, '", but got "').concat(d, '"'));
                n += o.prefix + d + o.suffix;
            }
        }
        else
            n += o;
    } return n; }; }(Ft(e.pathCreator, n), n)(r), i = null !== (t = null == o ? void 0 : o.write(a)) && void 0 !== t ? t : new URLSearchParams(a); return l + (Object.keys(a).length ? "?" + i : ""); }
    function Yt(e) { var t = e.actualPath, n = Dt(e.pathCreator.replace("://", "\\://"))(en(t)); return n ? { matches: !0, params: n.params } : { matches: !1 }; }
    function Xt(e) { return function (e) { return "object" == typeof e && null !== e && "kind" in e && e.kind === Jt.ROUTE; }(e); }
    function Gt(e) { if (!e)
        throw new Error("[Atomic-Router] No history provided"); }
    function Zt(e) { return e.map((function (e) { return !e; })); }
    var Jt = { ROUTE: Symbol() }, en = function (e) { if (e.match(/^[a-z0-9]+\:\/\//i))
        return e; var t = new URL("http://_" + e); return [t.pathname, t.hash].join(""); }, tn = x((function (e) { return (Gt(e.history), e.history[e.method](e.path, {}), e); }), { name: "historyPushFx", sid: "xw3ola" }), nn = x((function (e) { return (Gt(e), e.back(), e); }), { name: "historyBackFx", sid: "-q0iw6t" }), rn = x((function (e) { return (Gt(e), e.forward(), e); }), { name: "historyForwardFx", sid: "du9nya" }), an = function (e) { return function (t) { var n = t.find((function (t) { return t.routeObj.route === e.route; })); if (n)
        return { params: n.params, query: n.query }; }; };
    function on(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function ln(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? on(Object(n), !0).forEach((function (t) { var r, a, o; r = e, a = t, o = n[t], (a = function (e) { var t = function (e, t) { if ("object" != typeof e || !e)
            return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r)
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" == typeof t ? t : String(t); }(a)) in r ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[a] = o; })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    function un(e, t) { if (null == e)
        return {}; var n, r, a = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]); return a; }
    function sn(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function cn(e) { var t, n, r = ""; if ("string" == typeof e || "number" == typeof e)
        r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = cn(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e)
                e[t] && (r && (r += " "), r += t); return r; }
    function fn() { for (var e, t, n = 0, r = ""; n < arguments.length;)
        (e = arguments[n++]) && (t = cn(e)) && (r && (r += " "), r += t); return r; }
    var dn = (0, i.createContext)(null);
    function pn(e) { var t = e.router, n = e.children; return (0, o.jsx)(dn.Provider, { value: t, children: n }); }
    var mn = ["to", "params", "query", "activeClassName", "inactiveClassName"], hn = ["to", "params", "query", "className", "activeClassName", "inactiveClassName", "onClick", "children", "target"], vn = function (e, t) { e.to, e.params, e.query, e.activeClassName, e.inactiveClassName; var n = un(e, mn); return "string" == typeof e.to ? (0, o.jsx)(gn, ln(ln({ ref: t, href: e.to }, n), {}, { className: fn(e.className) })) : (0, o.jsx)(bn, ln({ ref: t }, e)); }, gn = (0, i.forwardRef)((function (e, t) { return (0, o.jsx)("a", ln({ ref: t, className: e.className }, e)); })), yn = function (e, t) { var n = e.to, r = e.params, a = e.query, l = e.className, u = e.activeClassName, s = e.inactiveClassName, c = e.onClick, f = e.children, d = e.target, p = un(e, hn), m = (0, i.useContext)(dn).routes.find((function (e) { return e.route === n; })); if (!m)
        throw new Error("[RouteLink] Route not found"); var h = Nt([m.route.$isOpened, n.navigate]), v = h[0], g = h[1], y = fe({ sid: "oed02r", fn: function () { return Kt({ pathCreator: m.path, params: r || {}, query: a || {} }); }, name: "href", method: "buildPath" }); return (0, o.jsx)("a", ln(ln({ ref: t, href: y }, p), {}, { className: fn(l, v ? u : s), target: d, onClick: function (e) { c && c(e), e.defaultPrevented || d && "_self" !== d || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (e.preventDefault(), g({ params: r || {}, query: a || {} })); }, children: f })); }, bn = (0, i.forwardRef)(yn), wn = (0, i.forwardRef)(vn);
    function kn(e) { return Array.isArray(e) ? Nt(e.map((function (e) { return e.$isOpened; }))).some(Boolean) : Nt(e.$isOpened); }
    function Sn(e) { return function (t) { var n = ln(ln({}, e), t); if (kn(n.route)) {
        var r = n.view;
        return (0, o.jsx)(r, ln({}, t));
    } if (n.otherwise) {
        var a = n.otherwise;
        return (0, o.jsx)(a, ln({}, t));
    } return null; }; }
    var xn = { home: Ut(), about: Ut(), shop: Ut() }, En = function (e) { var t = e.base, n = e.routes, r = e.notFoundRoute, a = e.hydrate, o = e.serialize, l = e.controls, i = void 0 === l ? fe({ sid: "-eby7", fn: function () { return Qt(); }, name: "controls", method: "createRouterControls" }) : l, u = k(null != a && a, { and: { serialize: "ignore" }, name: "$hydrateMode", sid: "-i2numw" }), s = (function (e, t) { void 0 === t && (t = ""); for (var n, r = [], a = function () { var e, t = n.value; Array.isArray(t.route) ? (e = r).push.apply(e, t.route.map((function (e) { return Vt(Vt({}, t), {}, { route: e }); }))) : r.push(t); }, o = Bt(e); !(n = o()).done;)
        a(); r = r.map((function (e) { return Vt(Vt({}, e), {}, { path: "" + t + e.path }); })); for (var l, i = [], u = [], s = Bt(r); !(l = s()).done;) {
        var c = l.value;
        c.route.settings.derived ? i.push(c) : u.push(c);
    } if (i.length)
        for (var f, d = Bt(i); !(f = d()).done;)
            console.error("[Atomic-Router]: createHistoryRouter: " + f.value.path + " uses derived route. This won't work"); return u; })(n, t), c = b({ name: "setHistory", sid: "wo9d0s" }), f = b({ name: "navigateFromRouteTriggered", sid: "9zf2q7" }), d = b({ name: "historyUpdated", sid: "-2drux" }), p = b({ name: "recalculateTriggered", sid: "dwpshq" }), m = b({ name: "recalculated", sid: "cnxs21" }), h = b({ name: "routesMatched", sid: "-oym918" }), v = b({ name: "routesMismatched", sid: "wtlio3" }), g = b({ name: "routeNotFound", sid: "-co9rfg" }), y = b({ name: "initialized", sid: "uzcs7d" }), w = k("", { name: "$path", sid: "w0v7zo" }), x = k({}, { and: { name: "historyRouter.$query", updateFilter: function (e, t) { return !Wt(e, t); } }, name: "$query", sid: "34mtvb" }), C = k([], { and: { serialize: "ignore" }, name: "$activeRoutes", sid: "-q9xrap" }), _ = k(null, { and: { serialize: "ignore" }, name: "$history", sid: "jk9nd5" }), O = k(!1, { name: "$isFirstCheckPassed", sid: "y4c34b" }), z = k(!1, { name: "$isRouteNavigateInProgress", sid: "-6c2ssl" }), T = E({ and: { source: _, effect: function (e, t) { return tn(Vt({ history: e }, t)); } }, or: { name: "pushFx", sid: "gzjrp0" } }), R = E({ and: { source: _, effect: function (e) { var t = d; try {
                t = N(d);
            }
            catch (e) { } return e.listen((function () { t(); })), !0; } }, or: { name: "subscribeHistoryFx", sid: "5wp0bd" } }), L = P({ and: [{ clock: a ? [d] : [d, R.done], source: _, filter: Boolean, fn: function (e) { var t; return { path: e.location.pathname, query: null !== (t = null == o ? void 0 : o.read(e.location.search)) && void 0 !== t ? t : Object.fromEntries(new URLSearchParams(e.location.search)) }; } }], or: { name: "historyUpdatedParsed", sid: "fmwavu" } }), j = P({ and: [{ clock: L, source: { path: w, query: x }, filter: function (e, t) { return t.path !== e.path || !Wt(t.query, e.query); }, fn: function (e, t) { return t; } }], or: { name: "historyUpdateTriggered", sid: "-qpa0p5" } }); _.on(c, (function (e, t) { return t; })), P({ and: [{ clock: _, target: R }], or: { sid: "rwilmr" } }), P({ and: [{ clock: j, source: _, filter: Boolean, fn: function (e) { var t, n = null == e ? void 0 : e.location.hash; return { path: null == e ? void 0 : e.location.pathname, query: null !== (t = null == o ? void 0 : o.read(null == e ? void 0 : e.location.search)) && void 0 !== t ? t : Object.fromEntries(new URLSearchParams(null == e ? void 0 : e.location.search)), hash: n }; }, target: p }], or: { sid: "rz9klk" } }); for (var M, F = Bt(s); !(M = F()).done;) {
        var D = M.value, $ = h.filterMap(an(D)), I = v.filterMap(an(D)), A = { initialized: P({ and: [{ clock: R.done, filter: S({ and: [D.route.$isOpened, u, function (e, t) { return e && !t; }], or: { name: "filter", sid: "gu94on" } }) }], or: { name: "initialized", sid: "-gxdv2m" } }), opened: P({ and: [{ clock: $, filter: Zt(D.route.$isOpened) }], or: { name: "opened", sid: "rd6yjz" } }), updated: P({ and: [{ clock: $, filter: D.route.$isOpened }], or: { name: "updated", sid: "-owo90k" } }), closed: P({ and: [{ clock: I, filter: D.route.$isOpened }], or: { name: "closed", sid: "ic5bp1" } }) };
        P({ and: [{ clock: A.initialized, source: { params: D.route.$params, query: D.route.$query }, target: D.route.opened }], or: { sid: "-ue11fh" } }), P({ and: [{ clock: A.updated, source: [D.route.$params, D.route.$query], filter: function (e, t) { var n = e[1]; return !Wt(e[0], t.params) || !Wt(n, t.query); }, fn: function (e, t) { return t; }, target: D.route.updated }], or: { sid: "-twzf1a" } }), P({ and: [{ clock: A.opened, filter: Zt(z), target: D.route.opened }], or: { sid: "-tfe01q" } }), P({ and: [{ clock: A.closed, target: D.route.closed }], or: { sid: "-taznau" } });
    } for (var U, q = function () { var e = U.value; P({ and: [{ clock: e.route.navigate.doneData, fn: function (t) { var n = t.replace; return { route: e, params: t.params, query: t.query, replace: null != n && n }; }, target: f }], or: { sid: "-suhti0" } }); }, V = Bt(s); !(U = V()).done;)
        q(); z.on(f, (function () { return !0; })), P({ and: [{ clock: f, fn: function (e) { var t = e.params, n = e.query, r = e.replace; return { path: Kt({ pathCreator: e.route.path, params: t, query: n, serialize: o }), params: t, query: n, method: r ? "replace" : "push" }; }, target: T }], or: { sid: "-rzpcbi" } }), z.reset([h, v]), P({ and: [{ clock: p, fn: function (e) { for (var t, n = e.path, r = e.query, a = e.hash, o = [], l = [], i = Bt(s); !(t = i()).done;) {
                    var u = t.value, c = u.path.includes("#") ? "" + n + a : "" + n, f = Yt({ pathCreator: u.path, actualPath: c });
                    (f.matches ? o : l).push({ routeObj: u, params: f.params, query: r });
                } return l.forEach((function (e, t) { o.some((function (t) { return t.routeObj.route === e.routeObj.route; })) && l.splice(t, 1); })), { matching: o, mismatching: l.filter(Boolean), path: n, query: r }; }, target: m }], or: { sid: "-qzex5o" } }), w.on(j, (function (e, t) { return t.path; })), x.on(j, (function (e, t) { return t.query; })); var H = m.map((function (e) { return e.matching; })); return P({ and: [{ clock: H, filter: function (e) { return e.length > 0; }, target: h }], or: { sid: "-eosjhz" } }), P({ and: [{ clock: m.map((function (e) { return e.mismatching; })), filter: function (e) { return e.length > 0; }, target: v }], or: { sid: "-e9y3h8" } }), C.on(m, (function (e, t) { return t.matching.map((function (e) { return e.routeObj.route; })); })), P({ and: [{ clock: H, filter: function (e) { return 0 === e.length; }, target: g }], or: { sid: "-dscoho" } }), fe({ sid: "-dp1wu2", fn: function () { return Xt(r); }, name: "none", method: "isRouteInternal" }) && (P({ and: [{ clock: g, source: x, filter: r.$isOpened, fn: function (e) { return ({ query: e, params: {} }); }, target: r.updated }], or: { sid: "-doi4af" } }), P({ and: [{ clock: g, source: { query: x, isOpened: r.$isOpened }, filter: function (e) { return !e.isOpened; }, fn: function (e) { return ({ query: e.query, params: {} }); }, target: r.opened }], or: { sid: "-d8k32y" } }), P({ and: [{ clock: H, source: r.$isOpened, filter: function (e, t) { return e && t.length > 0; }, target: r.closed }], or: { sid: "-csm1vh" } })), P({ and: [{ clock: i.back, source: _, target: nn }], or: { sid: "-cc484d" } }), P({ and: [{ clock: i.forward, source: _, target: rn }], or: { sid: "-bx9s3m" } }), P({ and: [{ clock: x, source: { controlsQuery: i.$query, localQuery: x }, filter: function (e) { return !Wt(e.controlsQuery, e.localQuery); }, fn: function (e) { return e.localQuery; }, target: i.$query }], or: { sid: "-btf7y3" } }), P({ and: [{ clock: i.$query, source: { path: w, localQuery: x, isNavigateInProgress: z, realHistory: _ }, filter: function (e, t) { var n, r, a, l = e.localQuery, i = e.isNavigateInProgress, u = e.realHistory, s = null !== (n = null == o ? void 0 : o.read(null !== (r = null == u ? void 0 : u.location.search) && void 0 !== r ? r : "")) && void 0 !== n ? n : Object.fromEntries(new URLSearchParams(null !== (a = null == u ? void 0 : u.location.search) && void 0 !== a ? a : "")); return i || !Wt(t, s) || !Wt(l, t); }, fn: function (e, t) { var n, r = e.path, a = null !== (n = null == o ? void 0 : o.write(t)) && void 0 !== n ? n : new URLSearchParams(t); return { path: r + (a ? "?" + a : ""), params: {}, query: t, method: "push" }; }, target: T }], or: { sid: "-bdh6qm" } }), P({ and: [{ clock: m, source: { activeRoutes: C, path: w, query: x }, filter: O.map((function (e) { return !e; })), target: y }], or: { sid: "-y1vb" } }), O.on(y, (function () { return !0; })).reset(_), { $path: w, $activeRoutes: C, $history: _, setHistory: c, $query: x, back: i.back, forward: i.forward, push: T, routes: s, initialized: y, routeNotFound: g }; }({ routes: [{ path: "/", route: xn.home }, { path: "/about", route: xn.about }, { path: "/shop", route: xn.shop }], controls: Qt() }), Cn = b();
    var _n = a.p + "5409e19a0c730d7baa7e.png", Pn = a.p + "78f00983b06830045336.jpeg";
    var On;
    function Nn() { return Nn = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Nn.apply(null, arguments); }
    var zn = function (e) { return i.createElement("svg", Nn({ width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", "data-icon": "menu-fold", viewBox: "64 64 896 896" }, e), On || (On = i.createElement("path", { d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M115.4 518.9 271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8" }))); };
    var Tn = Sn({ view: function () { return (0, o.jsxs)("div", { children: [(0, o.jsx)("h1", { children: "Home" }), (0, o.jsx)("img", { src: _n }), (0, o.jsx)("img", { src: Pn }), (0, o.jsx)(zn, { width: 30, height: 30 })] }); }, route: xn.home });
    function Rn(e) { return G.unit(e) ? e.map((function (e) { return !e; }), { skipVoid: !1 }) : function (t) { return !e(t); }; }
    var Ln, jn, Mn = function () { return Mn = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Mn.apply(this, arguments); }, Fn = function (e) { var t, n, r = e.route, a = e.load, o = e.staticDeps, l = void 0 === o ? {} : o, u = b(), s = b(), c = function (e) { var t = (function (e) { var t = {}; if (fe({ sid: "-oimir7", fn: function () { return Xt(e); }, name: "none", method: "isRouteInternal" }))
        return Object.assign(t, { route: e, chainedRoute: fe({ sid: "nxhp9m", fn: function () { return Ut(); }, name: "chainedRoute", method: "createRoute" }), beforeOpen: b({ name: "beforeOpen", sid: "-mzhjfk" }), openOn: C([e.opened, e.closed], { name: "openOn", sid: "-84w4rh" }), cancelOn: C([], { name: "cancelOn", sid: "-l2tb0w" }) }), t; var n = e; if (Object.assign(t, { route: n.route, chainedRoute: n.chainedRoute || fe({ sid: "-wf80u2", fn: function () { return Ut(); }, name: "chainedRoute", method: "createRoute" }), beforeOpen: G.unit(n.beforeOpen) ? n.beforeOpen : E({ and: n.beforeOpen, or: { name: "beforeOpen", sid: "-u0vw04" } }) }), G.effect(t.beforeOpen, { sid: "-nlmv5j" }))
        return Object.assign(t, { openOn: n.openOn || t.beforeOpen.doneData, cancelOn: n.cancelOn || t.beforeOpen.failData }), t; var r = e; return Object.assign(t, { openOn: P({ and: [{ clock: r.openOn }], or: { name: "openOn", sid: "o26601" } }), cancelOn: P({ and: [{ clock: r.cancelOn || b({ name: "clock", sid: "-x23z00" }) }], or: { name: "cancelOn", sid: "l2720p" } }) }), t; })(e), n = t.route, r = t.chainedRoute, a = t.beforeOpen, o = t.openOn, l = t.cancelOn, i = k({}, { name: "$params", sid: "-fpgvka" }), u = k({}, { name: "$query", sid: "y4h4ag" }), s = S({ and: [S({ and: [[n.$params, n.$query]], or: { name: "and", sid: "120e5z" } }), S({ and: [[i, u]], or: { name: "and", sid: "12k6rc" } }), function (e, t) { return e[0] === t[0] && e[1] === t[1]; }], or: { name: "$hasSameParams", sid: "uvxnko" } }), c = P({ and: [{ clock: [n.opened, n.updated] }], or: { name: "routeTriggered", sid: "-o4rktf" } }); P({ and: [{ clock: c, target: a }], or: { sid: "-qinkky" } }), i.on(c, (function (e, t) { return t.params; })), u.on(c, (function (e, t) { return t.query; })), P({ and: [{ clock: o, source: { params: i, query: u }, filter: s, target: r.navigate }], or: { sid: "-q25qs4" } }); var f = C([n.closed, l], { name: "aborted", sid: "e9ezkr" }); return i.reset(f), u.reset(f), P({ and: [{ clock: f, target: r.closed }], or: { sid: "-piwy0h" } }), r; }({ route: r, beforeOpen: u, openOn: s }), f = x((function () { return function (e, t, n, r) { return new (n || (n = Promise))((function (a, o) { function l(e) { try {
        u(r.next(e));
    }
    catch (e) {
        o(e);
    } } function i(e) { try {
        u(r.throw(e));
    }
    catch (e) {
        o(e);
    } } function u(e) { var t; e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(l, i); } u((r = r.apply(e, t || [])).next()); })); }(void 0, void 0, void 0, (function () { var e, n, r, o; return function (e, t) { var n, r, a, o, l = { label: 0, sent: function () { if (1 & a[0])
            throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function i(i) { return function (u) { return function (i) { if (n)
        throw new TypeError("Generator is already executing."); for (; o && (o = 0, i[0] && (l = 0)), l;)
        try {
            if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done)
                return a;
            switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                case 0:
                case 1:
                    a = i;
                    break;
                case 4: return l.label++, { value: i[1], done: !1 };
                case 5:
                    l.label++, r = i[1], i = [0];
                    continue;
                case 7:
                    i = l.ops.pop(), l.trys.pop();
                    continue;
                default:
                    if (!((a = (a = l.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                        l = 0;
                        continue;
                    }
                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                        l.label = i[1];
                        break;
                    }
                    if (6 === i[0] && l.label < a[1]) {
                        l.label = a[1], a = i;
                        break;
                    }
                    if (a && l.label < a[2]) {
                        l.label = a[2], l.ops.push(i);
                        break;
                    }
                    a[2] && l.ops.pop(), l.trys.pop();
                    continue;
            }
            i = t.call(e, l);
        }
        catch (e) {
            i = [6, e], r = 0;
        }
        finally {
            n = a = 0;
        } if (5 & i[0])
        throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u]); }; } }(this, (function (i) { switch (i.label) {
        case 0: return [4, a()];
        case 1: return e = i.sent(), n = e.component, r = e.createModel, t || (t = Promise.resolve(r(Mn({ route: c }, l)))), o = { component: n }, [4, t];
        case 2: return [2, (o.model = i.sent(), o)];
    } })); })); })), d = k(!1).on(s, (function () { return !0; })); return function (e) { var t = e.if, n = e.then, r = e.else, _b = e.source, a = _b === void 0 ? b({ name: "source", sid: "tdyoa4" }, { name: "source", sid: "tdyoa4" }) : _b, o = G.unit(t) || "function" == typeof t ? t : function (e) { return e === t; }; n && r ? O({ and: [{ source: a, match: { then: o, else: Rn(o) }, cases: { then: n, else: r } }], or: { sid: "aaw2hr" } }) : n ? P({ and: [{ source: a, filter: o, target: n }], or: { sid: "-dwrmbb" } }) : r && P({ and: [{ source: a, filter: Rn(o), target: r }], or: { sid: "-dsx25s" } }); }({ source: u, if: d, then: s, else: f }), P({ clock: f.doneData, filter: (n = d, n.map((function (e) { return !e; }), { skipVoid: !1 })), target: s }), (0, i.lazy)((function () { return f().then((function (e) { var t, n = e.model, r = e.component, a = (0, i.memo)((function (e) { return (0, i.createElement)(r, Mn({ model: n }, e)); })); return a.displayName = "Lazy".concat(null !== (t = a.displayName) && void 0 !== t ? t : "Page"), { default: a }; })); })); }, Dn = function (e) { var t = e.children; return (0, o.jsx)(i.Suspense, { fallback: "Loading...", children: t }); }, $n = function (e) { return function () { return (0, o.jsx)(Dn, { children: (0, o.jsx)(e, {}) }); }; }, In = Sn({ view: $n(Fn({ load: function () { return a.e(875).then(a.bind(a, 875)); }, route: xn.about })), route: xn.about }), An = Sn({ view: $n(Fn({ load: function () { return a.e(150).then(a.bind(a, 150)); }, route: xn.shop })), route: xn.shop }), Un = (Ln = { routes: [{ view: Tn, route: xn.home }, { view: In, route: xn.about }, { view: An, route: xn.shop }] }, function (e) { for (var t, n = ln(ln({}, Ln), e), r = function (e, t) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (n)
        return (n = n.call(e)).next.bind(n); if (Array.isArray(e) || (n = function (e, t) { if (e) {
        if ("string" == typeof e)
            return sn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? sn(e, t) : void 0;
    } }(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; };
    } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(n.routes.map((function (e) { var t = kn(e.route); return ln(ln({}, e), {}, { isOpened: t }); }))); !(t = r()).done;) {
        var a = t.value;
        if (a.isOpened) {
            var l = a.view;
            if (a.layout) {
                var i = a.layout;
                return (0, o.jsx)(i, { children: (0, o.jsx)(l, {}) });
            }
            return (0, o.jsx)(l, {});
        }
    } if (n.otherwise) {
        var u = n.otherwise;
        return (0, o.jsx)(u, {});
    } return null; });
    function qn() { return qn = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, qn.apply(null, arguments); }
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(jn || (jn = {}));
    var Vn = "beforeunload";
    function Hn(e) { e.preventDefault(), e.returnValue = ""; }
    function Bn() { var e = []; return { get length() { return e.length; }, push: function (t) { return e.push(t), function () { e = e.filter((function (e) { return e !== t; })); }; }, call: function (t) { e.forEach((function (e) { return e && e(t); })); } }; }
    var Wn = x((function () { return function (e) { void 0 === e && (e = {}); var t = e.window, n = void 0 === t ? document.defaultView : t, r = n.history; function a() { var e = n.location, t = e.pathname, a = e.search, o = e.hash, l = r.state || {}; return [l.idx, { pathname: t, search: a, hash: o, state: l.usr || null, key: l.key || "default" }]; } var o = null; n.addEventListener("popstate", (function () { if (o)
        f.call(o), o = null;
    else {
        var e = jn.Pop, t = a(), n = t[0], r = t[1];
        if (f.length) {
            if (null != n) {
                var l = u - n;
                l && (o = { action: e, location: r, retry: function () { g(-1 * l); } }, g(l));
            }
        }
        else
            v(e);
    } })); var l = jn.Pop, i = a(), u = i[0], s = i[1], c = Bn(), f = Bn(); function d(e) { return "string" == typeof e ? e : (n = (t = e).pathname, r = void 0 === n ? "/" : n, a = t.search, o = void 0 === a ? "" : a, l = t.hash, i = void 0 === l ? "" : l, o && "?" !== o && (r += "?" === o.charAt(0) ? o : "?" + o), i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i), r); var t, n, r, a, o, l, i; } function p(e, t) { return void 0 === t && (t = null), qn({ pathname: s.pathname, hash: "", search: "" }, "string" == typeof e ? function (e) { var t = {}; if (e) {
        var n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        var r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    } return t; }(e) : e, { state: t, key: Math.random().toString(36).substr(2, 8) }); } function m(e, t) { return [{ usr: e.state, key: e.key, idx: t }, d(e)]; } function h(e, t, n) { return !f.length || (f.call({ action: e, location: t, retry: n }), !1); } function v(e) { l = e; var t = a(); u = t[0], s = t[1], c.call({ action: l, location: s }); } function g(e) { r.go(e); } return null == u && (u = 0, r.replaceState(qn({}, r.state, { idx: u }), "")), { get action() { return l; }, get location() { return s; }, createHref: d, push: function e(t, a) { var o = jn.Push, l = p(t, a); if (h(o, l, (function () { e(t, a); }))) {
            var i = m(l, u + 1), s = i[0], c = i[1];
            try {
                r.pushState(s, "", c);
            }
            catch (e) {
                n.location.assign(c);
            }
            v(o);
        } }, replace: function e(t, n) { var a = jn.Replace, o = p(t, n); if (h(a, o, (function () { e(t, n); }))) {
            var l = m(o, u), i = l[0], s = l[1];
            r.replaceState(i, "", s), v(a);
        } }, go: g, back: function () { g(-1); }, forward: function () { g(1); }, listen: function (e) { return c.push(e); }, block: function (e) { var t = f.push(e); return 1 === f.length && n.addEventListener(Vn, Hn), function () { t(), f.length || n.removeEventListener(Vn, Hn); }; } }; }(); }));
    P({ clock: Cn, target: Wn }), P({ clock: Wn.doneData, target: En.setHistory }), Cn();
    var Qn = document.getElementById("root");
    if (!Qn)
        throw new Error("#root not found");
    (0, l.H)(Qn).render((0, o.jsx)(i.StrictMode, { children: (0, o.jsx)((function () { var e = (0, i.useState)(0); return e[0], e[1], console.log(1), (0, o.jsxs)(pn, { router: En, children: ["production", (0, o.jsx)(wn, { to: xn.home, children: "Home" }), (0, o.jsx)(wn, { to: xn.about, children: "About" }), (0, o.jsx)(wn, { to: xn.shop, children: "Shop" }), (0, o.jsx)(Un, {})] }); }), {}) }));
})();
