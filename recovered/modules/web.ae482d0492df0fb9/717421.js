/* Recovered shipped factory. Module 717421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9885483..9885983
 * Raw property SHA-256: 45b198bc28e6ca7bcb697218f090894d84d2fc7b0dba239c9bf71a887e935aba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => l });
  var i = n(582128),
    r = n(202091),
    a = n(844222),
    s = n(384494);
  function l(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "respect-motion-settings",
      n = arguments.length > 2 ? arguments[2] : void 0,
      l = i.useContext(a.C).reducedMotion.enabled,
      o = e;
    "animate-always" !== t &&
      ("respect-motion-settings" !== t || l) &&
      (o = "function" == typeof e ? () => ({ ...e(), ...s.W }) : { ...e, ...s.W });
    let d = "function" == typeof o,
      [c, u, _] = (0, r.useSpring)(o, n);
    return d || 3 == arguments.length ? [c, u, _] : c;
  }
}
