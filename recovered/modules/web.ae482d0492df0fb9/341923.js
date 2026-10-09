/* Recovered shipped factory. Module 341923.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3597990..3599145
 * Raw property SHA-256: e01cbfec314d92aaf57190588bf675e4992ad96c55f44506d65c025db5bcb3e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { GZ: () => A, HN: () => _, jJ: () => E, s$: () => u });
  var i = n(17928),
    r = n(507868),
    a = n(974293),
    s = n(240899),
    l = n(458977),
    o = n(399091),
    d = n(526233),
    c = n(415281);
  function u() {
    let e = (0, a.$i)("isAutoClipsAvailable"),
      t = l.A.getConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
      n = d.A.getConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
      i = s.A.getConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi,
      r = o.A.getConfig({ location: "isAutoClipsAvailable" }).enableDotaGsi,
      u = c.A.getConfig({ location: "isAutoClipsAvailable" }).enableRocketLeagueEvents;
    return e || t || n || i || r || u;
  }
  function _() {
    let e = (0, a.aJ)("useIsAutoClipsAvailable"),
      t = l.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
      n = d.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents,
      i = s.A.useConfig({ location: "isAutoClipsAvailable" }).enableCs2Gsi,
      r = o.A.useConfig({ location: "isAutoClipsAvailable" }).enableDotaGsi,
      u = c.A.useConfig({ location: "isAutoClipsAvailable" }).enableRocketLeagueEvents;
    return e || t || n || i || r || u;
  }
  function E(e) {
    return u() && r.A.isGameAllowed(e);
  }
  function A(e) {
    let t = _(),
      n = (0, i.bG)([r.A], () => r.A.isGameAllowed(e), [e]);
    return t && n;
  }
}
