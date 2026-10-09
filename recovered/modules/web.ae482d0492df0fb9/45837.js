/* Recovered shipped factory. Module 45837.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7989878..7990306
 * Raw property SHA-256: 2d630e185bfd499b89787daa12a834b5201189488bfc5a3fed27e07a16f1aa25
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(775602),
    s = n(885386),
    l = n(531685);
  function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      [t, n] = i.useState(!1),
      o = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion),
      d = (0, r.bG)([l.A], () => l.A.isFocused()),
      c = s.kt.useSetting();
    return {
      shouldAnimate: d && (t || (!o && !e && c)),
      onMouseEnter: i.useCallback(() => n(!0), []),
      onMouseLeave: i.useCallback(() => n(!1), []),
    };
  }
}
