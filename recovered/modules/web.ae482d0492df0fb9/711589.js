/* Recovered shipped factory. Module 711589.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4998162..4999201
 * Raw property SHA-256: eeb373cf9a05098d11d55fa87bd3fbade8c9366e7a24586f4d0e36fdc125ceee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => c });
  var i = n(17928),
    r = n(616356),
    a = n(280450),
    s = n(734057),
    l = n(279250),
    o = n(652215),
    d = n(660183);
  function c(e) {
    let t = e?.channelId,
      n = (0, i.bG)([s.A], () => s.A.getChannel(t), [t]),
      [c, u] = (0, l.zP)(n),
      { activeStream: _, isOwnStream: E } = (0, i.cf)(
        [r.A, a.default],
        () => ({
          activeStream: r.A.getActiveStreamForApplicationStream(e),
          isOwnStream: null != e && e.ownerId === a.default.getId(),
        }),
        [e],
      ),
      A = null != _ && _.state !== o.XYD.ENDED;
    return {
      ...(function (e, t, n) {
        let i =
          null != n
            ? (function (e) {
                switch (e) {
                  case l.OT.REMOTE_MODE:
                    return d.intl.string(d.t["1i3tSY"]);
                  case l.OT.CHANNEL_FULL:
                    return d.intl.string(d.t.elyVbv);
                  case l.OT.NO_PERMISSION:
                    return d.intl.string(d.t.pgUTZC);
                  case l.OT.AGE_RESTRICTED:
                    return d.intl.string(d.t.b5FqhF);
                }
              })(n)
            : null;
        if (e || t) {
          let t = e ? d.intl.string(d.t.XvBdeT) : d.intl.string(d.t["JH1SJ+"]);
          return { actionString: t, actionAriaLabel: null != i ? `${t}: ${i}` : `${t}` };
        }
        let r = d.intl.string(d.t["7Xq/nV"]);
        return {
          actionString: i ?? r,
          actionAriaLabel: `${r}: ${i ?? d.intl.string(d.t["9C444m"])}`,
        };
      })(E, A, u),
      canWatch: c,
      isWatching: A,
      channel: n,
    };
  }
}
