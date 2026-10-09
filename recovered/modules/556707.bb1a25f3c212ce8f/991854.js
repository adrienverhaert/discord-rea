/* Recovered shipped factory. Module 991854.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 295025..295469
 * Raw property SHA-256: 35683d2f17c31d20d7ccc3aef0a50fd45c94ca9cd77b9fda7fee4af2f5785f59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { X: () => a, g: () => o });
  var r = n(690094);
  let i = "_sentryMetrics";
  function o(e) {
    let t = e[i];
    if (!t) return;
    let n = {};
    for (let [, [e, i]] of t) (n[e] || (n[e] = [])).push((0, r.Ce)(i));
    return n;
  }
  function a(e, t, n, r, o, a, s) {
    let l = e[i] || (e[i] = new Map()),
      c = `${t}:${n}@${o}`,
      u = l.get(s);
    if (u) {
      let [, e] = u;
      l.set(s, [
        c,
        {
          min: Math.min(e.min, r),
          max: Math.max(e.max, r),
          count: (e.count += 1),
          sum: (e.sum += r),
          tags: e.tags,
        },
      ]);
    } else l.set(s, [c, { min: r, max: r, count: 1, sum: r, tags: a }]);
  }
}
