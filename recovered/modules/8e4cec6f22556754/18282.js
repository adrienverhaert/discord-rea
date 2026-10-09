/* Recovered shipped factory. Module 18282.
 * Source: recovered/web/assets/8e4cec6f22556754.js
 * UTF-16 property offsets: 3572..4045
 * Raw property SHA-256: 10480a7eb25f0d063989ace5b5893ca935cb787af4660dc17e62c98244731cb7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => u });
  var l = n(477900);
  n(582128);
  var r = n(602853),
    a = n(661531),
    i = n(866665),
    s = n(939249),
    o = n(963966);
  function u(e) {
    let { onClick: t, Icon: n, "aria-label": u } = e,
      c = (0, r.r)(a.A.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
      d = (0, l.jsx)(n, { color: c.hex(), size: "custom", width: 16, height: 16 });
    return null == t
      ? (0, l.jsx)("div", { className: o.k, "aria-label": u, children: d })
      : (0, l.jsx)(i.m, {
          asContainer: !0,
          text: u,
          children: (0, l.jsx)(s.D, { className: o.k, onClick: t, children: d }),
        });
  }
}
