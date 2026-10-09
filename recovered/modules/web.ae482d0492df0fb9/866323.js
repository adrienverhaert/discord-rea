/* Recovered shipped factory. Module 866323.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9885984..9886422
 * Raw property SHA-256: 518274d25b8f8262bb106fc40d2c430f1ec8d20b2d1de34ec6d77a12ff497600
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => l });
  var i = n(582128),
    r = n(202091),
    a = n(844222),
    s = n(384494);
  function l(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
      l = arguments.length > 3 ? arguments[3] : void 0,
      o = i.useContext(a.C).reducedMotion.enabled,
      d = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || o) && (d = { ...t, ...s.W });
    let [c, u, _] = (0, r.useTransition)(e, d, l);
    return 4 == arguments.length ? [c, u, _] : c;
  }
}
