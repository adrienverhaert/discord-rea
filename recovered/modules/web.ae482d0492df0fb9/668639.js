/* Recovered shipped factory. Module 668639.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9912950..9913340
 * Raw property SHA-256: ccfdebdbcfe8bb02bf6b41b6495a3fd20821e459a369ddbd3b9f47ba9165f38e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { cK: () => s, hN: () => o, xW: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(664354);
  let s = r.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.tE,
    hasValue: void 0,
    setHasValue: a.tE,
  });
  function l() {
    return r.useContext(s);
  }
  function o(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(s.Provider, { "data-migration-pending": !0, value: n, children: t });
  }
}
