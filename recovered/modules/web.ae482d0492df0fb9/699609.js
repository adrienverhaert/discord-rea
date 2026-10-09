/* Recovered shipped factory. Module 699609.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5630144..5635661
 * Raw property SHA-256: 7a0a8adc456bc06ebc19414ccbc7885e4efe8ab502d32071cfb250b0f920b2cc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => q, A: () => Z });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(661531),
    d = n(862482),
    c = n(417098),
    u = n(922016),
    _ = n(866665),
    E = n(695366),
    A = n(669953),
    h = n(713125),
    f = n(608401),
    I = n(739455),
    p = n(468689),
    T = n(976860),
    m = n(309010),
    g = n(967198),
    S = n(792831),
    N = n(147925),
    C = n(723702),
    O = n(529942),
    R = n(164956);
  n(321073);
  var L = n(136722),
    y = n(834730),
    D = n(230937),
    v = n(44482),
    b = n(260509),
    M = n(34457),
    P = n(696451),
    U = n(317525),
    w = n(71393),
    G = n(287809),
    x = n(488926),
    k = n(935208),
    F = n(209700),
    B = n(652215),
    V = n(660183),
    H = n(588397);
  function j(e) {
    let { guildId: t } = e,
      n = (0, l.bG)([G.default], () => G.default.getCurrentUser()),
      a = (0, l.bG)([w.A], () => w.A.getGuild(t)),
      s = (0, l.bG)([U.A], () => U.A.getRolesSnapshot(t)),
      o = (0, l.bG)([U.A], () => U.A.getSortedRoles(t)),
      { impersonateType: d, viewingRoles: c } = (0, l.cf)([R.A], () => ({
        impersonateType: R.A.getImpersonateType(t),
        viewingRoles: R.A.getViewingRoles(t),
      })),
      u = d === F._.SERVER_SHOP,
      _ = (0, l.bG)([P.Ay], () => (null != n ? P.Ay.getTrueMember(t, n.id) : null)),
      E = null != a ? s[(0, b.af)(a)] : null,
      [A, h] = r.useState(() => {
        let e = null == c ? [] : k.default.keys(c);
        return (null != E && e.push(E.id), e);
      }),
      f = r.useRef(a);
    r.useEffect(() => {
      let e = {},
        t = f.current;
      if (null != t && null != d) {
        for (let t of A) {
          let n = s[t];
          null != n && (e[t] = n);
        }
        (0, O.IA)(t.id, { type: d, roles: e });
      }
    }, [A, d, s]);
    let I = null != a && null != n && null != _ ? o.find((e) => _.roles.includes(e.id)) : void 0,
      p = r.useMemo(
        () =>
          null != a && null != n
            ? o
                .filter((e) => !(0, M.Oy)(e))
                .filter((e) => !u || e.tags?.subscription_listing_id != null)
                .filter((e) => I?.id === e.id || x.wO(a, n.id, I, e))
            : [],
        [a, n, u, I, o],
      ),
      T = r.useMemo(() => {
        let e = Array.from(p).map((e) => ({
          leading: W(e),
          value: e.id,
          label: e.name,
          id: e.id.toString(),
          disabled: !1,
        }));
        return (
          null != a &&
            null != E &&
            e.push({
              leading: W(E),
              value: E.id,
              label: E.name,
              id: E.id.toString(),
              disabled: !0,
            }),
          e
        );
      }, [p, a, E]);
    if (null == n || null == a || null == _) return null;
    let m = {};
    return (_.roles.forEach((e) => {
      let t = s[e];
      null != t && (m[t.id] = t);
    }),
    L.zy(x.aH({ forceRoles: m, context: a }), L.kg(B.xBc.MANAGE_GUILD, B.xBc.MANAGE_ROLES)) ||
      (0, b.bM)(a, n))
      ? (0, i.jsx)("div", {
          className: H.kL,
          children: (0, i.jsxs)(D.iS, {
            selectionMode: "multiple",
            options: T,
            value: A,
            onSelectionChange: (e) => {
              h(e);
            },
            children: [
              (0, i.jsx)(D.a3, {
                hideTags: !0,
                autoFocus: !0,
                placeholder: V.intl.string(V.t.Sojqsr),
              }),
              (0, i.jsx)(D.X2, { renderListItem: (e) => (0, i.jsx)(v.c, { ...e }) }),
            ],
          }),
        })
      : (0, i.jsx)(y.E, { variant: "text-md/medium", children: V.intl.string(V.t.MNSTbY) });
  }
  function W(e) {
    return () =>
      (0, i.jsx)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("circle", {
          cx: "6",
          cy: "6",
          r: "6",
          fill: e.colorString ?? "currentColor",
        }),
      });
  }
  var Y = n(746080);
  n(500208);
  var K = n(2242),
    $ = n(539009);
  function z(e) {
    let { className: t, onClick: n, children: r, buttonRef: a } = e;
    return (0, i.jsx)(d.$n, {
      buttonRef: a,
      className: s()($.x6, t),
      innerClassName: $.hZ,
      look: d.$n.Looks.OUTLINED,
      color: d.$n.Colors.WHITE,
      size: d.$n.Sizes.NONE,
      onClick: n,
      children: r,
    });
  }
  function X(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(z, { onClick: t, className: n, children: V.intl.string(V.t.R9GHya) });
  }
  function Z() {
    let e = r.useRef(null),
      t = (0, l.bG)([g.A], () => g.A.getGuildId()),
      n = (0, l.bG)([m.Ay], () => m.Ay.getChannelId(t)),
      {
        viewingRoles: a,
        backNavigationSection: s,
        isFullServerPreview: d,
        isServerShopPreview: C,
      } = (0, l.cf)([R.A], () => ({
        viewingRoles: null != t ? R.A.getViewingRoles(t) : null,
        backNavigationSection: R.A.getBackNavigationSection(t),
        isFullServerPreview: null != t && R.A.isFullServerPreview(t),
        isServerShopPreview: null != t && R.A.isViewingServerShop(t),
      }));
    if (null == a || null == t) return null;
    let L = (function (e) {
        switch (e) {
          case B.BEX.INTEGRATIONS:
            return V.intl.string(V.t.k7LGdh);
          case B.BEX.ROLE_SUBSCRIPTIONS:
            return V.intl.string(V.t.bRqiqa);
          case B.BEX.ONBOARDING:
            return V.intl.string(V.t.qZpU3S);
          default:
            return V.intl.string(V.t.MTIXhi);
        }
      })(s),
      y = s === B.BEX.ROLE_SUBSCRIPTIONS ? V.intl.string(V.t.hZUCzd) : V.intl.string(V.t["/djIh7"]),
      D = n === Y.VV.GUILD_ONBOARDING;
    function v(e) {
      let { backToSettings: n } = e;
      null != t &&
        (R.A.isFullServerPreview(t) && (0, T.pX)(B.BVt.CHANNEL(t)),
        h.Ay.shouldShowOnboarding(t) && (A.A.finishOnboarding(t), (0, f.Jg)(t)),
        (0, O.rf)(t),
        n && p.default.open(t, s),
        s === B.BEX.ROLE_SUBSCRIPTIONS && (0, I.Fx)(t));
    }
    return (0, i.jsxs)(c.$T, {
      color: c.Hv.BRAND,
      className: $.lm,
      children: [
        (0, i.jsxs)(z, {
          onClick: () => v({ backToSettings: !0 }),
          className: $.R4,
          children: [
            (0, i.jsx)(S.A, {
              width: 16,
              height: 16,
              direction: S.A.Directions.LEFT,
              className: $.lJ,
            }),
            L,
          ],
        }),
        D && d
          ? (0, i.jsx)("div", {
              className: $.XI,
              children: (0, i.jsx)("div", { className: $.ut, children: V.intl.string(V.t.PxbiAf) }),
            })
          : (0, i.jsxs)("div", {
              className: $.XI,
              children: [
                (0, i.jsx)("div", {
                  className: $.ut,
                  children: d
                    ? V.intl.formatToPlainString(V.t["0PHahI"], { numRoles: Object.keys(a).length })
                    : V.intl.formatToPlainString(V.t.vMlK8t, { numRoles: Object.keys(a).length }),
                }),
                (0, i.jsx)(u.Y, {
                  targetElementRef: e,
                  position: "bottom",
                  renderPopout: () => (0, i.jsx)(j, { guildId: t }),
                  children: (t) => {
                    let { onClick: n } = t;
                    return (0, i.jsxs)(z, {
                      onClick: n,
                      buttonRef: e,
                      children: [
                        y,
                        (0, i.jsx)(N.A, {
                          width: 16,
                          height: 16,
                          direction: N.A.Directions.DOWN,
                          className: $.k5,
                        }),
                      ],
                    });
                  },
                }),
                d &&
                  (0, i.jsx)(_.m, {
                    asContainer: !0,
                    text: V.intl.string(V.t.mW4DUE),
                    children: (0, i.jsx)(E.E, {
                      size: "xs",
                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                    }),
                  }),
                C &&
                  (0, i.jsx)(_.m, {
                    asContainer: !0,
                    text: V.intl.formatToPlainString(V.t.eummvd, {
                      maxTiers: K.f7,
                      maxProducts: 50,
                    }),
                    children: (0, i.jsx)(E.E, {
                      size: "xs",
                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                    }),
                  }),
              ],
            }),
        d || s === B.BEX.ROLE_SUBSCRIPTIONS
          ? null
          : (0, i.jsx)(X, { onClick: () => v({ backToSettings: !1 }), className: $.ZY }),
      ],
    });
  }
  function q(e) {
    let { guildId: t } = e;
    return (0, l.bG)([R.A], () => R.A.isViewingRoles(t))
      ? (0, i.jsx)("div", {
          className: s()($.xd, {
            [$.KF]: (0, C.isWindows)(),
            [$.Xz]: (0, C.isMac)(),
            [$.pS]: (0, C.isLinux)(),
          }),
          children: (0, i.jsx)(Z, {}),
        })
      : null;
  }
}
