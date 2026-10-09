/* Recovered shipped factory. Module 620982.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3170397..3170679
 * Raw property SHA-256: 119a1e9cdce6cb50faddaa411c90ef9d7eac8fdf20256a15d1b26021d236dc17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(280450),
    a = n(470710);
  function s(e) {
    return (0, i.cf)([a.A, r.default], () => {
      let t = a.A.getCall(e),
        n = r.default.getId(),
        i = null != t && null != n && t.ringing.includes(n);
      return { isIncomingCall: i, isOngoingCall: a.A.isCallActive(e) && !i };
    });
  }
}
