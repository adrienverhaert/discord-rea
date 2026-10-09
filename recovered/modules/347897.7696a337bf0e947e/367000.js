/* Recovered shipped factory. Module 367000.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 459060..459335
 * Raw property SHA-256: 451c23eeddff74646b3671e3c3069817a4aacad6c2d4ddac1074d36103f38058
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  function t(e, t, r, n) {
    return (
      e.addEventListener || (t = "on" + t),
      (e.addEventListener || e.attachEvent).call(e, t, r, n),
      r
    );
  }
  ((e.exports = t),
    (e.exports.on = t),
    (e.exports.off = function (e, t, r, n) {
      return (
        e.removeEventListener || (t = "on" + t),
        (e.removeEventListener || e.detachEvent).call(e, t, r, n),
        r
      );
    }));
}
