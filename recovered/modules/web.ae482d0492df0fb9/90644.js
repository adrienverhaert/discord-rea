/* Recovered shipped factory. Module 90644.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2660925..2661157
 * Raw property SHA-256: 5b5fe25a66cf840e01a263f4605b6cd5e646d65265b1e4ca3af9f493661513f3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(573648),
    r = n(652215),
    a = n(272984);
  function s(e) {
    return (
      null != e &&
      e.type === r.$pd.LISTENING &&
      e.name === i.A.get(r.fg2.SPOTIFY).name &&
      null != e.party &&
      null != e.party.id &&
      (0, a.pH)(e.party.id)
    );
  }
}
