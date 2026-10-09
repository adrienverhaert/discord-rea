/* Recovered shipped factory. Module 963555.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7430185..7430446
 * Raw property SHA-256: 67ebf0dff09e1dabb5fb908783eedd82149ff62d4c26341411f9214cac19a42a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => a });
  var i = n(17928),
    r = n(349435);
  function a(e, t) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e])
      .filter((e) => e.type === t)
      .find(
        (e) =>
          null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()),
      );
  }
}
