/* Recovered shipped factory. Module 534400.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5432972..5435652
 * Raw property SHA-256: 94027a7b64efe5abbb0803b4fff5262d25b7ce1e4a54a5a4fa6c83412d0a6249
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => N, Cw: () => g, Z9: () => p, o9: () => m });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(939249),
    u = n(517905),
    _ = n(287809),
    E = n(685073),
    A = n(743981),
    h = n(660183),
    f = n(893845),
    I = n(830840);
  let p = r.memo(function (e) {
      let { src: t, className: n, size: a = A.Sl.SIZE_16 } = e,
        [l, o] = r.useState(!1);
      return null == t || l
        ? (0, i.jsx)("span", { className: s()(I.HH, n) })
        : (0, i.jsx)("img", {
            src: t,
            alt: "",
            className: s()(I.qS, n),
            width: a,
            height: a,
            onError: () => o(!0),
          });
    }),
    T = r.memo(function (e) {
      let { guildTag: t, className: n, textClassName: r, badgeClassName: a, ...l } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsxs)("span", {
            className: I.fl,
            "aria-hidden": "true",
            children: [
              "\xa0",
              h.intl.formatToPlainString(f.default["4cGHIl"], { tag: t }),
              ",\xa0",
            ],
          }),
          (0, i.jsx)(m, {
            guildTag: t,
            className: s()(n, I.sM),
            textClassName: s()(r, I.Lo),
            badgeClassName: s()(a, I.VD),
            ...l,
          }),
        ],
      });
    }),
    m = r.memo(function (e) {
      let {
          guildId: t,
          guildTag: n,
          guildBadge: r,
          className: a,
          textClassName: l,
          badgeClassName: u,
          onClick: _,
          onMouseDown: T,
          onMouseEnter: m,
          onKeyDown: g,
          "aria-controls": S,
          "aria-expanded": N,
          textVariant: C = "text-xs/semibold",
          textColor: O = "text-default",
          badgeSize: R = A.Sl.SIZE_14,
          inline: L = !0,
        } = e,
        y = null != _,
        D = (0, i.jsxs)(o.E, {
          tag: "span",
          variant: C,
          lineClamp: 1,
          color: O,
          className: s()(I.Qq, l),
          children: [
            null != r && "string" == typeof r
              ? (0, i.jsx)(
                  p,
                  { src: (0, E.gC)(t, r, R), size: R, className: u },
                  (0, E.gC)(t, r, R) ?? t,
                )
              : r,
            (0, i.jsx)(d.A, {
              tag: "span",
              children: h.intl.formatToPlainString(f.default["fw2p/x"], { tag: n }),
            }),
            (0, i.jsx)("span", { className: I.em, "aria-hidden": "true", children: n }),
          ],
        }),
        v = s()(I.nz, L && I.os, a);
      return y
        ? (0, i.jsx)(c.D, {
            tag: "span",
            onClick: _,
            onMouseDown: T,
            onMouseEnter: m,
            onKeyDown: g,
            "aria-controls": S,
            "aria-expanded": N,
            className: s()(v, I.vk),
            children: D,
          })
        : (0, i.jsx)("span", { className: v, children: D });
    }),
    g = r.memo(function (e) {
      return (0, i.jsx)(S, { Component: T, ...e });
    }),
    S = r.memo(function (e) {
      let {
          primaryGuild: t,
          userId: n,
          contextGuildId: a,
          className: o,
          containerClassName: d,
          textVariant: c,
          textColor: A,
          badgeSize: h,
          disableGuildProfile: f = !1,
          inline: p = !0,
          onShowProfile: T,
          onClose: g,
          Component: S = m,
        } = e,
        N = r.useRef(null),
        C = (0, l.bG)([_.default], () => _.default.getUser(n), [n]),
        O = void 0 !== t ? t : C?.primaryGuild,
        { tag: R, badge: L, guildId: y } = (0, E.Zo)(O);
      return (0, E.Wb)(n, a, O) && null != y
        ? f
          ? (0, i.jsx)(S, {
              guildId: y,
              guildTag: R,
              guildBadge: L,
              className: s()(I.Zy, o, d),
              textVariant: c,
              textColor: A,
              badgeSize: h,
              inline: p,
            })
          : (0, i.jsx)(u.A, {
              guildId: y,
              onRequestOpen: T,
              onClose: g,
              targetElementRef: N,
              clickTrap: !1,
              children: (e) =>
                (0, i.jsx)("span", {
                  className: d,
                  ref: N,
                  onClick: (e) => e.stopPropagation(),
                  children: (0, i.jsx)(S, {
                    guildId: y,
                    guildTag: R,
                    guildBadge: L,
                    className: o,
                    textVariant: c,
                    textColor: A,
                    badgeSize: h,
                    inline: p,
                    ...e,
                  }),
                }),
            })
        : null;
    }),
    N = r.memo(function (e) {
      return (0, i.jsx)(S, { Component: m, ...e });
    });
}
