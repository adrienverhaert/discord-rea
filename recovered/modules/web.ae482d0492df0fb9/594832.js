/* Recovered shipped factory. Module 594832.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8714499..8717312
 * Raw property SHA-256: b1ace558f9060b47d4b8aa406762ddced7f595bd97421ed2fee3a706670ae429
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Zh: () => T,
    fw: () => N,
    pE: () => R,
    pl: () => p,
    rJ: () => C,
    sv: () => S,
    tA: () => O,
    uS: () => m,
  });
  var i,
    r = n(582128),
    a = n(435558),
    s = n(17928),
    l = n(96203),
    o = n(435658),
    d = n(321191),
    c = n(903209),
    u = n(280450),
    _ = n(287809),
    E = n(808247),
    A = n(820847),
    h = n(107563),
    f = n(855052),
    I = n(792334);
  let p = 5,
    T = 350;
  var m = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i);
  function g(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
  }
  function S(e) {
    let { wishlistIdsAndUsers: t, source: n = A.B.USER_PROFILE } = e,
      i = (0, s.yK)(
        [h.A],
        () =>
          t.map((e) => {
            let { wishlistId: t } = e;
            return null != t ? h.A.getWishlist(t) : null;
          }),
        [t],
      ),
      a = (0, s.bG)(
        [h.A],
        () =>
          t.some((e) => {
            let { wishlistId: t } = e;
            return null != t && h.A.isFetching(t);
          }),
        [t],
      ),
      l = (0, s.yK)(
        [h.A],
        () =>
          t.map((e) => {
            let { wishlistId: t } = e;
            return null != t ? h.A.getError(t) : void 0;
          }),
        [t],
      ),
      o = (0, s.yK)([d.A], () =>
        t.map((e) => {
          let { wishlistId: t, userId: n } = e;
          return null != t ? d.A.getWishlistSettings(n, t)?.updated_at : void 0;
        }),
      ),
      c = r.useMemo(() => {
        let e = {};
        return (
          t.forEach((t, n) => {
            let { userId: i, wishlistId: r } = t;
            n >= o.length || (e[g(i, r)] = o[n]);
          }),
          e
        );
      }, [t, o]);
    return (
      (0, r.useEffect)(() => {
        for (let { wishlistId: e, userId: i } of t) {
          if (null == e || h.A.isFetching(e) || null != h.A.getError(e)) continue;
          let t = h.A.getWishlist(e),
            r = h.A.getUpdatedAt(e),
            a = c[g(i, e)];
          (null == t || (null != a && r !== a)) && E.A.fetchWishlist(e, a, n);
        }
      }, [t, n, c]),
      { wishlists: i, isFetching: a, errors: l }
    );
  }
  function N(e) {
    let { wishlistId: t, userId: n, source: i = A.B.USER_PROFILE } = e,
      [l, c, u, _] = (0, s.yK)([h.A], () =>
        null == t
          ? [null, "success", void 0, void 0]
          : [h.A.getWishlist(t), h.A.getStatus(t), h.A.getError(t), h.A.getUpdatedAt(t)],
      ),
      I = r.useMemo(() => (null == l ? [] : (0, a.uniq)((0, f.Lh)(l))), [l]);
    (0, o.j)({ skuIds: I });
    let p = (0, s.bG)([d.A], () => {
      if (null != t && null != n) return d.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
      (0, r.useEffect)(() => {
        null == t ||
          h.A.isFetching(t) ||
          null != u ||
          ((null == l || (null != p && _ !== p)) && E.A.fetchWishlist(t, p, i));
      }, [t, i, l, p, _, u]),
      {
        wishlist: l,
        isFetching: "fetching" === c,
        wasFetched: "success" === c || "error" === c,
        error: u,
      }
    );
  }
  function C(e, t) {
    return (0, s.bG)([h.A], () => null != e && h.A.hasSkuId(e, t));
  }
  function O(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e;
    r.useEffect(() => {
      n?.id != null && (0, c.A)(n.id);
    }, [n?.id]);
    let a = (0, l.A)({ userId: n?.id }),
      o = (0, s.bG)([d.A], () => (n?.id == null ? null : d.A.getFirstWishlistId(n.id))),
      { wishlist: u } = N({ wishlistId: null != o && t && null != n ? o : null, userId: n?.id }),
      _ = (0, I.B)(u);
    return r.useMemo(
      () => !0 === t && null != n && (_.length > 0 || (i && a.length > 0)),
      [t, n, _, a, i],
    );
  }
  function R() {
    return (function (e) {
      let t = (0, s.bG)([_.default], () => _.default.getUser(e)),
        { userProfile: n, wishlistId: i } = (0, s.cf)(
          [d.A],
          () => ({
            userProfile: null != e ? d.A.getUserProfile(e) : null,
            wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
          }),
          [e],
        );
      return (
        r.useEffect(() => {
          null != e &&
            null == n &&
            null != t &&
            null == n &&
            (0, c.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        { ...N({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
      );
    })((0, s.bG)([u.default], () => u.default.getId()));
  }
}
