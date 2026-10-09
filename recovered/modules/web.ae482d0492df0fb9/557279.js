/* Recovered shipped factory. Module 557279.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7430610..7431269
 * Raw property SHA-256: 2821f864014a106f9fd2c56f1fcb625646244425680863d85667c6b1157d9706
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Di: () => o, S: () => d, gz: () => l });
  var i = n(617617),
    r = n(287809),
    a = n(349435),
    s = n(665909);
  function l() {
    let e = r.default.getCurrentUser()?.isStaff() === !0,
      t = i.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0;
    return ((0, s.Wu)() || e) && t;
  }
  function o(e) {
    let t = a.Ay.getChannelSafetyWarnings(e).filter(
      (e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1,
    );
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
  }
  function d(e) {
    let t = e.filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
  }
}
