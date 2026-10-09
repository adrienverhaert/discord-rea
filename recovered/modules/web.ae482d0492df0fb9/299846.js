/* Recovered shipped factory. Module 299846.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4007712..4008420
 * Raw property SHA-256: 09dc82a470d8c3074a7406c60c500524a83406e6e8429f50359589513400ad99
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => l });
  var i = n(17928),
    r = n(287809),
    a = n(20805),
    s = n(327098);
  function l(e) {
    let t = (0, i.bG)([r.default], () => r.default.getUser(e.author_id)),
      { activity: n, embeddedActivity: l } = (0, s.A)(e);
    if (null == n)
      return {
        isRich: !1,
        appName: (0, a.zD)(e) ? e.extra.game_name : void 0,
        user: t,
        activity: void 0,
        embeddedActivity: void 0,
        state: void 0,
        details: void 0,
        party: void 0,
      };
    let o = n.assets?.large_image != null || n.assets?.small_image != null,
      d = n.assets?.large_text != null || n.assets?.small_text != null,
      c = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
      u = n.details,
      _ = n.state,
      E = n.party;
    return {
      isRich: o || d || null != u || null != _ || null != E,
      user: t,
      activity: n,
      state: _,
      details: u,
      party: E,
      appName: c,
      embeddedActivity: l,
    };
  }
}
