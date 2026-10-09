/* Recovered shipped factory. Module 892019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7764908..7765155
 * Raw property SHA-256: 817d324a8df5903970b4842066b96311e0e5bce44601c551a0886ae6e125ff6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(17928),
    a = n(638128);
  function s(e) {
    let t = (0, r.bG)([a.A], () => a.A.isEnabled());
    i.useEffect(() => {
      null != e && (t ? e.removeAttribute("spellcheck") : e.setAttribute("spellcheck", "false"));
    }, [e, t]);
  }
}
