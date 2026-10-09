/* Recovered shipped factory. Module 694318.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5978007..5978282
 * Raw property SHA-256: 114fa3f61c6e1a9105aafe555f0beca9154a5aff10805081a1a30e7749204377
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { cx: () => l, iJ: () => s, kf: () => o });
  var i = n(877133),
    r = n(287809),
    a = n(652215);
  function s(e) {
    return void 0 !== e && e.type !== a.rbe.DM;
  }
  function l(e) {
    return r.default.getUser(e)?.hasFlag(a.nhx.SPAMMER) ?? !1;
  }
  function o(e) {
    return l(e.author.id) && !(0, i.ER)(e);
  }
}
