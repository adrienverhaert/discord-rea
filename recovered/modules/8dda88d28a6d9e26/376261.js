/* Recovered shipped factory. Module 376261.
 * Source: recovered/web/assets/8dda88d28a6d9e26.js
 * UTF-16 property offsets: 95..429
 * Raw property SHA-256: 3b4ca25309632a2fb8bdb7b467ce46c9b035e05217bf4f1f63b895565787083e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, u, r) {
  r.d(u, { T: () => i });
  var t = r(17928),
    s = r(498642);
  r(424994);
  var a = r(652215);
  function i(e) {
    return (0, t.bG)([s.A], () => {
      if (null == e) return;
      let u = s.A.getMemberCount(e.id),
        r = e.features.has(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER),
        t = e.features.has(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER);
      return r || t ? r : null != u && u < 1e4;
    });
  }
}
