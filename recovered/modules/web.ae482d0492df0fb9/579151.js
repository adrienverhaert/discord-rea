/* Recovered shipped factory. Module 579151.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3829819..3830971
 * Raw property SHA-256: 25f32f707ad03806f12d46637266ba7301bf55d4487894f951babd531201a88f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(354328),
    r = n(582128),
    a = n(635358),
    s = n(17928),
    l = n(736056),
    o = n(815996),
    d = n(590180),
    c = n(758836);
  function u(e, t) {
    let n = e?.paymentGateway;
    return (function (e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, s.bG)([l.A], () => l.A.hasLoadedExperiments),
        [_, E, A, h, f, I, p] = (0, s.yK)([d.A], () => [
          d.A.isFetchingCategories,
          d.A.lastFetchOptions,
          d.A.error,
          d.A.lastErrorTimestamp ?? 0,
          d.A.lastSuccessfulFetch ?? 0,
          d.A.categories,
          d.A.skipNumCategories,
        ]);
      return (
        (0, r.useEffect)(() => {
          if (i || !u || d.A.isFetchingCategories) return;
          let r = Date.now() - h < c.Zq;
          if (A && r) return;
          let s = {
              ...e,
              variantsReturnStyle: a.g.VARIANTS_GROUP,
              includeBundles: !0,
              skipNumCategories: p,
            },
            l = !(0, o.gn)(E, s),
            _ = Date.now() - f < c.i0;
          (l || !_) && (0, o.CK)(s, t, n);
        }, [i, u, E, f, e, A, h, t, n, p]),
        {
          isFetching: _,
          categories: I,
          fetchCategoriesError: A,
          refreshCategories: (0, r.useCallback)(() => {
            let t = {
              ...e,
              variantsReturnStyle: a.g.VARIANTS_GROUP,
              includeBundles: !0,
              skipNumCategories: p,
            };
            (0, o.CK)(t, void 0, n);
          }, [e, n, p]),
        }
      );
    })(
      {
        noCache: (0, i.A)("shop_disable_cache"),
        includeUnpublished: (0, i.A)("shop_include_unpublished"),
        paymentGateway: n,
        logPerf: e?.logPerf,
      },
      void 0,
      t,
      e?.skipFetch,
    );
  }
}
