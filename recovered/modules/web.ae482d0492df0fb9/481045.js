/* Recovered shipped factory. Module 481045.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2704798..2705714
 * Raw property SHA-256: e6dac2a1260dbe1a1ad0a5117bd383e5fb9a00d73cbacc59d57e5a9831d88065
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L7: () => T, qA: () => g });
  var i = n(477900),
    r = n(17928),
    a = n(939249),
    s = n(320448),
    l = n(661531),
    o = n(834730),
    d = n(885386),
    c = n(780964),
    u = n(766075),
    _ = n(711014),
    E = n(115063),
    A = n(365258),
    h = n(926418),
    f = n(968987),
    I = n(660183),
    p = n(599583);
  function T() {
    (0, u.openUserSettings)(c.X.ACTIVITY_PRIVACY_PANEL);
  }
  function m(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(a.D, {
      className: p.E1,
      onClick: n,
      children: [
        (0, i.jsx)("div", { className: p.j3, children: t }),
        (0, i.jsx)(s._, { color: l.A.colors.TEXT_SUBTLE, size: "xs" }),
      ],
    });
  }
  function g(e) {
    let { onClosePopout: t } = e,
      n = d.tz.useSetting(),
      a = (0, r.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
      s = (0, E.Kk)(),
      l = a.filter((e) => !s.has(e)),
      c = (0, A.AB)(l);
    return 0 === a.length
      ? null
      : (0, i.jsxs)(m, {
          onClick: () => {
            (t(), T());
          },
          children: [
            (0, i.jsx)(o.E, {
              variant: "text-sm/semibold",
              children: I.intl.string(n ? f.default["3GrhnF"] : f.default["54ycKJ"]),
            }),
            (0, i.jsx)(h.l, { guildIds: c, prioritizeSelectedGuild: !0 }),
          ],
        });
  }
}
