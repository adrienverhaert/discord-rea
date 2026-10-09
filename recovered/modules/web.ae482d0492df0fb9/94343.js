/* Recovered shipped factory. Module 94343.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7993183..7993521
 * Raw property SHA-256: 2f453585dbb9c04646ba5c9ac0ac8fc31a1d37d61aaa0f7dd389e9cba90c7214
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(17928),
    a = n(775602);
  function s(e, t) {
    let n = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion);
    i.useEffect(() => {
      if (!t) return;
      let i = e.current;
      if (null == i) return;
      let r = requestAnimationFrame(() => {
        i.scrollIntoView({ behavior: n ? "auto" : "smooth" });
      });
      return () => cancelAnimationFrame(r);
    }, [e, t, n]);
  }
}
