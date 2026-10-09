/* Recovered shipped factory. Module 366505.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7237340..7238273
 * Raw property SHA-256: df5e51624f7358d8988e89be7087c34ed0c25a28df127a084bb2413954b77920
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => o });
  var i = n(17928),
    r = n(532309),
    a = n(636592),
    s = n(150092),
    l = n(892227);
  function o() {
    let {
        isReady: e,
        programReward: t,
        totalDays: n,
      } = (0, i.cf)([r.A], () => ({
        isReady: r.A.isReady(),
        programReward: r.A.getRewardForProgram(a.W.NITRO),
        totalDays: r.A.getTotalDaysInDuration(a.W.NITRO),
      })),
      o = (0, s.q)();
    return {
      isEligible: !0,
      isReady: e,
      passesGeneralUIInvariant: (function (e) {
        if (null == e) return !1;
        let t = e.next_reward_date,
          n = e.program_current_state;
        if (null == n) return !1;
        if (null == t || "" === t) {
          if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(n)) return !1;
        } else {
          let e = new Date(t).getTime();
          if (Number.isNaN(e) || e < Date.now()) return !1;
        }
        return !0;
      })(t),
      passesProgressBarInvariant: (function (e, t) {
        if (null == e || null == t) return !1;
        let n = e.next_reward_date;
        if (null == n || "" === n) return !1;
        let i = new Date(n).getTime();
        return !(Number.isNaN(i) || i <= Date.now() || (0, l.default)(new Date(n), new Date()) > t);
      })(t, n),
      programReward: t,
      shouldFetch: o,
      totalDays: n,
    };
  }
}
