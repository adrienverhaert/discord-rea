/* Recovered shipped factory. Module 550946.
 * Source: recovered/web/assets/abb4f309f9866fd6.js
 * UTF-16 property offsets: 94..404
 * Raw property SHA-256: f44be05e445a1f77717fcfc98899b7a52fcf661e9055b971993e2b7582d1dce9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => a, t: () => i });
  var u = t(17928),
    l = t(696451),
    r = t(71393),
    s = t(652215);
  function c(e, n, t, u) {
    return (
      t.getGuild(e)?.features.has(s.GuildFeatures.CONFERENCE) !== !0 && u.isGuestOrLurker(e, n)
    );
  }
  function i(e, n) {
    return c(e, n, r.A, l.Ay);
  }
  function a(e, n) {
    return (0, u.bG)([r.A, l.Ay], () => c(e, n, r.A, l.Ay), [e, n]);
  }
}
