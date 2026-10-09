/* Recovered shipped factory. Module 70909.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10690420..10690815
 * Raw property SHA-256: b2eda1c6c1c47081f1abb5d3a6d9246e469e0fccce3ca692066603f97a60fc93
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r }), n(321073));
  var i = n(651139);
  function r(e) {
    let t = !1;
    async function n() {
      if (t) return;
      let r = [];
      e.eachConnection((e) => r.push({ connection: e, stats: e.emitStats() }));
      let a = [];
      for (let e of r) {
        let t = await e.stats;
        null != t && a.push({ connection: e.connection, stats: t });
      }
      (e.emit(i.b.ConnectionStats, a), setTimeout(n, 1e3));
    }
    (e.on(i.b.Destroy, () => (t = !0)), setTimeout(n, 1e3));
  }
  n(618792);
}
