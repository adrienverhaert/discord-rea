/* Recovered shipped factory. Module 319365.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 73847..74264
 * Raw property SHA-256: 93717fdc67b8c79da17c43c917aa8ed3ed252d128e65ad59f74987d4ad77d745
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { D7: () => r, h1: () => a });
  var l = n(477900),
    i = n(582128);
  let s = i.createContext({ isFocused: !1, isFocusedRef: { current: !1 }, setIsFocused: () => {} });
  function a(e) {
    let { children: t } = e,
      [n, a] = i.useState(!1),
      r = i.useRef(n),
      o = i.useCallback((e) => {
        ((r.current = e), a(e));
      }, []),
      c = i.useMemo(() => ({ isFocused: n, isFocusedRef: r, setIsFocused: o }), [n, o]);
    return (0, l.jsx)(s.Provider, { value: c, children: t });
  }
  function r() {
    return i.useContext(s);
  }
}
