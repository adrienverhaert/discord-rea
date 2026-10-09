/* Recovered shipped factory. Module 481238.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1126216..1126551
 * Raw property SHA-256: 5161e5394ae11e9e338b6e76c84e390483d2e5d2b6d5a6bc86f5052b98e574b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { e: () => l, o: () => u });
  var n = r(366632),
    i = r(559550),
    o = r(60808),
    a = r(582128);
  let s = new WeakMap();
  function l(e, t) {
    let r;
    return (
      (t && i.B.getGlobalDictionaryForPackage(t)) ||
      ((r = s.get(e)) || ((r = new (0, i.B)(e)), s.set(e, r)), r)
    );
  }
  function u(e, t) {
    let { locale: r } = (0, n.Y)(),
      i = l(e, t);
    return (0, a.useMemo)(() => new (0, o.J)(r, i), [r, i]);
  }
}
