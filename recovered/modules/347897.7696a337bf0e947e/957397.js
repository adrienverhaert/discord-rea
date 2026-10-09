/* Recovered shipped factory. Module 957397.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1131628..1132340
 * Raw property SHA-256: 08ed012cb1d11492a77bdec3817f717983403fc47edfba4b654c701e7031ff51
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Wc: () => f, gY: () => c });
  var n = r(64480),
    i = r(184093),
    o = r(67669),
    a = r(668310),
    s = r(475921),
    l = r(808141),
    u = r(582128);
  let c = u.createContext(null);
  function f(e, t) {
    let { focusProps: r } = (0, o.i)(e),
      { keyboardProps: s } = (0, a.d)(e),
      f = (0, i.v)(r, s),
      p = (function (e) {
        let t = (0, u.useContext)(c) || {};
        (0, l.w)(t, e);
        let { ref: r, ...n } = t;
        return n;
      })(t),
      d = e.isDisabled ? {} : p,
      h = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
      (h.current && t.current && (0, n.l)(t.current), (h.current = !1));
    }, [t]);
    let m = e.excludeFromTabOrder ? -1 : 0;
    return (e.isDisabled && (m = void 0), { focusableProps: (0, i.v)({ ...f, tabIndex: m }, d) });
  }
  u.forwardRef(function (e, t) {
    let { children: r, ...n } = e,
      i = (0, s.U)(t),
      o = { ...n, ref: i };
    return u.createElement(c.Provider, { value: o }, r);
  });
}
