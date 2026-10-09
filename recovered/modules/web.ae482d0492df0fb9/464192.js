/* Recovered shipped factory. Module 464192.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7823529..7824135
 * Raw property SHA-256: 7711b31ccf5879108d12e848537669658a16474c61083076e670beb979b8fcd4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { LH: () => c, S: () => u, Wt: () => d });
  var i = n(687123),
    r = n(17928),
    a = n(155718),
    s = n(207560),
    l = n(287809);
  function o(e) {
    return null != e && e !== a.Tk.VERIFIED_ADULT && e !== a.Tk.VERIFIED_TEEN;
  }
  function d() {
    return (0, s.d6)(i.t.NOTICE) && o(l.default.getCurrentUser()?.ageVerificationStatus);
  }
  function c() {
    let e = (0, s.aX)(i.t.NOTICE),
      t = (0, r.bG)([l.default], () => o(l.default.getCurrentUser()?.ageVerificationStatus));
    return e && t;
  }
  function u() {
    let e = (0, s.aX)(i.t.NOTICE),
      t = (0, r.bG)([l.default], () => {
        var e;
        return (
          o((e = l.default.getCurrentUser()?.ageVerificationStatus)) && e !== a.Tk.INFERRED_ADULT
        );
      });
    return e && t;
  }
}
