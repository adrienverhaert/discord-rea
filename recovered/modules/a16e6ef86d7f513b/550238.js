/* Recovered shipped factory. Module 550238.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 702..1020
 * Raw property SHA-256: 914542f40c04ae299b0795638b38d67844f28bdeeab48af6fd792e3fc34e35d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Qd: () => a, im: () => i });
  var l = n(997101);
  let r = ["country", "city", "line1"],
    o = new Set([l.d.PR, l.d.AE, l.d.KY, l.d.NR, l.d.SG, l.d.MO, l.d.GI]),
    i = new Set([l.d.ID, l.d.CO, l.d.HK, l.d.AG, l.d.SM, l.d.VG]);
  function a(e) {
    return r.every((t) => {
      if ("city" === t && o.has(e.country)) return !0;
      let n = e[t];
      return null != n && "" !== n;
    });
  }
}
