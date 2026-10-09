/* Recovered shipped factory. Module 83220.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 51713..52225
 * Raw property SHA-256: 2da2bdea2362c03490330c0ae4a6536838e4f2af8bdd554b17bad1114bc78ba0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { lu: () => a, zf: () => o });
  var n = r(978862);
  function a() {
    return Date.now() / 1e3;
  }
  let o = (function () {
    let { performance: e } = n.O;
    if (!e || !e.now) return a;
    let t = Date.now() - e.now(),
      r = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (r + e.now()) / 1e3;
  })();
  (() => {
    let { performance: e } = n.O;
    if (!e || !e.now) return;
    let t = e.now(),
      r = Date.now(),
      a = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 36e5,
      o = e.timing && e.timing.navigationStart,
      i = "number" == typeof o ? Math.abs(o + t - r) : 36e5;
    if ((a < 36e5 || i < 36e5) && a <= i) return e.timeOrigin;
  })();
}
