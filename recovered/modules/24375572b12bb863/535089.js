/* Recovered shipped factory. Module 535089.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 1055..1354
 * Raw property SHA-256: c3609063bfd630d34e10d750152f65fd83a9dc3a05a03e992999b681347526bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { A: () => i });
  var s = t(582128),
    n = t(172218);
  function i(e) {
    let { wishlistId: l, onAction: t, productLines: i } = e,
      [a, r] = (0, s.useState)(!1),
      u = (0, s.useCallback)(
        (e) => {
          e &&
            null != l &&
            (t({ action: "VIEW_WISHLIST", wishlistId: l, productLines: i ?? void 0 }), r(!0));
        },
        [l, t, i],
      );
    return (0, n.K)(u, void 0, null != l && !a);
  }
}
