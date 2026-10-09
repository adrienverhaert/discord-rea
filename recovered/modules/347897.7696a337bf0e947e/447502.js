/* Recovered shipped factory. Module 447502.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1169897..1170923
 * Raw property SHA-256: 1ffe292b640fa13960f012a8430af726f2bc8f6f9888dd350a442d7fea36636d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Cc: () => l, wR: () => p });
  var n = r(582128);
  let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
    o = n.createContext(i),
    a = n.createContext(!1),
    s = ("u" > typeof window && window.document && window.document.createElement, new WeakMap()),
    l =
      "function" == typeof n.useId
        ? function (e) {
            let t = n.useId(),
              [r] = (0, n.useState)(p()),
              o = r ? "react-aria" : `react-aria${i.prefix}`;
            return e || `${o}-${t}`;
          }
        : function (e) {
            let t = (0, n.useContext)(o),
              r = (function (e = !1) {
                let t = (0, n.useContext)(o),
                  r = (0, n.useRef)(null);
                if (null === r.current && !e) {
                  let e =
                    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner
                      ?.current;
                  if (e) {
                    let r = s.get(e);
                    null == r
                      ? s.set(e, { id: t.current, state: e.memoizedState })
                      : e.memoizedState !== r.state && ((t.current = r.id), s.delete(e));
                  }
                  r.current = ++t.current;
                }
                return r.current;
              })(!!e),
              i = `react-aria${t.prefix}`;
            return e || `${i}-${r}`;
          };
  function u() {
    return !1;
  }
  function c() {
    return !0;
  }
  function f(e) {
    return () => {};
  }
  function p() {
    return "function" == typeof n.useSyncExternalStore
      ? n.useSyncExternalStore(f, u, c)
      : (0, n.useContext)(a);
  }
}
