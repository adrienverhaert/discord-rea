/* Recovered shipped factory. Module 85402.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 483915..484334
 * Raw property SHA-256: a57e0f8be83376cbf203c778cbcd6e2c84716b7fc4d53174f6da5df3fc31d2fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Ec: () => l, Tm: () => a, Zv: () => s, aq: () => u, at: () => i, oq: () => o });
  var n = Symbol.for("FluidValue:config"),
    i = function (e) {
      return !!a(e);
    };
  function o(e) {
    var t = a(e);
    return t ? t.get() : e;
  }
  function a(e) {
    if (e) return e[n];
  }
  function s(e, t) {
    Object.defineProperty(e, n, { value: t, configurable: !0 });
  }
  function l(e, t) {
    var r = a(e);
    if (r)
      return (
        r.addChild(t),
        function () {
          return r.removeChild(t);
        }
      );
  }
  var u = function () {
    s(this, this);
  };
}
