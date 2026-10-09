/* Recovered shipped factory. Module 882035.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1230282..1230624
 * Raw property SHA-256: 4564e62be3c745d53ae619e10d3514c2f965d27cbf1bb2e7f827b19acf1b7d75
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { h: () => c, n: () => l });
  var n = r(582128),
    i = r(97729),
    o = r(976245);
  let { useSyncExternalStoreWithSelector: a } = i,
    s = (e) => e;
  function l(e, t = s, r) {
    let i = a(e.subscribe, e.getState, e.getInitialState, t, r);
    return (n.useDebugValue(i), i);
  }
  let u = (e, t) => {
      let r = (0, o.y)(e),
        n = (e, n = t) => l(r, e, n);
      return (Object.assign(n, r), n);
    },
    c = (e, t) => (e ? u(e, t) : u);
}
