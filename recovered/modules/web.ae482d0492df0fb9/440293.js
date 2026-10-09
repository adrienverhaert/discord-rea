/* Recovered shipped factory. Module 440293.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5242444..5242895
 * Raw property SHA-256: cabfa2b59be533b020149425ffc66e9c8e8db0959806da0ace890edc84b050e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => l, w: () => s });
  var i = n(17928),
    r = n(71393),
    a = n(652215);
  function s(e) {
    return (0, i.bG)(
      [r.A],
      () => {
        if (null == e) return !1;
        let t = r.A.getGuild(e);
        return (
          null != t &&
          (t.features.has(a.GuildFeatures.COMMUNITY) ||
            t.features.has(a.GuildFeatures.GUILD_PRODUCTS))
        );
      },
      [e],
    );
  }
  function l(e) {
    if (null == e) return !1;
    let t = r.A.getGuild(e);
    return (
      null != t &&
      (t.features.has(a.GuildFeatures.COMMUNITY) || t.features.has(a.GuildFeatures.GUILD_PRODUCTS))
    );
  }
}
