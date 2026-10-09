/* Recovered shipped factory. Module 132860.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5325676..5326108
 * Raw property SHA-256: b1757569ef68915146a8a5cd9deaab30b3ac05faea36d14ac0e02d8fb2384211
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(280450),
    r = n(576705),
    a = n(607567),
    s = n(488926),
    l = n(698441),
    o = n(219935);
  function d(e) {
    if (
      !e.isGuildVoice() ||
      l.Ay.getGuildScheduledEventsByIndex(l.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
      !r.A.can(o.EN, e)
    )
      return !1;
    let t = new Set(a.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
      n = i.default.getId();
    for (let i of t) if (i !== n && s.$3({ permission: o.EN, user: i, context: e })) return !1;
    return !0;
  }
}
