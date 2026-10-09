/* Recovered shipped factory. Module 564973.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3734933..3735556
 * Raw property SHA-256: 88c5aedb5ea1c2434e7a92d7d93e563a2187e8df8eb791f188fe720882f4dd51
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => A });
  var i = n(158390),
    r = n(17928),
    a = n(636537),
    s = n(73153),
    l = n(927813),
    o = n(507868),
    d = n(652215);
  let c = 10 * l.A.Millis.SECOND,
    u = 10 * l.A.Millis.MINUTE,
    _ = 0;
  async function E(e) {
    let t = _,
      n = await a.Bo.get({ url: d.Rsh.CLIPS_AUTOCLIPS_GAME_CAPABILITIES(e), rejectWithError: !0 });
    t === _ &&
      s.h.dispatch({
        type: "CLIPS_AUTOCLIPS_CAPABILITIES_UPDATE",
        gameId: e,
        capabilities: n.body.capabilities ?? 0,
      });
  }
  s.h.subscribe("LOGOUT", () => {
    _++;
  });
  let A = (0, r.UT)(o.A, {
    getQueryId: (e) => e,
    get: (e) => (o.A.getGameCapabilities().has(e) ? o.A.getCapabilities(e) : null),
    load: E,
    retryConfig: { backoff: () => new i.A(c, u) },
    staleAfter: l.A.Seconds.HOUR,
  });
}
