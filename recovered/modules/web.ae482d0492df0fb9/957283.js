/* Recovered shipped factory. Module 957283.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5932098..5932401
 * Raw property SHA-256: 3331354cbc79aac9c3b28e0d09dc741e7683b1ecf274b3bdcd0b53b92438a467
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => s });
  var i = n(17928),
    r = n(940382),
    a = n(761640);
  function s() {
    let e = (0, i.bG)([a.Ay], () => a.Ay.getSidebarState(a.fe)),
      t = e?.type === r.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
      channelId: t?.channelId,
      hasSingleMessageRequest: t?.details != null && t.details.hasSingleMessageRequest,
    };
  }
}
