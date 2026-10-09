/* Recovered shipped factory. Module 846957.
 * Source: recovered/web/assets/1bec1cccc2381692.js
 * UTF-16 property offsets: 95..389
 * Raw property SHA-256: 504e361fd41579d9988c8c0d83aaac324cb8213f35f1c763551a7238b430febc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, r) {
  r.d(e, { B: () => c });
  var s = r(477900),
    d = r(503698),
    l = r.n(d),
    u = r(132198),
    a = r(121615);
  function c(n) {
    let { product: e, animationState: r, className: d } = n,
      c = u.m[e.skuId];
    return null != c
      ? (0, s.jsx)("div", {
          className: l()(a.W4, d),
          children: null != c.render && c.render({ animationState: r, alt: e.name }),
        })
      : null;
  }
}
