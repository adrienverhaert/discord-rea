/* Recovered shipped factory. Module 93246.
 * Source: recovered/web/assets/d80e63df56ff0488.js
 * UTF-16 property offsets: 95..1294
 * Raw property SHA-256: 6c4f4459bc77a21cf6ee550739949e1eede6fc380cd3e9698b99e39afd84d1fe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { Y: () => j, T: () => f });
  var r = i(477900),
    s = i(582128),
    n = i(834730),
    a = i(993077),
    l = i(297264),
    c = i(695366),
    d = i(102876),
    o = i(975571),
    u = i(17928),
    A = i(429913),
    m = i(800828),
    p = i(652215),
    x = i(660183),
    h = i(932658);
  function N(e) {
    return (0, r.jsx)(d.A, { application: e }, e.id);
  }
  function f(e) {
    let { userId: t, variant: i = "text-xs/normal", color: a = "text-default", ...l } = e,
      c = (function (e) {
        let t,
          { userId: i, renderApplicationName: r } = e,
          n =
            ((t = (0, u.bG)([m.A], () => {
              let e = m.A.getGameRelationshipsForUser(i);
              if (0 !== e.length) return e[0].applicationId;
            })),
            (0, A.h)(t));
        return s.useMemo(
          () =>
            null != n
              ? x.intl.format(x.t.rSUACb, {
                  helpdeskArticle: o.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                  applicationName: () => r(n),
                })
              : x.intl.format(x.t["q+N8L6"], {
                  helpdeskArticle: o.A.getArticleURL(p.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                }),
          [n, r],
        );
      })({ userId: t, renderApplicationName: N });
    return (0, r.jsx)(n.E, { variant: i, color: a, ...l, children: c });
  }
  function j(e) {
    let { userId: t } = e;
    return (0, r.jsxs)(a.Z, {
      className: h.ZO,
      children: [
        (0, r.jsxs)("div", {
          className: h.wx,
          children: [
            (0, r.jsx)(l.D, {
              variant: "text-md/semibold",
              color: "text-default",
              children: x.intl.string(x.t.Iyka0U),
            }),
            (0, r.jsx)(c.E, { size: "xs", className: h.Kk }),
          ],
        }),
        (0, r.jsx)(f, { userId: t, variant: "text-md/normal" }),
      ],
    });
  }
}
