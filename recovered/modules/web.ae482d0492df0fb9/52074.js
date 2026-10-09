/* Recovered shipped factory. Module 52074.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3211740..3211988
 * Raw property SHA-256: e10366397f6f0bfe5422a77199fabbace013c469acbe51248b9d018c38ab1562
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => s });
  var i = n(73153),
    r = n(595528),
    a = n(309698);
  function s(e) {
    a.A.hasRequestedStatuses(e) ||
      (i.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
      r.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]));
  }
}
