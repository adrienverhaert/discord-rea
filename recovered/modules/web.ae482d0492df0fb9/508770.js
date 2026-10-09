/* Recovered shipped factory. Module 508770.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9888261..9888955
 * Raw property SHA-256: f2217c6e38b75b9acf5c580f778027dcfbeceb78f0b7d40a9b972ba163a5bb45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => u, U: () => c });
  var i = n(477900),
    r = n(503698),
    a = n.n(r),
    s = n(85463),
    l = n(460890),
    o = n(834730),
    d = n(963434);
  function c(e) {
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e, variant: "brand" } : e;
  }
  function u(e) {
    let { type: t, variant: n = "default", icon: r } = e,
      { i18n: c } = (0, l.G9)(),
      u = (function (e, t) {
        switch (e) {
          case "new":
            return t.NEW;
          case "beta":
            return t.BETA;
          case "early_access":
            return t.EARLY_ACCESS;
          case "free_trial":
            return t.BILLING_TRIAL_FREE_TRIAL_TEXT;
          default:
            return e.text;
        }
      })(t, c),
      _ = (0, s.N)();
    return (0, i.jsxs)(o.E, {
      variant: _,
      className: a()(d.badge, d[n]),
      children: [
        null != r && (0, i.jsx)(r, { size: "xxs", color: "currentColor" }),
        (0, i.jsx)("span", { className: d.label, children: u }),
      ],
    });
  }
}
