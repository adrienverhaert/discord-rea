/* Recovered shipped factory. Module 875565.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 310160..311388
 * Raw property SHA-256: 8c45790d55c2f11752a16496688f027f7f47f5ea0ea09326bd7b2c8c6826f907
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, {
    BD: () => s,
    Kg: () => c,
    L2: () => v,
    NF: () => u,
    Qd: () => p,
    Qg: () => g,
    T2: () => a,
    W6: () => l,
    bJ: () => i,
    gd: () => m,
    mE: () => _,
    sO: () => d,
    tH: () => y,
    vq: () => f,
    xH: () => h,
  });
  let r = Object.prototype.toString;
  function i(e) {
    switch (r.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
      case "[object WebAssembly.Exception]":
        return !0;
      default:
        return y(e, Error);
    }
  }
  function o(e, t) {
    return r.call(e) === `[object ${t}]`;
  }
  function a(e) {
    return o(e, "ErrorEvent");
  }
  function s(e) {
    return o(e, "DOMError");
  }
  function l(e) {
    return o(e, "DOMException");
  }
  function c(e) {
    return o(e, "String");
  }
  function u(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      "__sentry_template_string__" in e &&
      "__sentry_template_values__" in e
    );
  }
  function d(e) {
    return null === e || u(e) || ("object" != typeof e && "function" != typeof e);
  }
  function p(e) {
    return o(e, "Object");
  }
  function h(e) {
    return "u" > typeof Event && y(e, Event);
  }
  function f(e) {
    return "u" > typeof Element && y(e, Element);
  }
  function m(e) {
    return o(e, "RegExp");
  }
  function g(e) {
    return !!(e && e.then && "function" == typeof e.then);
  }
  function _(e) {
    return p(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
  }
  function y(e, t) {
    try {
      return e instanceof t;
    } catch (e) {
      return !1;
    }
  }
  function v(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
  }
}
