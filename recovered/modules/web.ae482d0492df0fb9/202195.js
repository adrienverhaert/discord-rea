/* Recovered shipped factory. Module 202195.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4009818..4010613
 * Raw property SHA-256: 3bf8c00bdb7c99cb00ef0333020ca23ad2fb5a9c4f98cec672afbe4a617ec062
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(6161),
    a = n(890615),
    s = n(450149),
    l = n(616356),
    o = n(734057),
    d = n(576705),
    c = n(290863),
    u = n(977997),
    _ = n(583846);
  function E(e) {
    let t = (0, _.JM)(e),
      n = (0, i.bG)(
        [u.A, o.A, d.A],
        () => {
          if (!t || e.author_type !== r.ContentInventoryAuthorType.USER) return null;
          let n = u.A.getVoiceStateForUser(e.author_id),
            i = o.A.getChannel(n?.channelId),
            s = "channel_id" in e ? e.channel_id : null;
          return (null == s || s === n?.channelId) && (null == i || (0, a.A)(i, d.A)) ? i : null;
        },
        [e, t],
      ),
      E = (0, i.bG)(
        [c.A],
        () => (null != t ? c.A.getPrimaryActivity(e.author_id, n?.guild_id) : null),
        [n, e.author_id, t],
      ),
      A = (0, i.bG)([l.A], () => (t ? l.A.getStreamForUser(e.author_id, n?.guild_id) : null), [
        n,
        e.author_id,
        t,
      ]),
      { previewUrl: h } = (0, s.A)(A?.guildId, A?.channelId, A?.ownerId);
    return { channel: n, activity: E, streamPreviewUrl: h, stream: A };
  }
}
