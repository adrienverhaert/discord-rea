/* Recovered shipped factory. Module 483084.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10433014..10433902
 * Raw property SHA-256: 1965ea056e2da586993b050ceb488edb25fb44c61de4921fc05b02fe4a773725
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => a });
  var i = n(582128),
    r = n(715022);
  function a(e) {
    let { active: t, options: n, renderOption: a } = e,
      s = "function" == typeof n,
      [l, o] = i.useState({ options: s ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
      { options: d, loading: c, query: u, debouncedQuery: _ } = l,
      E = i.useCallback((e) => o((t) => ({ ...t, loading: s, query: e, debouncedQuery: e })), [s]);
    (i.useEffect(() => {
      t && E("");
    }, [t, E]),
      i.useEffect(() => {
        let e;
        return (
          s
            ? (o((e) => ({ ...e, loading: !0, debouncedQuery: null })),
              (e = setTimeout(() => {
                E(u);
              }, 500)))
            : E(u),
          () => {
            clearTimeout(e);
          }
        );
      }, [s, u, E]),
      i.useEffect(() => {
        let e = !1;
        return (
          ((t && null !== _ && s) || !s) &&
            ("function" == typeof n ? n(_) : Promise.resolve(n)).then((t) => {
              e || (null != a && (t = t.map(a)), o((e) => ({ ...e, options: t, loading: !1 })));
            }),
          () => {
            e = !0;
          }
        );
      }, [t, n, _, a, s]));
    let A = i.useCallback((e) => {
        o((t) => ({ ...t, query: e }));
      }, []),
      { flatOptions: h, groups: f } = i.useMemo(() => (0, r.yG)(d), [d]);
    return { options: h, groups: f, loading: c, onQueryChange: A };
  }
}
