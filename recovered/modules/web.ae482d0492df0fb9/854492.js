/* Recovered shipped factory. Module 854492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5731772..5732581
 * Raw property SHA-256: b86c59a124cc617f97f1e6c2efcf08875336eaa62596cdf71f76ebc89fcd73c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, j: () => c });
  var i = n(636537),
    r = n(73153),
    a = n(763827),
    s = n(403362),
    l = n(857071),
    o = n(652215);
  async function d(e) {
    let t = l.A.lurkingGuildIds().filter((t) => !e.includes(t));
    if (0 === t.length) return;
    let n = new Map(t.map((e) => [e, l.A.getLurkingSourceForGuild(e)]));
    (r.h.dispatch({ type: "GUILD_STOP_LURKING", ignoredGuildIds: e }),
      await Promise.all(
        t.map(async (e) => {
          let t = n.get(e) ?? null;
          try {
            await i.Bo.del({
              url: o.Rsh.GUILD_LEAVE(e),
              body: { lurking: !0 },
              oldFormErrors: !0,
              rejectWithError: !0,
            });
          } catch (n) {
            r.h.dispatch({
              type: "GUILD_STOP_LURKING_FAILURE",
              lurkingGuildId: e,
              lurkingSource: t,
            });
          }
        }),
      ));
  }
  async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = l.A.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, a.A.getGuildId()].filter(s.Vq);
    await d(n);
  }
}
