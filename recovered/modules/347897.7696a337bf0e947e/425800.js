/* Recovered shipped factory. Module 425800.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 808429..808631
 * Raw property SHA-256: ed4b30db1396d7e81834c87c5af948cdac6895f3a4ff401c1e15e16d6f2ef634
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(864886),
    i = r(74509);
  e.exports = (e, t, r) => {
    let o = null,
      a = null,
      s = null;
    try {
      s = new i(t, r);
    } catch (e) {
      return null;
    }
    return (
      e.forEach((e) => {
        s.test(e) && (!o || 1 === a.compare(e)) && (a = new n((o = e), r));
      }),
      o
    );
  };
}
