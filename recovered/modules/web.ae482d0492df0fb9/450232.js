/* Recovered shipped factory. Module 450232.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6942388..6942904
 * Raw property SHA-256: 65ff84c67d079f0c4d7a642e48430546b2e93c65c57e143c85fa2a61d95e1318
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(866665),
    o = n(403581),
    d = n(660183),
    c = n(192416);
  let u = { inherit: "currentColor", strong: s.A.colors.ICON_STRONG };
  function _(e) {
    let { size: t, color: n, className: r, inline: _ = !1, disabled: E = !1 } = e,
      A = d.intl.string(d.t["5AFxuK"]),
      h = E ? s.A.colors.ICON_MUTED : u.inherit,
      f = null != n ? u[n] : h;
    return (0, i.jsx)(l.m, {
      text: A,
      shouldShow: !E,
      ariaHidden: !0,
      children: (0, i.jsx)(o.t, {
        size: t,
        color: f,
        className: a()({ [c.m]: _ }, r),
        "aria-label": A,
      }),
    });
  }
}
