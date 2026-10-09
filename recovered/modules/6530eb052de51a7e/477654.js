/* Recovered shipped factory. Module 477654.
 * Source: recovered/web/assets/6530eb052de51a7e.js
 * UTF-16 property offsets: 12171..13029
 * Raw property SHA-256: 9867564a473f5cdcaa58fdfb6654f7512b334e824a43150c6384f591f066332a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { o: () => o });
  var r = n(477900),
    l = n(582128);
  n(309613);
  var a = n(866665),
    s = n(652215),
    i = n(660183);
  let u = 9975 + s.T_y,
    c = 9975 / s.T_y;
  function o(e) {
    let { totalResults: t, isSearching: n, offset: o, searchResultsPaginationKey: d } = e,
      [f, h] = l.useState({ searchResultsPaginationKey: d, totalResults: t });
    l.useEffect(() => {
      n || h({ searchResultsPaginationKey: d, totalResults: t });
    }, [t, n, d]);
    let m = n && f.searchResultsPaginationKey === d,
      g = t;
    n && (g = m ? f.totalResults : 0);
    let E = g > 9975 + s.T_y,
      x = c + 1,
      p = Math.floor(o / s.T_y),
      C = E && p >= c,
      T = l.useCallback(
        (e, t) => {
          if (E && e.targetPage === x) {
            let e = i.intl.formatToPlainString(i.t["E+2azY"], { maxPages: x });
            return (0, r.jsx)(a.m, { asContainer: !0, text: e, children: t });
          }
          return t;
        },
        [E, x],
      );
    return {
      isPaginationTotalCountLimited: E,
      paginationTotalCount: Math.min(g, u),
      paginationMaxIndex: c,
      paginationMaxVisiblePage: x,
      isMaxVisiblePageWarningVisible: C,
      renderPageWrapper: T,
    };
  }
}
