/* Recovered shipped factory. Module 506326.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3997296..4004769
 * Raw property SHA-256: ceccbada3a71460feacda01d044650c65e8776d3f9647add2dc2653e97dc97db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    $X: () => ed,
    K7: () => ea,
    MK: () => ei,
    N5: () => $,
    R_: () => et,
    Rq: () => eu,
    Xr: () => es,
    Xy: () => Q,
    Y8: () => el,
    Yq: () => eE,
    Zc: () => ee,
    er: () => Z,
    fM: () => q,
    fg: () => eo,
    iT: () => eh,
    iq: () => J,
    mG: () => eA,
    sp: () => er,
    tR: () => en,
    zi: () => ec,
  });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(536637),
    d = n.n(o),
    c = n(589812),
    u = n(598748),
    _ = n(681154),
    E = n(974690),
    A = n(379834),
    h = n(866665),
    f = n(140735),
    I = n(834730),
    p = n(983851),
    T = n(661531),
    m = n(183623),
    g = n(323384),
    S = n(687966),
    N = n(177953),
    C = n(432017),
    O = n(246913),
    R = n(291747),
    L = n(417270),
    y = n(768622),
    D = n(369606),
    v = n(825860),
    b = n(605323),
    M = n(748562),
    P = n(306788),
    U = n(531913),
    w = n(47167),
    G = n(927813),
    x = n(403362),
    k = n(935208),
    F = n(20805),
    B = n(202195),
    V = n(583846),
    H = n(299846),
    j = n(693879);
  n(424994);
  var W = n(660183),
    Y = n(681978);
  let K = {
    [_.ContentInventoryEntryType.TOP_ARTIST]: [el],
    [_.ContentInventoryEntryType.PLAYED_GAME]: [J, ee, Q, ed, en, ea, eo, er, ei],
    [_.ContentInventoryEntryType.TOP_GAME]: [es],
    [_.ContentInventoryEntryType.WATCHED_MEDIA]: [ec, eu],
    [_.ContentInventoryEntryType.LAUNCHED_ACTIVITY]: [J, ee, Q, ed, eo, ei],
  };
  var $ =
    (((i = {})[(i.CARD = 0)] = "CARD"),
    (i[(i.POPOUT = 1)] = "POPOUT"),
    (i[(i.STREAMING_POPOUT = 2)] = "STREAMING_POPOUT"),
    (i[(i.GAME_PROFILE = 3)] = "GAME_PROFILE"),
    (i[(i.USER_PROFILE = 4)] = "USER_PROFILE"),
    (i[(i.EMBED = 5)] = "EMBED"),
    (i[(i.LEADERBOARD_POPOUT = 6)] = "LEADERBOARD_POPOUT"),
    (i[(i.OVERLAY = 7)] = "OVERLAY"),
    (i[(i.FRIENDS_POPOUT = 8)] = "FRIENDS_POPOUT"),
    (i[(i.APP_LAUNCHER = 9)] = "APP_LAUNCHER"),
    (i[(i.VOICE_USER_POPOUT = 10)] = "VOICE_USER_POPOUT"),
    i);
  let z = a.createContext({});
  function X() {
    return a.useContext(z);
  }
  function Z(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)("div", { className: Y.fC, ...n, children: t });
  }
  function q(e) {
    let { Icon: t, text: n, iconColor: i, tooltipText: a, showTooltip: s, a11yText: l } = e,
      { defaultTextColor: o, defaultIconColor: d, location: c } = X();
    return (0, r.jsx)(h.m, {
      text: a,
      shouldShow: s,
      children: (0, r.jsxs)(Z, {
        children: [
          (0, r.jsx)(t, { size: "xxs", color: i ?? d }),
          null != l && (0, r.jsx)(f.A, { children: l }),
          (0, r.jsx)(I.E, {
            variant: "text-xs/normal",
            color: o,
            className: Y.KT,
            scaleFontToUserSetting: 5 === c,
            "aria-hidden": null != l || void 0,
            children: n,
          }),
        ],
      }),
    });
  }
  function Q(e) {
    let { entry: t } = e,
      { channel: n } = (0, B.A)(t),
      { location: i } = X(),
      a = (0, w.Ay)(n);
    return null == n || (0, x.S1)(i, [1, 2, 3, 4]) ? null : (0, r.jsx)(q, { Icon: p.H, text: a });
  }
  function J(e) {
    let { entry: t, hovered: n } = e,
      { defaultTextColor: i, defaultIconColor: a, location: s } = X(),
      l = (0, V.Hd)(t) && (0, x.S1)(s, [0, 4, 7, 9]),
      o = l ? T.A.colors.TEXT_FEEDBACK_POSITIVE : a,
      { streamPreviewUrl: d } = (0, B.A)(t),
      c = null != d ? m.F : (0, F.yl)(t) ? g.k : S.GameControllerIcon;
    return (0, r.jsxs)(Z, {
      children: [
        (0, r.jsx)(c, { size: "xxs", color: o }),
        (0, r.jsx)(j.A, {
          entry: t,
          textColor: l ? "text-feedback-positive" : i,
          hovered: n,
          scaleFontToUserSetting: 5 === s,
        }),
      ],
    });
  }
  function ee(e) {
    let { entry: t } = e,
      { defaultTextColor: n, defaultIconColor: i } = X(),
      { state: a, party: s } = (0, H.u)(t),
      l = (0, V.gF)(a, s);
    return null == l
      ? null
      : (0, r.jsxs)(Z, {
          children: [
            (0, r.jsx)(N.n, { size: "xxs", color: i }),
            (0, r.jsx)(I.E, { variant: "text-xs/normal", color: n, lineClamp: 1, children: l }),
          ],
        });
  }
  function et(e) {
    let { entry: t, hovered: n } = e,
      { defaultTextColor: i, defaultIconColor: a, location: s } = X(),
      l = (0, V.Hd)(t) && (0, x.S1)(s, [0, 4]),
      o = l ? T.A.colors.TEXT_FEEDBACK_POSITIVE : a;
    return (0, r.jsxs)("div", {
      className: Y.fC,
      children: [
        (0, r.jsx)(C.T, { size: "xxs", color: o }),
        (0, r.jsx)(j.A, { entry: t, textColor: l ? "text-feedback-positive" : i, hovered: n }),
      ],
    });
  }
  function en(e) {
    let { entry: t } = e,
      { location: n } = X(),
      i = (0, x.S1)(n, [0, 3]) ? T.A.colors.STATUS_POSITIVE : void 0;
    return (0, V.Rf)(t)
      ? (0, r.jsx)(q, { Icon: O.P, text: W.intl.string(W.t.keY6mW), iconColor: i })
      : null;
  }
  function ei(e) {
    let { entry: t } = e,
      { location: n } = X();
    if (!(0, V.L7)(t)) return null;
    let i = (0, V.JM)(t),
      { text: a, tooltipText: s, a11yText: l } = (0, V.Pj)(t);
    return null == a
      ? null
      : (0, r.jsx)(q, {
          Icon: R.x,
          text: a,
          tooltipText: s,
          showTooltip: 0 === n && !i,
          a11yText: l,
        });
  }
  function er(e) {
    let { entry: t } = e,
      { location: n } = X(),
      i = 0 !== n,
      a = (0, V.KH)(t);
    if (null == a) return null;
    let s = (0, V.us)(a);
    return (0, r.jsx)(q, {
      Icon: L.RetryIcon,
      showTooltip: !i,
      tooltipText: s,
      text: i ? s : W.intl.string(W.t.adnLsB),
    });
  }
  function ea(e) {
    let { entry: t } = e,
      { location: n } = X(),
      i = (0, V.iy)(t);
    return (0, V.BZ)(t)
      ? (0, r.jsx)(q, {
          Icon: y.g,
          showTooltip: 0 === n,
          text: W.intl.formatToPlainString(W.t["Klie/P"], { days: i }),
          tooltipText: W.intl.formatToPlainString(W.t.PwMe0s, { days: i }),
          a11yText: W.intl.formatToPlainString(W.t.nVLPBf, { days: i }),
        })
      : null;
  }
  function es(e) {
    let { entry: t } = e,
      { location: n } = X(),
      i = 0 !== n,
      a = (0, V.ty)(t);
    if (null == a) return null;
    let s = i ? W.t.C0AxoR : W.t.SDRHgr;
    return (0, r.jsx)(q, {
      Icon: D.TrophyIcon,
      text: (0, r.jsxs)(r.Fragment, {
        children: [
          W.intl.string(W.t["/50eHi"]),
          i ? " \u2014 " : ": ",
          W.intl.format(s, { hours: Math.round(a / G.A.Seconds.HOUR) }),
        ],
      }),
    });
  }
  function el(e) {
    let { entry: t } = e,
      { location: n } = X(),
      i = (0, V.Pv)(t, E.K.AGGREGATE_COUNT)?.count;
    if (null == i) return null;
    let a = (0, x.S1)(n, [1, 2, 5])
      ? W.intl.formatToPlainString(W.t.HtifnG, { count: i })
      : W.intl.formatToPlainString(W.t["jq/Bmu"], { count: i });
    return (0, r.jsx)(q, { Icon: D.TrophyIcon, text: a });
  }
  function eo(e) {
    let { entry: t } = e,
      { location: n } = X();
    if (3 === n) return null;
    let i = (0, V.CZ)(t);
    return null == i || i === A.m.TRENDING_TYPE_UNSPECIFIED
      ? null
      : (0, r.jsx)(q, { Icon: v.FireIcon, text: W.intl.string(W.t.kAlUsy) });
  }
  function ed(e) {
    let { entry: t } = e,
      { location: n } = X();
    if (3 === n) return null;
    let i = k.default.extractTimestamp(t.extra.application_id);
    return d()().diff(d()(i), "days") > 7
      ? null
      : (0, r.jsx)(q, { Icon: b.f, text: W.intl.string(W.t.vYuyWf) });
  }
  function ec(e) {
    let { entry: t, hovered: n } = e,
      { defaultTextColor: i, defaultIconColor: a, location: s } = X(),
      l = (0, V.Hd)(t) && 4 === s,
      o = l ? T.A.colors.TEXT_FEEDBACK_POSITIVE : a;
    return (0, r.jsxs)("div", {
      className: Y.fC,
      children: [
        (0, r.jsx)(M.U, { size: "xxs", color: o }),
        (0, r.jsx)(j.A, { entry: t, textColor: l ? "text-feedback-positive" : i, hovered: n }),
      ],
    });
  }
  function eu(e) {
    let { entry: t } = e,
      n = (0, V.kR)(t.extra.media_assets_large_text);
    if (null == n) return null;
    let i = (0, V.WC)(t.extra.media_assets_large_text);
    return (0, r.jsx)(q, { Icon: P.K, text: n, a11yText: i });
  }
  function e_(e) {
    let { userId: t, widgetApplicationId: n } = e,
      { defaultTextColor: i } = X(),
      a = (0, U.A)(t, n),
      s = a.surfaceConfigs[u.m.ACTIVITY_ACCESSORY];
    return null != s && a.hasIdentity
      ? (0, r.jsx)(Z, {
          children: (0, r.jsx)(c.kH, {
            ...a,
            surface: u.m.ACTIVITY_ACCESSORY,
            surfaceConfig: s,
            layoutProps: { variant: "badge", textColor: i },
          }),
        })
      : null;
  }
  function eE(e) {
    let { entry: t } = e;
    return "applicationWidgetPreview" in t && null != t.applicationWidgetPreview
      ? (0, r.jsx)(e_, {
          userId: t.author_id,
          widgetApplicationId: t.applicationWidgetPreview.widgetApplicationId,
        })
      : null;
  }
  function eA(e) {
    let t,
      { location: n, children: i, className: a } = e;
    return (
      (t = (0, x.S1)(n, [1, 5, 6])
        ? {
            defaultTextColor: "content-inventory-overlay-text-secondary",
            defaultIconColor: T.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
          }
        : 2 === n
          ? { defaultTextColor: "interactive-text-default" }
          : 3 === n
            ? { defaultTextColor: "text-muted" }
            : 4 === n
              ? { defaultTextColor: "text-subtle", defaultIconColor: T.A.colors.TEXT_SUBTLE }
              : { defaultTextColor: "text-subtle" }),
      (0, r.jsx)(z.Provider, {
        value: { location: n, ...t },
        children: (0, r.jsx)("div", {
          className: l()(
            Y.cV,
            { [Y.u3]: 0 === n, [Y.BQ]: (0, x.S1)(n, [1, 2, 10]), [Y.DY]: 3 === n },
            a,
          ),
          children: i,
        }),
      })
    );
  }
  function eh(e) {
    let { entry: t, location: n, className: i } = e,
      a = (function (e) {
        switch (e.content_type) {
          case _.ContentInventoryEntryType.TOP_ARTIST:
            return K[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
          case _.ContentInventoryEntryType.PLAYED_GAME:
            return K[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
          case _.ContentInventoryEntryType.TOP_GAME:
            return K[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
          case _.ContentInventoryEntryType.WATCHED_MEDIA:
            return K[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
          case _.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return K[e.content_type].map((t, n) => (0, r.jsx)(t, { entry: e }, n));
          default:
            return null;
        }
      })(t);
    return null == a ? null : (0, r.jsx)(eA, { location: n, className: i, children: a });
  }
}
