/* Recovered shipped factory. Module 564107.
 * Source: recovered/web/assets/8e4cec6f22556754.js
 * UTF-16 property offsets: 50660..50978
 * Raw property SHA-256: 18cab7370ae06674dabe8aa132201775afa4508f8ff291540a6def5b2319a4c5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { N: () => s, X: () => i });
  var l = n(477900),
    r = n(582128);
  let a = r.createContext(null);
  function i() {
    let e = r.useContext(a);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
  }
  function s(e) {
    let { children: t, ...n } = e;
    return (0, l.jsx)(a.Provider, { value: n, children: t });
  }
}
