/* Recovered shipped factory. Module 990208.
 * Source: recovered/web/assets/f0b48fcef8b673f0.js
 * UTF-16 property offsets: 95..310
 * Raw property SHA-256: b4b5b0690de4fcba4ac4e5755c1489931f49dde8bd9b9945832d8fe64fbd4ed5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, s, a) {
  a.d(s, { A: () => r });
  var e = a(17928),
    c = a(775602);
  function r(t, s, a) {
    let r = (0, e.bG)([c.Ay], () => c.Ay.useReducedMotion);
    return null != t
      ? r || !1 === s || a
        ? t.staticImageUrl
        : (t.animatedImageUrl ?? t.staticImageUrl)
      : void 0;
  }
}
