/* Recovered shipped factory. Module 943815.
 * Source: recovered/web/assets/c7076b9100d03b5a.js
 * UTF-16 property offsets: 95..279
 * Raw property SHA-256: 7378084a2a3b3f86952a06f96daec70ae0a5e7fcc592bed8a8b978a14ac160c5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (A, t, h) {
  h.d(t, { A: () => s });
  var c = h(318626);
  let n = { LATIN12: c.Xh, LATIN24: c.ID, ASIAN: c.KC },
    p = /(AM|PM)$/;
  function s(A) {
    return null != A.match(p) ? n.LATIN24 : A.length <= 5 ? n.LATIN12 : n.ASIAN;
  }
}
