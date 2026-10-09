/* Recovered shipped factory. Module 212168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6945380..6945978
 * Raw property SHA-256: 22cdff2c6369df03e90b9fef4d3609e533ffa63e9bdd5cd32dedf1fc6a649c40
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c, i: () => o });
  var i,
    r = n(477900);
  n(582128);
  var a = n(503698),
    s = n.n(a),
    l = n(489088),
    o = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
  let d = {
    premium: { border: l.wU, background: l.gI },
    limited: { border: l.rY, background: l.pm },
    newUpsell: { border: l.Ef, background: l.st },
  };
  function c(e) {
    let {
      children: t,
      type: n = "premium",
      isShown: i,
      hasBackground: a = !1,
      className: o,
      backgroundClassName: c,
      ref: u,
    } = e;
    if (!i) return t;
    let { border: _, background: E } = d[n];
    return (0, r.jsx)("div", {
      ref: u,
      className: s()(_, o),
      children: (0, r.jsx)("div", { className: s()(a ? E : l.Tp, c), children: t }),
    });
  }
}
