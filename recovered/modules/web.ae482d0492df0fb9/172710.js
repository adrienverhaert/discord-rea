/* Recovered shipped factory. Module 172710.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7609215..7610253
 * Raw property SHA-256: dfcc392a5fd4675e6fb2c000b596631d66442482e5b1fbf0e59883d25018b89e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Mp: () => d, Pt: () => o, QX: () => c, mN: () => u });
  var i = n(723702),
    r = n(210528),
    a = n(981616),
    s = n(272984);
  function l(e, t, n) {
    let l;
    ((0, i.isDesktop)() || (l = window.open("", "_blank")),
      (0, a.getSpotifyMetadataFromActivity)(e, t)
        .then((e) => n(e))
        .then((e) => {
          let { resourceType: t, resourceId: n } = e,
            i = r.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(t, n) : s.RQ.WEB_OPEN(t, n);
          null != l ? (l.location.href = i) : window.open(i);
        })
        .catch(() => {
          null != l && l.close();
        }));
  }
  function o() {
    window.open(s.RQ.PREMIUM_SITE);
  }
  function d(e) {
    let { sync_id: t, metadata: n } = e;
    if (null == t) return;
    let i = (0, s.NJ)(n?.type ?? s.M0.TRACK);
    if (null == i) return;
    let a = r.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(i, t) : s.RQ.WEB_OPEN(i, t);
    window.open(a);
  }
  function c(e, t) {
    l(e, t, (t) => {
      let { album_id: n } = t;
      return {
        resourceType: (0, s.NJ)(e.metadata?.type) === s.M0.EPISODE ? s.M0.SHOW : s.M0.ALBUM,
        resourceId: n,
      };
    });
  }
  function u(e, t, n) {
    l(e, t, (e) => {
      let { artist_ids: t } = e;
      if (null == t) throw Error("no artist ids in metadata");
      let i = t[n];
      if (null == i) throw Error("invalid artist index");
      return { resourceType: s.M0.ARTIST, resourceId: i };
    });
  }
}
