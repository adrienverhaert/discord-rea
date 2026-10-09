/* Recovered shipped factory. Module 639060.
 * Source: recovered/web/assets/24d1f80c2b90f3a2.js
 * UTF-16 property offsets: 4684..5277
 * Raw property SHA-256: 7865340a984dd189c9575b1a1b52cadc83441c9e9e15ae8ceec97c5d2a57ff3e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => E });
  var l = n(512750),
    u = n(17928),
    r = n(554146),
    i = n(645619),
    o = n(939981),
    s = n(456124),
    A = n(356863),
    _ = n(660183);
  function E(e, t) {
    let n = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
      E = n?.allPowerups[l.d0];
    return (0, s.E)(e, t)
      ? (function (e) {
          let t = e?.storeRemovalDate;
          if (null == e || null == t) return null;
          let n = (0, o.A)(t);
          return {
            dismissibleContent: r.M.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION,
            title: _.intl.formatToPlainString(A.default["6e2ry1"], { dateString: n }),
            description: _.intl.formatToPlainString(A.default.jd8fki, {
              startDate: n,
              endDate: n,
              perkName: e.title,
              boostCount: e.cost,
            }),
          };
        })(E)
      : null;
  }
}
