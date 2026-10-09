/* Recovered shipped factory. Module 584904.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8091001..8091974
 * Raw property SHA-256: 159fb2dabf2449cf91cfccc13bae5fe80bfaf5311f30cbe3dfa5bec5f91a0090
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(890856),
    l = n(688810),
    o = n(183555),
    d = n(402860),
    c = n(946356),
    u = n(939496),
    _ = n(518477),
    E = n(996988),
    A = n(660183),
    h = n(260155);
  function f(e) {
    let {
        children: t,
        className: n,
        profileModalScrollTarget: r,
        onAction: f,
        onClose: I,
        "aria-labelledby": p,
        ref: T,
        ...m
      } = e,
      { themeType: g } = (0, u.E)(),
      { analyticsLocations: S } = (0, l.Ay)(),
      { context: N } = (0, o.NJ)();
    return g === E.d.MODAL || g === E.d.MODAL_V2 || N?.userId == null
      ? (0, i.jsx)("article", {
          "aria-labelledby": p,
          children: (0, i.jsx)(c.A.Overlay, { ref: T, className: a()(h.Nr, n), ...m, children: t }),
        })
      : (0, i.jsx)("article", {
          "aria-labelledby": p,
          children: (0, i.jsx)(s.s, {
            className: h.OV,
            "aria-label": A.intl.string(A.t.pD1L1u),
            focusProps: { ringTarget: T },
            onClick: () => {
              (f?.({ action: "PRESS_CARD" }),
                (0, d.openUserProfileModal)({
                  tabSection: _.RP.ACTIVITY,
                  sourceAnalyticsLocations: S,
                  scrollTarget: r,
                  ...N,
                }),
                I?.());
            },
            children: (0, i.jsx)(c.A.Overlay, {
              ref: T,
              className: a()(h.Nr, n),
              ...m,
              children: t,
            }),
          }),
        });
  }
}
