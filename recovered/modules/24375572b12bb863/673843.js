/* Recovered shipped factory. Module 673843.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 15400..15817
 * Raw property SHA-256: ecb947a6f7285ed72e346bc0317d1344d86d03eb8bcb431e56b09d09e5bf57ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { A: () => u });
  var s = t(582128),
    n = t(17928),
    i = t(73825),
    a = t(97352),
    r = t(394300);
  function u(e) {
    let l = s.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
      { isLoaded: t, isFetching: u } = (0, n.cf)([a.A], () => ({
        isLoaded: null == l || a.A.isLoadedForSKU(l),
        isFetching: null != l && a.A.isFetchingForSKU(l),
      })),
      d = s.useRef(!1);
    s.useEffect(() => {
      null == l || t || u || d.current || ((d.current = !0), (0, i.ur)(l).catch(() => {}));
    }, [l, t, u]);
  }
}
