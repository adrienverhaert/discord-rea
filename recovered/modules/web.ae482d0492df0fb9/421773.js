/* Recovered shipped factory. Module 421773.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6669635..6670081
 * Raw property SHA-256: 32ded8e9f4f997f5c5a189db2dec9f359dd606490a90a81430438bbab56e0363
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128),
    r = n(451988);
  function a(e, t) {
    let [n, a] = i.useState(!1),
      s = i.useRef(new r.J_(t, () => a(!1))),
      l = i.useRef(new r.J_(e, () => a(!0))),
      o = i.useCallback(() => {
        (s.current.cancel(), l.current.cancel());
      }, []);
    i.useEffect(() => o, [o]);
    let d = i.useCallback(() => {
      (o(), s.current.delay());
    }, [o]);
    return {
      isHovered: n,
      setIsHovered: a,
      onMouseEnter: i.useCallback(() => {
        (o(), l.current.delay());
      }, [o]),
      onMouseLeave: d,
      cancelTimers: o,
    };
  }
}
