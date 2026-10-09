/* Recovered shipped factory. Module 343552.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6058490..6058909
 * Raw property SHA-256: 07a2ac386b0e4217a4e5fe8841e0ffa9e1872afd1f0e2e1b1d1d2252ac1afa4a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => o });
  var i = n(477900),
    r = n(803805),
    a = n(11187),
    s = n(439401),
    l = n(803931);
  let o = (e, t, n, o, d) => () => {
    let c = t ?? n;
    if (null == c) return null;
    let { url: u, proxyURL: _, width: E, height: A } = c,
      h = null != _ && "" !== _ ? _ : u,
      f = (0, a.mW)({ providerName: d, thumbnail: o });
    return (0, i.jsx)(s.A, {
      width: E,
      height: A,
      src: h,
      gifSrc: f,
      url: null != e && "" !== e ? e : null != _ && "" !== _ ? _ : u,
      format: null != n ? r.TL.VIDEO : r.TL.IMAGE,
      className: l.jj,
    });
  };
}
