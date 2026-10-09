/* Recovered shipped factory. Module 450047.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 24780..25472
 * Raw property SHA-256: e56e78fa23f679c8f3002db0615c2b483e644f3ddf9daa81b182fc93430139e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { D: () => o });
  var l = n(582128),
    r = n(575593),
    i = n(702841),
    s = n(67480),
    a = n(815996),
    u = n(590180),
    c = n(652215);
  function o(e, t) {
    let n = (0, i.yK)([s.A], () => e.map((e) => s.A.get(e))),
      o = (0, i.yK)([u.A], () => e.map((e) => u.A.getProduct(e))),
      d = (0, i.yK)([u.A], () => e.map((e) => u.A.getProductFetch(e))),
      f = (0, i.yK)([u.A], () => e.map((e) => u.A.isProductFetchBackedOff(e)));
    return (
      (0, l.useEffect)(() => {
        for (let [l, i] of e.entries()) {
          let e = n[l],
            s = o[l],
            u = d[l],
            h = !0 === t && s?.type === r.R.BUNDLE && 0 === s.items.length;
          (null == s || h) &&
            (null == e || e.productLine === c.EZt.COLLECTIBLES) &&
            u?.state !== "fetching" &&
            !f[l] &&
            (0, a.Jp)(i, { includeBundles: t });
        }
      }, [e, n, d, o, t, f]),
      o.some((e, t) => d[t]?.state === "fetching" || (null == e && d[t]?.state !== "error"))
    );
  }
}
