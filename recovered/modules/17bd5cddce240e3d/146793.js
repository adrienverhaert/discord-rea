/* Recovered shipped factory. Module 146793.
 * Source: recovered/web/assets/17bd5cddce240e3d.js
 * UTF-16 property offsets: 95..690
 * Raw property SHA-256: 1b495adf3852a999a03be68ef0d5a8c5e576d3312dcbfca0050aefc2ed384a8e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { A: () => i });
  var r = t(582128),
    u = t(444927),
    l = t(115718);
  function i(e) {
    let { searchOptions: s } = e,
      [t, i] = r.useState({ results: [], query: "" }),
      a = (0, u.A)(() => {
        let e = new l.Ay((e, s) => {
          i({ results: e, query: s });
        });
        return (e.setLimit(20), e.search(""), e);
      });
    return (
      r.useEffect(() => () => a.destroy(), [a]),
      r.useEffect(() => {
        null != s && s !== a.options && a.setOptions(s);
      }, [a, s]),
      {
        search: r.useCallback(
          (e) => {
            var s;
            let { query: t, resultTypes: r } = e;
            ((null != a.resultTypes &&
              ((s = a.resultTypes), r.length === s.size && r.every((e) => s.has(e)))) ||
              (a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20)),
              a.search("" === t.trim() ? "" : t));
          },
          [a],
        ),
        ...t,
      }
    );
  }
}
