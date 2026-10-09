/* Recovered shipped factory. Module 116331.
 * Source: recovered/web/assets/3273259ebbc0a8f3.js
 * UTF-16 property offsets: 2028..2959
 * Raw property SHA-256: 83c3757b682c4c5627d1c7044606f00c7151d5453d3b1f34fa2421c75f65ea26
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => A });
  var i = n(17928),
    l = n(107563),
    s = n(594832),
    r = n(287809),
    a = n(249203),
    d = n(419731),
    o = n(321191),
    u = n(695904),
    c = n(419341);
  let m = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
  function A(t) {
    let e = (0, u.bq)(),
      n = (0, c.A)(t),
      A = (0, i.bG)(
        [o.A, a.A, r.default],
        () => {
          if (null == e || t.id === r.default.getCurrentUser()?.id) return null;
          let n = o.A.getFirstWishlistId(t.id);
          if (null == n) return null;
          let i = o.A.getWishlistSettings(t.id, n);
          return (0, d.ds)(i, a.A.getEntry(t.id)) ? n : null;
        },
        [t, e],
      );
    return (
      (0, s.fw)({ wishlistId: A, userId: t.id }),
      (0, i.cf)(
        [o.A, a.A, r.default, l.A],
        () => {
          if (null == e || t.id === r.default.getCurrentUser()?.id) return m;
          let i = a.A.getEntry(t.id);
          if (null == i) return m;
          let s = n ? o.A.getFirstWishlistId(t.id) : null,
            u = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((t) =>
              (0, d.f3)(t.addedAt, i.lastViewedAt),
            ).length;
          return {
            hasNewWishlistItems: e.enabled && u > 0,
            newWishlistItemCount: u,
            shouldLogExposure: u > 0,
          };
        },
        [t, e, n],
      )
    );
  }
}
