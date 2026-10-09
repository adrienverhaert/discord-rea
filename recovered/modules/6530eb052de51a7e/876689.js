/* Recovered shipped factory. Module 876689.
 * Source: recovered/web/assets/6530eb052de51a7e.js
 * UTF-16 property offsets: 95..517
 * Raw property SHA-256: bab2eb2e93933f630eaa236f767deacadc1eaf577df74b9f8065be2306f7fcd0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => c });
  var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(932793),
    u = n(763075);
  function c(e) {
    let {
        onPageChange: t,
        offset: n,
        totalCount: a,
        pageSize: c,
        renderPageWrapper: o,
        className: d,
      } = e,
      f = Math.floor(n / c) + 1,
      h = l.useCallback(
        (e) => {
          t(e - 1);
        },
        [t],
      );
    return (0, r.jsx)("div", {
      className: s()(u.k, d),
      children: (0, r.jsx)(i.m, {
        currentPage: f,
        totalCount: a,
        pageSize: c,
        onPageChange: h,
        maxVisiblePages: 5,
        renderPageWrapper: o,
      }),
    });
  }
}
