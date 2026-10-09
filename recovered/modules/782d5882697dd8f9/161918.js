/* Recovered shipped factory. Module 161918.
 * Source: recovered/web/assets/782d5882697dd8f9.js
 * UTF-16 property offsets: 95..347
 * Raw property SHA-256: 5de8ad7bd5ca2bd3c3cadb781957adb7358ba41a727d32eacdc692a856b9f575
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Mk: () => l, iM: () => a });
  var r = n(477900),
    i = n(582128);
  let s = i.createContext(null);
  function l() {
    return i.useContext(s);
  }
  function a(e) {
    let { tab: t, children: n } = e,
      l = i.useMemo(() => ({ tab: t }), [t]);
    return (0, r.jsx)(s.Provider, { value: l, children: n });
  }
}
