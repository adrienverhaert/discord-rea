/* Recovered shipped factory. Module 297413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 739867..741846
 * Raw property SHA-256: 538d8098b52c8386998ef71d25991dea15a05077b153f57708f6f96fcbc62950
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(866665),
    o = n(709066),
    d = n(824994),
    c = n(922301),
    u = n(660184),
    _ = n(534400),
    E = n(436921),
    A = n(270574),
    h = n(351906),
    f = n(427262),
    I = n(660183),
    p = n(386151);
  function T(e) {
    let { user: t } = e,
      n = (0, E.j)({ location: "DiscordTag" });
    return (0, i.jsx)(_.Ay, {
      primaryGuild: t.primaryGuild,
      userId: t.id,
      inline: !1,
      disableGuildProfile: !0,
      className: a()(p.Mp, !n && p.iP),
    });
  }
  function m(e) {
    let {
        primary: t,
        secondary: n,
        guildTag: r,
        botType: s,
        botVerified: c,
        discriminatorClass: _,
        className: E,
        usernameClass: A,
        botClass: h,
        showStreamerModeTooltip: f,
        displayNameStyles: T,
        displayNameStylesType: m,
      } = e,
      g = (0, d.W)({ location: "DiscordTag" }),
      S = (0, i.jsx)("span", {
        className: a()(p.__invalid_username, A),
        children:
          null != T
            ? (0, i.jsx)(u.A, { userName: t, displayNameStyles: T, effectDisplayType: m })
            : t,
      });
    return (0, i.jsxs)("div", {
      className: a()(p.pq, { [p.e8]: g && null != T }, E),
      children: [
        f ? (0, i.jsx)(l.m, { text: I.intl.string(I.t.Br1ls3), children: S }) : S,
        r,
        null != n ? (0, i.jsx)("span", { className: a()(p.ok, _), children: n }) : void 0,
        null != s && (0, i.jsx)(o.A, { type: s, className: a()(p.ok, h), verified: c }),
      ],
    });
  }
  let g = function (e) {
    let {
        user: t,
        nick: n,
        forceUsername: r,
        showGuildTag: a = !1,
        showAccountIdentifier: l,
        overrideDiscriminator: o,
        hideBotTag: d = !1,
        hideDiscriminator: u = !1,
        displayNameStylesType: _ = c.G.PLAIN,
        ...E
      } = e,
      I = (0, s.bG)([h.A], () => h.A.hidePersonalInformation),
      p = I || u || t.isNonUserBot(),
      g = t.toString(),
      S = d ? null : t.isSystemUser() ? A.v.SYSTEM_DM : t.bot ? A.v.BOT : null,
      N = t.isVerifiedBot(),
      C = f.Ay.getName(t),
      O = r ? g : (n ?? C),
      R = t.hasUniqueUsername(),
      L = a ? (0, i.jsx)(T, { user: t }) : null;
    if (R || O !== g) {
      let e = O === g && R && r ? f.Ay.getUserTag(t) : O,
        n = l && e !== `@${g}` ? f.Ay.getUserTag(t) : void 0;
      return (0, i.jsx)(m, {
        primary: e,
        secondary: n,
        guildTag: L,
        botType: S,
        botVerified: N,
        showStreamerModeTooltip: I && f.Ay.isNameConcealed(e),
        displayNameStyles: O !== g ? t.displayNameStyles : null,
        displayNameStylesType: _,
        ...E,
      });
    }
    return (0, i.jsx)(A.A, {
      name: O,
      guildTag: L,
      botType: S,
      botVerified: N,
      discriminator: p || O !== g ? null : (o ?? t.discriminator),
      ...E,
    });
  };
}
