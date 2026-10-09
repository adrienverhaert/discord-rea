/* Recovered shipped factory. Module 888675.
 * Source: recovered/web/assets/a7facbf97c681538.js
 * UTF-16 property offsets: 114237..115209
 * Raw property SHA-256: 7c7fd4361b8357ff1ed6bb8e7b262428cb0fcc85f0908db707db02d5043d66bb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var l = n(503698),
    s = n.n(l),
    a = n(28863),
    r = n(606049),
    o = n(224929);
  function c(e) {
    let {
      icon: t,
      iconNode: n,
      timestamp: l,
      timestampFormat: a,
      className: c,
      children: d,
      contentClassName: u,
      iconClassName: m,
      iconContainerClassName: x,
      timestampClassName: h,
      compact: g = !1,
      additionalContent: f,
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(c, { [o.kL]: !0, [o.oE]: g, [o.E]: !g }),
      children: [
        null != n && (0, i.jsx)("div", { className: s()(o.zc, x), children: n }),
        null != t &&
          (0, i.jsx)("div", {
            className: o.zc,
            children: (0, i.jsx)("div", {
              "data-accessibility": "desaturate",
              className: s()(o.Kk, o.RK, m),
              style: { backgroundImage: `url('${t}')` },
            }),
          }),
        (0, i.jsxs)("div", {
          className: s()(u, o.Qs),
          children: [
            (0, i.jsxs)("div", {
              children: [
                d,
                null != l && (0, i.jsx)(r.A, { timestamp: l, timestampFormat: a, className: h }),
              ],
            }),
            f,
          ],
        }),
      ],
    });
  }
  c.Action = function (e) {
    let { onClick: t, children: n } = e;
    return (0, i.jsxs)("span", {
      className: o.XI,
      children: ["\u2014", (0, i.jsx)(a.Anchor, { onClick: t, className: o.si, children: n })],
    });
  };
  let d = c;
}
