/* Recovered shipped factory. Module 32018.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 808226..808428
 * Raw property SHA-256: 19400c08842cb26bed203961b3edfe8475c50f55cf15f4d14558a93116fe0d62
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
        s.test(e) && (!o || -1 === a.compare(e)) && (a = new n((o = e), r));
      }),
      o
    );
  };
}
