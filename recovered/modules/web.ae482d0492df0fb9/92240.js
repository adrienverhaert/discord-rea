/* Recovered shipped factory. Module 92240.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7983115..7983684
 * Raw property SHA-256: 61f25252621c99944fc84375a8c53743e534571ecbc997a64e16e80678529806
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(688810),
    s = n(517164),
    l = n(183555),
    o = n(47675);
  function d(e) {
    let {
        user: t,
        display: n,
        activity: d,
        entry: c,
        stream: u,
        voiceChannelId: _,
        analyticsLocations: E,
      } = e,
      { context: A, trackUserProfileAction: h } = (0, l.NJ)(),
      { analyticsLocations: f } = (0, a.Ay)(),
      I = E ?? f,
      p = (0, r.bG)([s.A], () => s.A.getUserOutbox(t.id));
    return (0, i.useCallback)(
      (e) => {
        let { action: t } = e;
        (h({ action: t, analyticsLocations: I }),
          (0, o.Tu)({
            action: t,
            display: n,
            activity: d,
            entry: c,
            stream: u,
            outbox: p,
            voiceChannelId: _,
            analyticsLocations: I,
            ...A,
          }));
      },
      [h, A, n, d, u, c, p, _, I],
    );
  }
}
