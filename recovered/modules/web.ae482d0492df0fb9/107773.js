/* Recovered shipped factory. Module 107773.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5069146..5076426
 * Raw property SHA-256: 159b32bd0cd5917b648bd8852755392ffc2766a36896ea63a5a20f0213c56391
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => k });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(661531),
    d = n(462887),
    c = n(306471),
    u = n(478016),
    _ = n(565787),
    E = n(332837),
    A = n(998445),
    h = n(834730),
    f = n(900002),
    I = n(939249),
    p = n(140735),
    T = n(404374),
    m = n(878678),
    g = n(814925),
    S = n(363195),
    N = n(696451),
    C = n(287809),
    O = n(816166),
    R = n(953727);
  function L(e) {
    let { width: t = 10, height: n = 10, color: r = "currentColor", ...a } = e;
    return (0, i.jsxs)("svg", {
      ...(0, R.A)(a),
      width: t,
      height: n,
      viewBox: "0 0 17 22",
      fill: r,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        (0, i.jsxs)("g", {
          filter: "url(#filter0_d_1296_1706)",
          children: [
            (0, i.jsx)("path", {
              opacity: "0.55",
              d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              opacity: "0.8",
              d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
              fill: "white",
            }),
          ],
        }),
        (0, i.jsx)("defs", {
          children: (0, i.jsxs)("filter", {
            id: "filter0_d_1296_1706",
            x: "-3.5",
            y: "-1",
            width: "24",
            height: "24",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              (0, i.jsx)("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              (0, i.jsx)("feOffset", { dy: "1" }),
              (0, i.jsx)("feGaussianBlur", { stdDeviation: "2" }),
              (0, i.jsx)("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
              }),
              (0, i.jsx)("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_1296_1706",
              }),
              (0, i.jsx)("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_1296_1706",
                result: "shape",
              }),
            ],
          }),
        }),
      ],
    });
  }
  var y = n(473145),
    D = n(426983),
    v = n(176128),
    b = n(660183);
  function M(e, t) {
    let n =
      t === v.qo.PUBLIC
        ? b.intl.string(b.t.op2cJ6)
        : t === v.qo.APPLY_TO_JOIN
          ? b.intl.string(b.t.YwZfbt)
          : b.intl.string(b.t.TME4LJ);
    switch (e) {
      case D._.STAFF:
        return {
          tooltipTitle: b.intl.string(b.t.lMrv96),
          tooltipSubtitle: b.intl.string(b.t.lMrv96),
          tooltipDescription: b.intl.string(b.t.lMrv96),
        };
      case D._.VERIFIED:
        return {
          tooltipTitle: b.intl.string(b.t.K7iRig),
          tooltipSubtitle: b.intl.string(b.t.iCehw9),
          tooltipDescription: n,
        };
      case D._.PARTNERED:
        return {
          tooltipTitle: b.intl.string(b.t.K7iRig),
          tooltipSubtitle: b.intl.string(b.t.hfYfEE),
          tooltipDescription: n,
        };
      case D._.VERIFIED_AND_PARTNERED:
        return {
          tooltipTitle: b.intl.string(b.t.K7iRig),
          tooltipSubtitle: b.intl.string(b.t["TX+iFC"]),
          tooltipDescription: n,
        };
      case D._.COMMUNITY:
        return { tooltipTitle: b.intl.string(b.t.K7iRig), tooltipDescription: n };
      case D._.DISCOVERABLE:
        return {
          tooltipTitle: b.intl.string(b.t.K7iRig),
          tooltipDescription: b.intl.string(b.t.op2cJ6),
        };
      default:
        return { tooltipTitle: b.intl.string(b.t["iZRkC/"]) };
    }
  }
  var P = n(652215),
    U = n(818357);
  let w = {
    [D._.STAFF]: {
      IconComponent: c.V,
      foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
      backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [D._.VERIFIED_AND_PARTNERED]: {
      IconComponent: u.U,
      foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
      backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [D._.VERIFIED]: {
      IconComponent: u.U,
      foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
      backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [D._.PARTNERED]: {
      IconComponent: (0, _.k)(O.A),
      foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.BRAND_500.css,
      backgroundLightColor: o.A.unsafe_rawColors.BRAND_500.css,
    },
    [D._.COMMUNITY]: {
      IconComponent: E.HomeIcon,
      foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
      premiumBackgroundColor: T.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
      premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
      sizeAdjustment: 2,
    },
    [D._.DISCOVERABLE]: {
      IconComponent: A.GlobeEarthIcon,
      foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
      foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
      backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
      premiumBackgroundColor: T.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
      premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
      sizeAdjustment: 2,
    },
    [D._.NONE]: {},
  };
  function G(e) {
    let { guildTraits: t } = e;
    return (0, i.jsxs)("div", {
      className: U.V8,
      children: [
        (0, i.jsxs)("div", {
          className: s()(U.f, U.N5),
          children: [
            (0, i.jsx)(L, { width: 18, height: 18, className: U.F8 }),
            (0, i.jsx)(h.E, {
              variant: "text-xs/semibold",
              color: "text-overlay-light",
              children: y.gb(t.premiumTier),
            }),
          ],
        }),
        (0, i.jsx)("div", {
          className: U.f,
          children: (0, i.jsx)(h.E, {
            variant: "text-xs/semibold",
            color: "text-overlay-light",
            children: b.intl.format(b.t["dR/SVH"], { count: t.premiumSubscriberCount }),
          }),
        }),
      ],
    });
  }
  function x(e) {
    let { badgeType: t, guildTraits: n } = e,
      { tooltipTitle: r, tooltipSubtitle: a, tooltipDescription: s } = M(t, n.visibility);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("div", {
          className: U.Rf,
          children: [
            (0, i.jsx)(h.E, {
              color: "interactive-text-active",
              variant: "text-xs/bold",
              children: r,
            }),
            null != a
              ? (0, i.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: a })
              : null,
            null != s
              ? (0, i.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: s })
              : null,
          ],
        }),
        n.premium ? (0, i.jsx)(G, { guildTraits: n }) : null,
      ],
    });
  }
  function k(e) {
    let t,
      n,
      {
        guild: a,
        tooltipColor: s = f.ST.Colors.BRAND,
        tooltipPosition: o,
        className: c,
        flowerStarClassName: u,
        iconClassName: _,
        badgeStrokeColor: E,
        badgeColor: A,
        disableBoostClick: h,
        "aria-label": T,
        ...O
      } = e,
      R = O.size ?? 18,
      L = (0, l.bG)([C.default, N.Ay], () => {
        let e = C.default.getCurrentUser();
        return N.Ay.isMember(a?.id, e?.id);
      }),
      y = (0, l.bG)([S.A], () => S.A.theme),
      b = r.useId(),
      G = (0, v.Jp)(a),
      k = (0, D.K)(G),
      F = G.premium && L && !h;
    if (k === D._.NONE) return null;
    let {
      IconComponent: B,
      backgroundDarkColor: V,
      backgroundLightColor: H,
      foregroundDarkColor: j,
      foregroundLightColor: W,
      premiumBackgroundColor: Y,
      premiumForegroundColor: K,
      sizeAdjustment: $,
    } = w[k];
    if (null == B) return null;
    G.premium && ((t = K), (n = Y));
    let z = (0, d.M)(y) ? j : W,
      X = (0, d.M)(y) ? V : H;
    ((t = t ?? z), (n = n ?? X));
    let Z = Math.floor(0.75 * R) - ($ ?? 0),
      { tooltipTitle: q, tooltipSubtitle: Q } = M(k, G.visibility),
      J = T ?? (null != Q ? Q : q),
      ee = (0, i.jsx)(x, { badgeType: k, guildTraits: G }),
      et = (0, i.jsx)(g.A, {
        className: c,
        flowerStarClassName: u,
        allowFullSizedIcon: !0,
        color: n ?? A,
        stroke: E,
        size: R,
        children: (0, i.jsx)(B, {
          size: "custom",
          width: Z,
          height: Z,
          className: _,
          color: t ?? "currentColor",
        }),
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(f.ST, {
          color: s,
          position: o,
          "aria-label": !1,
          text: ee,
          tooltipContentClassName: U.Hj,
          children: (e) =>
            F
              ? (0, i.jsx)(I.D, {
                  ...e,
                  "aria-label": J,
                  "aria-describedby": b,
                  onClick: (t) => {
                    (e.onClick?.(),
                      F &&
                        (t.stopPropagation(),
                        t.preventDefault(),
                        (0, m.K4)({
                          guildId: a.id,
                          location: { section: P.JJy.GUILD_HEADER, object: P.ZSU.BOOST_GEM_ICON },
                        })));
                  },
                  tabIndex: 0,
                  children: et,
                })
              : (0, i.jsx)("div", {
                  ...e,
                  role: "img",
                  "aria-label": J,
                  "aria-describedby": b,
                  tabIndex: -1,
                  children: et,
                }),
        }),
        (0, i.jsx)(p.A, { id: b, children: ee }),
      ],
    });
  }
}
