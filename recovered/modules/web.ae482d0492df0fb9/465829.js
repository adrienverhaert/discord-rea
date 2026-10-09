/* Recovered shipped factory. Module 465829.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8069951..8073202
 * Raw property SHA-256: daa2ecaff092baeee3f622a2838589bc037997a12d7d6bc79ff92fe9da49ca42
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => L, Ce: () => O, c$: () => S, gU: () => g, n2: () => C });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(834730),
    l = n(939249),
    o = n(140735),
    d = n(866665),
    c = n(297413),
    u = n(296948),
    _ = n(709066),
    E = n(609425),
    A = n(922301),
    h = n(660184),
    f = n(534400),
    I = n(436921),
    p = n(518477),
    T = n(660183),
    m = n(956495);
  let g = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
  function S(e) {
    let {
        user: t,
        guildId: n,
        displayName: r,
        size: l = "sm",
        pendingDisplayNameStyles: o,
        shouldUnderlineOnHover: d = !1,
        displayNameTrailing: c,
        className: u,
      } = e,
      _ = (0, E.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
      f = g[l];
    return null != _
      ? (0, i.jsx)(s.E, {
          variant: f,
          className: u,
          children: (0, i.jsx)(h.A, {
            userName: r,
            displayNameStyles: _,
            effectDisplayType: A.G.ANIMATED,
            textClassName: m.QC,
            shouldWrap: !0,
            loop: !0,
            inProfile: !0,
            shouldUnderlineOnHover: d,
            appendedInlineContent:
              null != c ? (0, i.jsxs)(i.Fragment, { children: [" ", c] }) : null,
          }),
        })
      : (0, i.jsxs)(s.E, { className: a()(m.QC, m.O2, u), variant: f, children: [r, " ", c] });
  }
  function N(e) {
    let {
        user: t,
        guildId: n,
        displayName: r,
        trailing: s,
        size: o = "sm",
        pendingDisplayNameStyles: d,
        onClickDisplayName: c,
      } = e,
      E = (0, u.r)(t),
      A =
        null != E
          ? (0, i.jsx)(_.A, { type: E, verified: t.isVerifiedBot(), className: m.AO })
          : null,
      h = (0, i.jsx)(S, {
        user: t,
        guildId: n,
        displayName: r,
        size: o,
        pendingDisplayNameStyles: d,
        shouldUnderlineOnHover: null != c,
        displayNameTrailing: A,
      });
    return (0, i.jsxs)("div", {
      className: a()(m.K$, "lg" === o && m.lg),
      children: [
        null != c ? (0, i.jsx)(l.D, { onClick: c, className: m.vk, children: h }) : h,
        null != s && !1 !== s && (0, i.jsx)("div", { className: m.MU, children: s }),
      ],
    });
  }
  function C(e) {
    let { pronouns: t, className: n } = e;
    return (0, i.jsxs)(s.E, {
      className: a()(m.hI, n),
      variant: "text-sm/medium",
      color: "text-strong",
      children: [
        (0, i.jsx)(o.A, {
          tag: "span",
          children: T.intl.formatToPlainString(T.t["DRI+T7"], { pronouns: t }),
        }),
        (0, i.jsx)("span", { "aria-hidden": "true", children: t }),
      ],
    });
  }
  function O() {
    return (0, i.jsx)("div", { "aria-hidden": "true", className: m.SC });
  }
  function R(e) {
    let {
        user: t,
        usernameIcon: n,
        onClickUsername: r,
        pronouns: s,
        primaryGuild: o,
        contextGuildId: _,
        trailing: E,
        onClose: A,
      } = e,
      h = (0, I.j)({ location: "UserProfileUserInfo" }),
      g = null != s && s.length > 0,
      S = (0, u.r)(t),
      N = t.isProvisional
        ? null
        : (0, i.jsx)(c.A, {
            user: t,
            usernameIcon: n,
            forceUsername: !0,
            className: m.a1,
            usernameClass: m.eb,
            discriminatorClass: m.sw,
            hideBotTag: !0,
          });
    return (0, i.jsxs)("div", {
      className: a()(m.AK, { [m.j6]: g, [m.w2]: null != S }),
      children: [
        null != N && null != r
          ? (0, i.jsx)(l.D, { onClick: r, className: a()(m.qp, m.vk), children: N })
          : N,
        g &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(O, {}),
              (0, i.jsx)(d.m, {
                text: T.intl.string(T.t.GI2A8C),
                delay: p.In,
                ariaHidden: !0,
                children: (0, i.jsx)("span", {
                  className: m.Ez,
                  children: (0, i.jsx)(C, { pronouns: s }),
                }),
              }),
            ],
          }),
        (0, i.jsx)(f.Ay, {
          primaryGuild: o,
          userId: t.id,
          contextGuildId: _,
          onClose: A,
          textVariant: h ? "text-xs/normal" : "text-xs/semibold",
          className: h ? m.Bb : m.Mp,
        }),
        E,
      ],
    });
  }
  function L(e) {
    let {
      user: t,
      guildId: n,
      className: r,
      onClickName: a,
      displayName: s,
      displayNameSize: l,
      pendingDisplayNameStyles: o,
      displayNameTrailing: d,
      usernameIcon: c,
      pronouns: u,
      primaryGuild: _,
      contextGuildId: E,
      trailing: A,
      onClose: h,
    } = e;
    return (0, i.jsxs)("div", {
      className: r,
      children: [
        (0, i.jsx)(N, {
          user: t,
          guildId: n,
          displayName: s,
          size: l,
          pendingDisplayNameStyles: o,
          onClickDisplayName: a,
          trailing: d,
        }),
        (0, i.jsx)(R, {
          user: t,
          usernameIcon: c,
          pronouns: u,
          primaryGuild: _,
          contextGuildId: E,
          onClickUsername: a,
          onClose: h,
          trailing: A,
        }),
      ],
    });
  }
}
