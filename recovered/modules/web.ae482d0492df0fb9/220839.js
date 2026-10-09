/* Recovered shipped factory. Module 220839.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2253658..2253910
 * Raw property SHA-256: 097f897b371d6990dc7a4a7b984ad82bf3ae0276bdc4be2dc8f7a7e2fb9159e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(582128);
  let r = function (e, t) {
    let n = (0, i.useRef)(e);
    ((0, i.useEffect)(() => {
      n.current = e;
    }, [e]),
      (0, i.useEffect)(() => {
        if (null === t) return;
        let e = setTimeout(() => n.current(), t);
        return () => clearTimeout(e);
      }, [t, n]));
  };
}
