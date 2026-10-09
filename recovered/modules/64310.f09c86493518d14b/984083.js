/* Recovered shipped factory. Module 984083.
 * Source: recovered/web/assets/64310.f09c86493518d14b.js
 * UTF-16 property offsets: 1391..1737
 * Raw property SHA-256: 6f5b4e19730d0093371bd3dd79ea3fcd0554557af294f88e0fa93eac8875f049
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, s) {
  s.d(e, { Z: () => o });
  var i = s(630449),
    n = s(272469),
    r = s(83220);
  function o(t, e) {
    let s = (0, i.KU)(),
      o = (0, i.rm)();
    if (!s) return;
    let { beforeBreadcrumb: a = null, maxBreadcrumbs: h = 100 } = s.getOptions();
    if (h <= 0) return;
    let c = { timestamp: (0, r.lu)(), ...t },
      _ = a ? (0, n.pq)(() => a(c, e)) : c;
    null !== _ && (s.emit && s.emit("beforeAddBreadcrumb", _, e), o.addBreadcrumb(_, h));
  }
}
