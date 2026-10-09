/* Recovered shipped factory. Module 168447.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7432627..7432885
 * Raw property SHA-256: 1504bff8c8ebc2b55e4680a0d89c14dfe79082cda851cfad23dea00dbf7d5e72
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => a });
  var i = n(17928),
    r = n(349435);
  function a(e) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e]).filter(
      (e) =>
        e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
        e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_2,
    );
  }
}
