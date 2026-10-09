/* Recovered shipped factory. Module 386784.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5277695..5278043
 * Raw property SHA-256: b372a261b98d5f6642e7197107e3d18d45d3076a3e7334ed9befa937123f874f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(545868),
    s = n(642133);
  let l = {};
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = (0, r.bG)([s.A], () => s.A.getRoleMemberCount(e));
    return (
      i.useEffect(() => {
        if (null == e) return;
        let n = l[e];
        (null != n && t > 0 && Date.now() - n < t) || ((l[e] = Date.now()), a.L(e));
      }, [e, t]),
      n
    );
  }
}
