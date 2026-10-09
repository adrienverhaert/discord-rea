/* Recovered shipped factory. Module 426110.
 * Source: recovered/web/assets/11d8dacc17e67962.js
 * UTF-16 property offsets: 95..308
 * Raw property SHA-256: 33d1bf499d6de0230a3b766e9407e1791001bc547995daee4d881e9e5b1f5320
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, s) {
  s.d(t, { Q: () => i });
  var r = s(291749),
    n = s(801365);
  function i(e, t) {
    let s = (0, n.wo)(e, t);
    if (null == s) return;
    let i = (0, n.l0)(e, t);
    return s > 700 * i
      ? r.i2.TIER_4
      : s > 200 * i
        ? r.i2.TIER_3
        : s > 100 * i
          ? r.i2.TIER_2
          : r.i2.TIER_1;
  }
}
