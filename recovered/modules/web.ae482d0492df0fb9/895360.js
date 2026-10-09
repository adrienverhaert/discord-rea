/* Recovered shipped factory. Module 895360.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3881922..3882581
 * Raw property SHA-256: f814fb027bcaa023673e05db7c6bf8fd9767759855f48b521a03c05c254935df
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => p });
  var i = n(477900),
    r = n(503698),
    a = n.n(r),
    s = n(933832),
    l = n(661531),
    o = n(834730),
    d = n(858899),
    c = n(739187),
    u = n(857250),
    _ = n(97483),
    E = n(973283),
    A = n(660183),
    h = n(819296),
    f = n(655214);
  function I() {
    return (0, i.jsxs)("div", {
      className: a()(f.oR, h.o),
      children: [
        (0, i.jsx)(s.CheckmarkLargeIcon, {
          size: "custom",
          className: h.K,
          color: l.A.colors.STATUS_POSITIVE.css,
        }),
        (0, i.jsx)(o.E, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: A.intl.string(A.t["3T2jbf"]),
        }),
      ],
    });
  }
  function p() {
    (0, E.WD)("showWishlistNuxToast")
      ? (0, d.P0)({ text: A.intl.string(A.t["3T2jbf"]), variant: "success" })
      : (0, c.P)((0, u.o)("", _.Ck.CUSTOM, { component: (0, i.jsx)(I, {}) }));
  }
}
