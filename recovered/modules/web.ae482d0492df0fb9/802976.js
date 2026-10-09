/* Recovered shipped factory. Module 802976.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3728286..3729748
 * Raw property SHA-256: 6a6774b5c02d004a9292c3d1a5771e4f55f9e684bf6046eb6dccc1c45734972f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(582128),
    r = n(17928),
    a = n(232835),
    s = n(403362),
    l = n(998218),
    o = n(915725),
    d = n(458977),
    c = n(110742);
  function u(e) {
    let { attachment: t, messageId: n, channelId: u, guildId: _ } = e,
      E = (0, r.bG)([a.A], () => (null != u && null != n ? a.A.getMessage(u, n) : void 0), [u, n]),
      A = i.useMemo(() => (0, c.Vi)(t), [t]),
      { enableDistributedClips: h } = d.A.useConfig({ location: "useMultiSourceConfig" }),
      f = (0, r.bG)([o.Ay], () => o.Ay.getMatchingPOVReferences(t.id), [t.id]),
      I = (0, r.yK)([a.A], () =>
        f
          .map((e) => a.A.getMessage(e.channelId, e.messageId))
          .filter(s.Vq)
          .sort((e, t) => e.id.localeCompare(t.id))
          .slice(0, 3),
      );
    return i.useMemo(() => {
      if (0 === f.length || !h) return;
      let e = l.A.toURLSafe(t.proxy_url ?? t.url);
      return (
        e?.searchParams.append("format", "webp"),
        {
          original: {
            id: t.id,
            url: t.url,
            durationSec: t.duration_secs,
            startSec: 0,
            poster: e?.toString(),
            label: t.title,
            owner: {
              avatarUrl: E?.author?.getAvatarURL(_, 48) ?? "",
              name: E?.author?.username ?? "",
            },
          },
          subSources: f.flatMap((e) => {
            if (null == A) return [];
            let t = I.find((t) => t.id === e.messageId && t.channel_id === e.channelId);
            if (null == t) return [];
            let n = t.attachments.find((t) => t.id === e.attachmentId);
            if (null == n) return [];
            let i = l.A.toURLSafe(n.proxy_url);
            return (
              i?.searchParams.append("format", "webp"),
              {
                id: n.id,
                url: n.url,
                durationSec: e.endTimestamp / 1e3 - e.startTimestamp / 1e3,
                startSec: e.startTimestamp / 1e3 - A.startTimestamp / 1e3,
                poster: i?.toString(),
                label: n.title,
                owner: { avatarUrl: t.author.getAvatarURL(_, 48), name: t.author.username },
              }
            );
          }),
          activeSourceId: t.id,
        }
      );
    }, [f, t, _, I, E, A, h]);
  }
}
