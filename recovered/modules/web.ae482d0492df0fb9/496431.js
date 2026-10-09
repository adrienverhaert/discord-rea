/* Recovered shipped factory. Module 496431.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2247037..2247512
 * Raw property SHA-256: f9e5de834adb794d85e5098fbf64890ace4bc2ff0cc067576b72c3916c6ffd31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(265431),
    a = n(58703),
    s = n(396583);
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
      n = arguments.length > 2 ? arguments[2] : void 0,
      l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = (0, a.Tf)(Date.now(), e),
      d = (0, r.A)(),
      c = (0, i.useCallback)(() => {
        let t = (0, a.Tf)(Date.now(), e);
        (0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds) || l || (d(), n?.());
      }, [e, l, d, n]);
    return ((0, s.A)(c, l ? null : t), o);
  }
}
