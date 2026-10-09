/* Recovered shipped factory. Module 194567.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7534199..7534651
 * Raw property SHA-256: a7326fc962e17e1f4dc0582d464ca2cf8c4a33cf2e27694f5af5fa18e8b40f28
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { IJ: () => l, U9: () => a, XP: () => s });
  var i = n(935208);
  function r(e) {
    return [...e].sort((e, t) =>
      e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0,
    );
  }
  function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = [...e].sort((e, t) => i.default.compare(e.soundId, t.soundId));
    return t ? r(n) : n;
  }
  function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return t ? r(e) : e;
  }
  function l() {
    return a;
  }
}
