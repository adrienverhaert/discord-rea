/* Recovered shipped factory. Module 53257.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8002553..8002736
 * Raw property SHA-256: a8f4ebb4836b40c6453f1b1485e466dd82347a5473bdeadebd85bbda31c9f16c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(652215);
  function r(e) {
    return (
      (e.type === i.$pd.LISTENING || e.type === i.$pd.WATCHING) &&
      e.timestamps?.start != null &&
      null != e.timestamps.end
    );
  }
}
