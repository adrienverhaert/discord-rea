/* Recovered shipped factory. Module 469177.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4928025..4928464
 * Raw property SHA-256: 52480bda5b3ab1197a7995720bee1d492cd38f62931743b9506c8e031d54d4b3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { L7: () => o, qr: () => c, uG: () => d }), n(174459), n(652215));
  let i = ["COLD_START"],
    r = !0,
    a = new Map();
  function s(e) {
    let t = (a.get(e) ?? 0) - 1;
    t <= 0 ? a.delete(e) : a.set(e, t);
  }
  function l() {
    return a.size > 0 || r;
  }
  function o() {
    let e = [...(r ? i : []), ...a.keys()].sort();
    return e.length > 0 ? e.join(",") : "NO_REASONS";
  }
  function d(e) {
    u(() => {
      let t;
      ((t = a.get(e) ?? 0), a.set(e, t + 1), s(`BRIDGE:${e}`));
    });
  }
  function c(e) {
    u(() => s(e));
  }
  function u(e) {
    (l(), (r = !1), e(), l());
  }
}
