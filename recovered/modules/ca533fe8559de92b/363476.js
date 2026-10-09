/* Recovered shipped factory. Module 363476.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 366837..367437
 * Raw property SHA-256: ff474d457741778642dbdbccf70bea09e9944e24c8a6c718facc477d81df4521
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => c });
  var l = n(477900);
  n(582128);
  var i = n(503698),
    r = n.n(i),
    a = n(580630),
    s = n(202541),
    o = n(660183),
    u = n(428212);
  function c(e) {
    let {
        price: t,
        currency: n,
        intervalType: i,
        className: c,
        intervalCount: d = 1,
        isPrepaidPaymentSource: p = !1,
      } = e,
      m = (0, a.$g)(t, n),
      h = null;
    return (
      i === s.WT.YEAR
        ? (h = o.intl.format(o.t["3U719t"], { price: m }))
        : i === s.WT.MONTH && 1 === d
          ? (h = o.intl.format(o.t.NkR7BU, { price: m }))
          : i === s.WT.MONTH &&
            d > 1 &&
            (h = o.intl.format(o.t.CNAGg4, { price: m, intervalCount: d })),
      (0, l.jsx)("div", {
        className: r()(u.zz, c),
        "data-testid": `PricePerInterval-${n}`,
        children: null == i || p ? (0, l.jsx)("strong", { children: m }) : h,
      })
    );
  }
}
