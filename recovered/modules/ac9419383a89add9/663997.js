/* Recovered shipped factory. Module 663997.
 * Source: recovered/web/assets/ac9419383a89add9.js
 * UTF-16 property offsets: 95..1108
 * Raw property SHA-256: f458c022b31134de48164c8f6c1b28bd88f0629764f2f93099aa310157cec3fe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { K: () => a, L: () => c });
  var n = r(582128),
    u = r(913122),
    l = r(935208),
    i = r(624458),
    s = r(513461);
  let c = 100;
  function a(e) {
    let { guildId: t, guildJoinRequests: r } = e,
      a = n.useRef(!1),
      [f, o] = n.useState(null),
      d = n.useRef(null),
      h = n.useRef(!1);
    return {
      fetchNextPage: n.useCallback(
        async (e, n) => {
          if (a.current) return;
          let g = `${e}-${n}`,
            p = !1;
          if ((g !== d.current && ((d.current = g), (h.current = !1), (p = !0)), h.current)) return;
          null != f && o(null);
          let b = (function (e, t, r, n, u) {
            let i = n === s.B5.SUBMITTED;
            if (r === s._e.TIMESTAMP_DESC)
              if (u || 0 === t.length)
                return { before: l.default.fromTimestamp(new Date().getTime()) };
              else {
                let e = t[t.length - 1];
                return { before: i ? e.joinRequestId : e.actionedAt };
              }
            {
              if (u || 0 === t.length) return { after: e };
              let r = t[t.length - 1];
              return { after: i ? r.joinRequestId : r.actionedAt };
            }
          })(t, r, e, n, p);
          try {
            a.current = !0;
            let e = await i.A.fetchGuildJoinRequests({
              guildId: t,
              status: n,
              limit: c,
              force: !0,
              ...b,
            });
            if (null != e) {
              let { guild_join_requests: t } = e.body;
              t.length < c && (h.current = !0);
            }
          } catch (e) {
            o(new u.LG(e).getAnyErrorMessage());
          } finally {
            a.current = !1;
          }
        },
        [f, t, r],
      ),
      error: f,
    };
  }
}
