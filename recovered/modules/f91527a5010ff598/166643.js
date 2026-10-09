/* Recovered shipped factory. Module 166643.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 79658..79967
 * Raw property SHA-256: 18865b11d12470818e5a70a32ec103560eb32b6b292031ce5e986c16aee18880
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var l = n(582128),
    i = n(997101),
    s = n(17928),
    a = n(966107),
    r = n(840387),
    o = n(923495);
  [...i.M.EU_COUNTRIES];
  let c = new Set(["GB"]);
  function d() {
    let e, t;
    return (
      (e = (0, s.bG)([o.A], () => o.A.getUserCountryCode())),
      l.useEffect(() => {
        null == e && (0, a.xf)();
      }, [e]),
      (t = e),
      (0, r.Z)() && null != t && c.has(t.alpha2)
    );
  }
}
