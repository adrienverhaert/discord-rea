/* Recovered shipped factory. Module 338932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3884587..3885093
 * Raw property SHA-256: 6f4bd8c4c548e1017fa5467e1fb3ae05963a8cd68d3fafb8f62295f9493204b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(775602),
    s = n(531685);
  let l = (e, t) => {
    let n = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion),
      l = (0, r.bG)([s.A], () => s.A.isFocused()),
      [o, d] = i.useState(!1),
      c = i.useRef(null);
    return (
      i.useEffect(() => {
        null !== c.current && (clearTimeout(c.current), (c.current = null));
        let i = l && (e || (!n && !t));
        i && n
          ? (c.current = window.setTimeout(() => {
              d(!0);
            }, 1e3))
          : d(i);
      }, [l, e, n, t]),
      i.useEffect(
        () => () => {
          null !== c.current && (clearTimeout(c.current), (c.current = null));
        },
        [],
      ),
      { canAnimate: o }
    );
  };
}
