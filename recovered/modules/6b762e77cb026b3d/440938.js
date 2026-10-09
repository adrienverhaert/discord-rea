/* Recovered shipped factory. Module 440938.
 * Source: recovered/web/assets/6b762e77cb026b3d.js
 * UTF-16 property offsets: 95..364
 * Raw property SHA-256: c45d0ae611b962b9e6f48f32a0e06c68e5dbff5e3fb442f59605043ccdafe491
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, u) {
  u.d(t, { R9: () => i, uM: () => c });
  var n = u(477900),
    r = u(582128);
  let s = r.createContext(null);
  function c() {
    return r.useContext(s);
  }
  function i(e) {
    let { newValue: t, children: u } = e,
      i = c(),
      o = r.useMemo(() => ({ ...i, ...t }), [i, t]);
    return (0, n.jsx)(s.Provider, { value: o, children: u });
  }
}
