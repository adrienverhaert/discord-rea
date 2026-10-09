/* Recovered shipped factory. Module 160768.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7625491..7626015
 * Raw property SHA-256: 73ab9df2f3123250b10b43dae8e1b68a8c81cc8c0a743d29c6d52486be5da764
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(272984),
    r = n(660183);
  function a(e, t) {
    switch (t) {
      case i.Qp.USER_ACTIVITY_PLAY:
        return e.hasSpotifyAccount
          ? r.intl.formatToPlainString(r.t.LEgD7t, { platform: i.HD })
          : r.intl.formatToPlainString(r.t.XWSHTb, { platform: i.HD });
      case i.Qp.EMBED_SYNC:
        if (!e.hasSpotifyAccount) return r.intl.formatToPlainString(r.t.XWSHTb, { platform: i.HD });
        if (e.syncingWithUser || e.syncingWithParty) return r.intl.string(r.t.KC26NR);
        return r.intl.string(r.t.VJlc0S);
      case i.Qp.USER_ACTIVITY_SYNC:
      default:
        return;
    }
  }
}
