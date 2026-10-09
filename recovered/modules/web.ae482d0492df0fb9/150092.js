/* Recovered shipped factory. Module 150092.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7236427..7236942
 * Raw property SHA-256: c09c58082750126ac8888075d960a97ff8fc66b8490a210a1f951a0b11b8666b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => d });
  var i = n(532309),
    r = n(636592),
    a = n(321191),
    s = n(287809),
    l = n(158045),
    o = n(26508);
  function d() {
    let e = i.A.shouldFetch();
    return (
      !!e.shouldFetch ||
      (e.reason === i.V.CACHE_SHOULD_NOT_FETCH &&
        !!(function (e) {
          if ((null != e && e.reward_program !== r.W.NITRO) || !(0, o.CC)()) return !1;
          if (e?.program_current_state === r.L.PAYMENT_PROCESSING) return !0;
          let t = s.default.getCurrentUser(),
            n = null != t ? a.A.getUserProfile(t.id)?.premiumSince : null;
          return !((0, l.To)(n) >= 1) && null == e;
        })(i.A.getRewardForProgram(r.W.NITRO)))
    );
  }
}
