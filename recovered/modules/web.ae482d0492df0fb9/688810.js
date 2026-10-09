/* Recovered shipped factory. Module 688810.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2829601..2830328
 * Raw property SHA-256: bc08713327daddfe37cdb31a1487a3832e9401cfa4923e30787a1f078cb933bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => _, Db: () => E, f5: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(812729),
    s = n.n(a),
    l = n(435558),
    o = n.n(l);
  let d = r.createContext([]);
  function c(e) {
    let { children: t, value: n } = e;
    return (0, i.jsx)(d.Provider, { value: n, children: t });
  }
  function u(e, t) {
    return 0 === t.length ? e : [...e, ...o().flatten(t)];
  }
  function _() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(t),
      l = r.useContext(d),
      o = r.useMemo(() => u(l, i), [i, l]),
      c = r.useMemo(() => u(l, i.slice(0, i.length - 1)), [i, l]);
    return (
      r.useEffect(() => {
        s()(t, i) || a(t);
      }, [t, i]),
      {
        analyticsLocations: o,
        sourceAnalyticsLocations: c,
        parentAnalyticsLocation: c[c.length - 1],
        newestAnalyticsLocation: o[o.length - 1],
      }
    );
  }
  function E() {
    return r.useContext(d) ?? [];
  }
}
