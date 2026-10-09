/* Recovered shipped factory. Module 755172.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3830972..3832539
 * Raw property SHA-256: 6f74a2d175ee94ac2d7f63ae18caa5cf67ac807ecec9ec6e59ce7216ca219686
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => E });
  var i = n(582128),
    r = n(635358),
    a = n(17928),
    s = n(736056),
    l = n(815996),
    o = n(590180),
    d = n(295811),
    c = n(651162),
    u = n(652215),
    _ = n(758836);
  function E(e, t, n) {
    let E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      A = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
      h = (0, a.bG)([o.A], () => o.A.skipNumCategories),
      [f, I, p, T, m, g, S, N] = (0, a.yK)([d.A], () => [
        d.A.getShopBlocks(e),
        d.A.getLastSuccessfulFetch(e) ?? 0,
        d.A.getLastErrorTimestamp(e) ?? 0,
        d.A.getLastFetchOptions(e),
        d.A.getFetchShopHomeError(e),
        d.A.getIsFetchingShopHome(e),
        d.A.getHasKnownStaleData(e),
        d.A.getShopHomeConfigOverride(),
      ]),
      C = (0, i.useMemo)(
        () => ({
          ...t,
          variantsReturnStyle: r.g.VARIANTS_GROUP,
          includeBundles: !0,
          includeDynamicBlocks: !0,
          shopHomeConfig: N,
          skipNumCategories: h,
        }),
        [t, N, h],
      ),
      O = (0, i.useMemo)(() => !(0, l.gn)(T, C), [T, C]),
      R = ((e, t, n) => {
        let [r, a] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let i,
              r =
                ((i = null),
                e.forEach((e) => {
                  let t = null;
                  (e.type === c.g.IMMERSIVE_BANNER
                    ? (t = null != e.endTime ? e.endTime.getTime() : null)
                    : e.type === c.g.COUNTDOWN_TIMER && (t = e.endTime.getTime()),
                    (null == i || (null != t && t < i)) && (i = t));
                }),
                i);
            if (t || n || null == r) return void a(!1);
            let s = r - Date.now();
            if (s <= 0) return void a(!0);
            a(!1);
            let l = setTimeout(
              () => {
                a(!0);
              },
              Math.min(u.mnr, s),
            );
            return () => clearTimeout(l);
          }, [t, n, e]),
          r
        );
      })(f, g ?? !1, E),
      L = (0, i.useMemo)(() => !R && Date.now() - I < _.i0, [I, R]);
    return (
      (0, i.useEffect)(() => {
        if (!A || g) return;
        let t = Date.now() - p < _.Zq;
        (null != m && t) || ((O || !L || S) && (0, l.h$)(e, C, n));
      }, [A, g, m, p, L, S, O, C, e, n]),
      {
        isFetchingShopHome: g,
        fetchShopHomeError: m,
        shopBlocks: f,
        refreshShopHome: (0, i.useCallback)(() => {
          (0, l.h$)(e, C, n);
        }, [e, C, n]),
      }
    );
  }
}
