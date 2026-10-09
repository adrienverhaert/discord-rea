/* Recovered shipped factory. Module 864436.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2716241..2716734
 * Raw property SHA-256: 9df52aff60f0b2f2d56fff6cf7f08a8ca3f46e029bca0828f03b771cc98826dc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(935154),
    l = n(652215),
    o = n(866665);
  n(851883);
  var d = n(607013);
  function c(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: r, className: c, onTooltipShow: u } = e,
      _ = (0, s.S3)(l.clD.ONLINE);
    return null == n
      ? (0, i.jsx)(t, { size: "custom", color: _, className: a()(d.Kk, c) })
      : (0, i.jsx)(o.m, {
          ariaHidden: !0,
          text: n,
          delay: 150,
          onTooltipShow: u,
          children: (0, i.jsx)(t, {
            size: "custom",
            color: _,
            className: a()(d.Kk, c),
            "aria-label": r,
          }),
        });
  }
}
