/* Recovered shipped factory. Module 398884.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6670550..6670826
 * Raw property SHA-256: c88323af2027f3cb77a685e675868fcd1196e992b4055af15c1ed238821e9e1a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Om: () => l, Sn: () => o }), n(17928), n(450510));
  var i = n(71393),
    r = n(287809),
    a = n(158045),
    s = n(652215);
  function l(e) {
    return a.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() === !0;
  }
  function o() {
    return i.A.getGuildCount() >= s.qlD && !l(r.default.getCurrentUser());
  }
}
