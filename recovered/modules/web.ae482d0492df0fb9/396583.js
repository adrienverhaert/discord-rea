/* Recovered shipped factory. Module 396583.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2247702..2248114
 * Raw property SHA-256: aa29d6104d632e0e02656affb94de76250738e9570e964443ce7dad3ee12abc6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(284009),
    a = n.n(r);
  function s(e, t) {
    let n = (0, i.useRef)(e),
      r = (0, i.useRef)(null);
    ((0, i.useEffect)(() => {
      n.current = e;
    }, [e]),
      (0, i.useEffect)(() => {
        if (null === t) {
          null !== r.current && (clearInterval(r.current), (r.current = null));
          return;
        }
        return (
          (r.current = setInterval(function () {
            (a()(null != n.current, "Missing callback"), n.current());
          }, t)),
          () => clearInterval(r.current)
        );
      }, [t]));
  }
}
