/* Recovered shipped factory. Module 704824.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2907869..2908572
 * Raw property SHA-256: 413c2ac99021032465355e6e0f25929aca30fad413ab99cf71f5b7a6f5af1dc0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => d, j: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(712440),
    s = n(733110),
    l = n(403362);
  function o(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
      o = (0, r.yK)(
        [s.default],
        () => e?.map((e) => s.default.getNewestTokenForApplication(e)).filter(l.Vq) ?? [],
        [e],
      ),
      d = (0, r.bG)(
        [s.default],
        () =>
          e?.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED) ?? !1,
        [e],
      ),
      c = (0, r.yK)(
        [s.default],
        () =>
          e?.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED) ??
          [],
        [e],
      );
    return (
      i.useEffect(() => {
        n || 0 === c.length || a.A.fetch(c);
      }, [n, c]),
      { tokens: o, fetched: d }
    );
  }
  function d(e, t) {
    let { tokens: n, fetched: r } = o(
      i.useMemo(() => (null != e ? [e] : null), [e]),
      t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: r };
  }
}
