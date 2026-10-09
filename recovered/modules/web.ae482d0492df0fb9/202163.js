/* Recovered shipped factory. Module 202163.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4800540..4800821
 * Raw property SHA-256: 1df93a4ccb90063e2bb43e528f15ba163bf4c59567f2ee50656c69c503afe220
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => a }), n(582128), n(17928));
  var i = n(429913);
  (n(403362), n(311043));
  var r = n(569926);
  function a(e) {
    let t = (0, i.h)(e),
      n = null != e && null == t,
      a = t?.getCanonicalGameId() ?? null,
      { data: s, isLoading: l } = (0, r.I)(a);
    return { gameId: a, gameRecord: s ?? null, isLoading: n || l };
  }
}
