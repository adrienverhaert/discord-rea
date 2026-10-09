/* Recovered shipped factory. Module 125017.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2658885..2659106
 * Raw property SHA-256: 6265cbb4985728d5e314aa2c20f226fdbb4980767bfc65ac5dfdeca57e9d3b54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2)
      return { partySize: -1, maxPartySize: -1 };
    let [t, n] = e.party.size;
    return { partySize: t, maxPartySize: n };
  }
  n.d(t, { _: () => i });
}
