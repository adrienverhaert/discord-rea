/* Recovered shipped factory. Module 478531.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3718370..3721135
 * Raw property SHA-256: a98c88996af8e44eaf4798868c0cc79afd37aad445b40d32bfe145b5d5c307e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => L });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(876230),
    o = n(939249),
    d = n(477155),
    c = n(834730),
    u = n(866665),
    _ = n(176781),
    E = n(429913),
    A = n(769015),
    h = n(409626),
    f = n(692969),
    I = n(202163),
    p = n(287809),
    T = n(58703),
    m = n(403362),
    g = n(331446),
    S = n(829648),
    N = n(704796),
    C = n(660183),
    O = n(447177);
  function R(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
      r = (0, E.h)(t),
      { gameRecord: s } = (0, I.A)(t),
      l = (0, f.A)({
        applicationId: t,
        location: "ClipEmbed",
        source: h.GameProfileSources.ClipEmbed,
      }),
      d = s?.name ?? r?.name;
    if (null == d) return null;
    let u = (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(A.A, {
            game: s ?? r,
            size: A.M.XXSMALL,
            className: O.Gt,
            allowUnknownGameIcon: !1,
          }),
          (0, i.jsx)(c.E, {
            className: O.mO,
            variant: "text-sm/normal",
            color: "text-overlay-light",
            children: d,
          }),
        ],
      }),
      _ =
        null != l
          ? (0, i.jsx)(o.D, { className: a()(O.Nn, O.On), onClick: l, children: u })
          : (0, i.jsx)("span", { className: O.Nn, children: u });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        _,
        !0 === n &&
          (0, i.jsx)(c.E, {
            variant: "text-sm/normal",
            color: "text-overlay-light",
            children: "\xb7",
          }),
      ],
    });
  }
  let L = function (e) {
    let {
        createdAt: t,
        participantIds: n,
        applicationId: r,
        title: E,
        guildId: A,
        className: h,
        activeLayer: f,
        playerState: I = l.Q6.PAUSED,
        isControlBarExpanded: L = !0,
        isFullScreen: y = !1,
        showTextContent: D = !0,
        isGridView: v = !1,
        setIsGridView: b,
      } = e,
      M = (0, s.yK)([p.default], () => n.map((e) => p.default.getUser(e)).filter(m.Vq) ?? []),
      P = null != t ? (0, T.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
      className: a()(O.oK, { [O.pd]: I === l.Q6.PLAYING && !L, [O.aS]: y }, h),
      children: [
        (0, i.jsx)("div", { className: O.Lu }),
        (0, i.jsxs)("div", {
          className: O.s$,
          children: [
            v &&
              L &&
              (0, i.jsxs)(o.D, {
                className: O.i9,
                onClick: function (e) {
                  (e.stopPropagation(), b?.(!1));
                },
                children: [
                  (0, i.jsx)(d.r, { color: "white", size: "xs" }),
                  (0, i.jsx)(c.E, {
                    variant: "text-md/semibold",
                    color: "text-overlay-light",
                    children: "Back to single mode",
                  }),
                ],
              }),
            !v &&
              (0, i.jsxs)("div", {
                className: O.yR,
                children: [
                  (0, i.jsxs)("div", {
                    className: O.$,
                    children: [
                      (0, i.jsx)(u.m, {
                        asContainer: !0,
                        text: C.intl.string(C.t["/fgfWh"]),
                        children: (0, i.jsx)(_.x, { className: O.gr, size: "xs", color: "white" }),
                      }),
                      D &&
                        (0, i.jsx)(c.E, {
                          className: O.DD,
                          variant: "text-md/semibold",
                          color: "text-overlay-light",
                          children: null != E && E.length > 0 ? E : C.intl.string(C.t.Cyxddp),
                        }),
                    ],
                  }),
                  D &&
                    (null != r || null != P) &&
                    (0, i.jsxs)("div", {
                      className: O.yu,
                      children: [
                        (0, i.jsx)(R, { applicationId: r, hasTrailingDate: null != P }),
                        null != P &&
                          (0, i.jsx)(c.E, {
                            className: O.BR,
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: P,
                          }),
                      ],
                    }),
                ],
              }),
            !v &&
              M.length > 0 &&
              (0, i.jsxs)("div", {
                className: O.HD,
                role: "group",
                "aria-label": C.intl.string(C.t.WTozwe),
                children: [
                  M.slice(0, 4).map((e) =>
                    (0, i.jsx)(S.A, { layerContext: f, user: e, guildId: A }, e.id),
                  ),
                  M.length > 4 &&
                    (0, i.jsx)(g.w, {
                      layerContext: f,
                      participants: M,
                      maxVisibleParticipants: 4,
                      overflowLabel: C.intl.formatToPlainString(N.default.CJ0I6C, {
                        count: M.length - 4,
                      }),
                      guildId: A,
                    }),
                ],
              }),
          ],
        }),
      ],
    });
  };
}
