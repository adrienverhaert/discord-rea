/* Recovered shipped factory. Module 732188.
 * Source: recovered/web/assets/564aa8d04a7a6775.js
 * UTF-16 property offsets: 95..472
 * Raw property SHA-256: 254becbeaab924478902cb601068fe007ddafa8107482ea8fc4643bec2a3b065
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, a) {
  a.d(r, { A: () => t });
  var d = a(17928),
    i = a(287809);
  a(938796);
  var s = a(321191);
  function t(e) {
    let r,
      a = (0, d.bG)([i.default], () => i.default.getCurrentUser()),
      t =
        ((r = (0, d.bG)([s.A], () => s.A.getUserProfile(e.id))),
        r?.bio === "" &&
          r?.pronouns === "" &&
          r?.banner === void 0 &&
          r?.accentColor === void 0 &&
          e.flags === e.publicFlags &&
          (r?.badges == null || r?.badges?.length === 0));
    return a?.id !== e.id && !t;
  }
}
